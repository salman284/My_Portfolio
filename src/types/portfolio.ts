export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  achievement?: string;
  githubUrl: string;
  liveDemoUrl?: string;
  accentColor: string;
  previewType: 'agricultural' | 'food' | 'quiz';
}

export interface ExperienceItem {
  id: string;
  number: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface AchievementItem {
  number: string;
  title: string;
  organizer: string;
  stats: string;
  year: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  details: string;
}
