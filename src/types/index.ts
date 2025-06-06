export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  resume: string;
  profileImage: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  type: 'Personal Project' | 'Client Work';
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedAt: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skills {
  technical: SkillCategory[];
  soft: string[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  type: 'Full-time' | 'Part-time' | 'Freelance' | 'Internship' | 'Education';
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}
