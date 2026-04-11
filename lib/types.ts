export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  year?: string;
}

export interface Experience {
  slug: string;
  company: string;
  logo?: string;
  role: string;
  period: string;
  workMode: 'Remote' | 'Hybrid' | 'On-site';
  shortDescription: string;
  longDescription?: string;
  tech?: string[];
  highlights?: string[];
}

export interface Contribution {
  slug: string;
  project: string;
  description: string;
  url?: string;
  type: 'Bug Fix' | 'Feature' | 'Docs' | 'Design' | 'Other';
  tags?: string[];
  year?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  shortDescription: string;
  proficiency: 1 | 2 | 3 | 4 | 5;
  category?: string;
  logo?: string;
}
