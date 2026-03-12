export interface MenuItem {
  id: string;
  day: string;
  date: string;
  main: string;
  sides: string[];
  calories: string;
  week: string; // e.g., "2026-03-W3"
}

export interface Inquiry {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  type: string;
  message: string;
  createdAt: number;
  status: 'pending' | 'contacted' | 'completed';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
  createdAt: number;
}

export interface SiteSettings {
  themeColor: string;
  fontFamily: string;
  heroTitle: string;
  heroSubtitle: string;
  contactPhone: string;
  contactEmail: string;
  contactAddress: string;
}
