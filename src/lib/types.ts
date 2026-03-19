export interface Experience {
  duration: string;
  company: string;
  role: string;
  description: string[];
  link?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  link?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  email: string;
  phone: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
}

export interface PortfolioConfig {
  name: string;
  role: string;
  about: string;
  bio: string;
  contact: SocialLinks;
  skills: string[];
  experience: Experience[];
  projects: Project[];
  certificates: Certificate[];
}

export interface Message {
  sender: 'user' | 'ai';
  text: string;
}