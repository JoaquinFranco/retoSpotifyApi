import { Tracks } from './tracks';

export interface Albums {
  albums: {
    href: string;
    items: Item[];
    limit: number;
    next?: string;
    offset: number;
    previous?: string;
    total: number;
  };
}

export interface Item {
  album_type: string;
  name: string;
  artists: Artist[];
  href: string;
  id: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
  images: Image[];
  tracks?: Tracks;
}

export interface Artist {
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}
