(() => {
  const FRAME_COUNT = 300;
  const FOLDER_PATH = './hero section';
  const LERP_FACTOR = 0.09; // Damping factor for smooth scroll physics

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d', { alpha: false });

  const images = new Array(FRAME_COUNT);
  const isLoaded = new Array(FRAME_COUNT).fill(false);

  let currentFrame = 0;
  let targetFrame = 0;
  let lastDrawnFrame = -1;
  let isTicking = false;

  // Build frame URL
  function getFrameUrl(index) {
    const frameNumber = String(index + 1).padStart(3, '0');
    return `${FOLDER_PATH}/ezgif-frame-${frameNumber}.jpg`;
  }

  // Preload all frames progressively
  function preloadImages() {
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        isLoaded[i] = true;
        // If nothing has rendered yet or this frame is currently active, render it
        if (lastDrawnFrame === -1 || Math.round(currentFrame) === i) {
          renderFrame(currentFrame, true);
        }
      };
      images[i] = img;
    }
  }

  // Find nearest loaded frame so canvas is never blank
  function getClosestLoadedImage(targetIdx) {
    const clampedIdx = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(targetIdx)));
    if (isLoaded[clampedIdx] && images[clampedIdx]?.naturalWidth > 0) {
      return images[clampedIdx];
    }

    // Search outwards for the nearest available frame
    for (let radius = 1; radius < FRAME_COUNT; radius++) {
      const prev = clampedIdx - radius;
      if (prev >= 0 && isLoaded[prev] && images[prev]?.naturalWidth > 0) {
        return images[prev];
      }
      const next = clampedIdx + radius;
      if (next < FRAME_COUNT && isLoaded[next] && images[next]?.naturalWidth > 0) {
        return images[next];
      }
    }

    return images[clampedIdx];
  }

  // Responsive high-DPI canvas configuration
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    renderFrame(currentFrame, true);
  }

  // Draw image with object-fit: cover, perfectly centered
  function renderFrame(frameIndex, forceRedraw = false) {
    const rounded = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(frameIndex)));
    if (!forceRedraw && rounded === lastDrawnFrame) {
      return;
    }

    const img = getClosestLoadedImage(rounded);
    if (!img || !img.complete || img.naturalWidth === 0) {
      return;
    }

    const canvasW = window.innerWidth;
    const canvasH = window.innerHeight;
    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;

    // Cover math preserving aspect ratio
    const ratio = Math.max(canvasW / imgW, canvasH / imgH);
    const renderW = imgW * ratio;
    const renderH = imgH * ratio;
    const posX = (canvasW - renderW) * 0.5;
    const posY = (canvasH - renderH) * 0.5;

    ctx.drawImage(img, posX, posY, renderW, renderH);
    lastDrawnFrame = rounded;
  }

  // Calculate target frame from scroll position
  function updateScrollTarget() {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.max(0, Math.min(1, scrollY / maxScroll)) : 0;
    targetFrame = progress * (FRAME_COUNT - 1);

    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(animationLoop);
    }
  }

  // Smooth linear interpolation (lerp) loop
  function animationLoop() {
    const diff = targetFrame - currentFrame;

    if (Math.abs(diff) > 0.005) {
      currentFrame += diff * LERP_FACTOR;
      renderFrame(currentFrame);
      requestAnimationFrame(animationLoop);
    } else {
      currentFrame = targetFrame;
      renderFrame(currentFrame);
      isTicking = false;
    }
  }

  // Window listeners
  window.addEventListener('scroll', updateScrollTarget, { passive: true });
  window.addEventListener('resize', resizeCanvas, { passive: true });
  window.addEventListener('orientationchange', resizeCanvas, { passive: true });

  // Initialize
  resizeCanvas();
  preloadImages();
  updateScrollTarget();
})();
