import type { LucideIcon } from 'lucide-react';

export type ViewType = 'dashboard' | 'reviews' | 'posts' | 'geoseo' | 'analytics' | 'settings';

export interface MenuItem {
  id: ViewType;
  label: string;
  icon: LucideIcon;
}

export interface GeoPoint {
  name: string;
  value: number;
  color: string;
}

export interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  text: string;
  reply: string | null;
}

export interface Post {
  id: number;
  text: string;
  imageUrl: string;
  date: string;
  views: number;
}

export interface GeoSeoSuggestions {
  keywords: string[];
  citations: Array<{
    name: string;
    description: string;
  }>;
  rankingFactors: string[];
}

export interface GoogleUserProfile {
  name: string;
  email: string;
  picture: string;
}