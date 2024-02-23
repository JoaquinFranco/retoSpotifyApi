import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TOKEN } from '../../assets/claves.json';
import { Albums, Item } from '../models/albums';
import { Item as itemTrack } from '../models/tracks';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private _http: HttpClient) {}
  public res: any = {};
  public albumListFilled: boolean = false;
  public albumList: Item[] = [];
  public trackList: itemTrack[] = [];
  public albumIndex: number = 0;
  public nextAlbumUrl?: string;
  public showPlaylist: boolean = false;
  getAlbums(busqueda?: string, url?: string): Observable<Albums> {
    let link = `https://api.spotify.com/v1/search?q=${busqueda}&type=album`;
    if (!busqueda) {
      link = 'https://api.spotify.com/v1/search?q=default&type=album';
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${TOKEN}`,
    });
    if (url) {
      link = url;
    }
    return this._http.get<Albums>(link, { headers });
  }

  getTracks(url: string): Observable<Item> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${TOKEN}`,
    });
    return this._http.get<Item>(url, { headers });
  }
}
