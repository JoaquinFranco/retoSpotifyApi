import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Tracks } from '../../models/tracks';
import { SpotifyService } from '../../services/spotify-service.service';
import { ScrollButtonsComponent } from '../scroll-buttons/scroll-buttons.component';

@Component({
  selector: 'app-albums',
  standalone: true,
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
  imports: [CommonModule, InfiniteScrollModule, ScrollButtonsComponent],
})
export class AlbumsComponent implements OnInit {
  spotifyServices = inject(SpotifyService);

  ngOnInit(): void {
    if (!this.spotifyServices.albumListFilled) {
      this.getAlbums();
    }
  }
  getAlbums(search?: string, reset?: boolean, url?: string) {
    if (reset) {
      this.spotifyServices.albumList = [];
    }
    this.spotifyServices.albumListFilled = true;
    this.spotifyServices.getAlbums(search, url).subscribe((response) => {
      this.spotifyServices.nextAlbumUrl = response.albums.next;
      response.albums.items.forEach((element) => {
        this.spotifyServices.albumList.push(element);
      });
    });
  }
  toAlbum(url: string, index: number) {
    if (!this.spotifyServices.albumList[index].tracks) {
      this.spotifyServices.getTracks(url).subscribe((response) => {
        this.spotifyServices.albumList[index].tracks = response.tracks;
        this.fillTrackList(
          this.spotifyServices.albumList[index].tracks!,
          index
        );
      });
    } else {
      this.fillTrackList(this.spotifyServices.albumList[index].tracks!, index);
    }
  }

  fillTrackList(tracks: Tracks, index: number) {
    this.spotifyServices.trackList = [];
    tracks?.items.forEach((element) => {
      this.spotifyServices.trackList.push(element);
    });
    this.spotifyServices.albumIndex = index;
    this.spotifyServices.showPlaylist = true;
  }

  onScrollDown() {
    if (this.spotifyServices.nextAlbumUrl) {
      this.getAlbums(undefined, false, this.spotifyServices.nextAlbumUrl);
    }
  }
}
