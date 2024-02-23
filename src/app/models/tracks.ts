import { Artist, Image } from './albums';

export interface Tracks {
  href: string;
  items: Item[];
  limit: number;
  next?: string;
  offset: number;
  previous?: string;
  total: number;
}

export interface Item {
  artists: Artist[];
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
  images: Image[];
  external_urls: {
    spotify: string;
  };
}
