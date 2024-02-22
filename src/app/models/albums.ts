import { Tracks } from './tracks';

export interface Albums {
  albums: {
    href: string;
    items: item[];
    limit: number;
    next?: string;
    offset: number;
    previous?: string;
    total: number;
  };
}

export interface item {
  album_type: string;
  name: string;
  artists: artist[];
  href: string;
  id: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
  images: image[];
  tracks?: Tracks;
}

export interface artist {
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface image {
  height: number;
  url: string;
  width: number;
}
