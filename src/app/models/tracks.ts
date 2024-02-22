import { artist, image } from './albums';

export interface Tracks {
  href: string;
  items: item[];
  limit: number;
  next?: string;
  offset: number;
  previous?: string;
  total: number;
}

export interface item {
  artists: artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  images: image[];
  external_urls: {
    spotify: string;
  };
}
