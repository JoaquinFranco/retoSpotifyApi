import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Item } from '../../models/albums';
import { SpotifyService } from '../../services/spotify-service.service';

@Component({
  selector: 'app-album-play-list-card',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './album-play-list-card.component.html',
  styleUrl: './album-play-list-card.component.css',
})
export class AlbumPlayListCardComponent {
  spotifyServices = inject(SpotifyService);
  album = signal<Item | null>(null);

  aux$ = this.spotifyServices.getAlbums();

  ngOnInit(): void {
    this.album.set(
      this.spotifyServices.albumList[this.spotifyServices.albumIndex]
    );
  }

  volver() {
    this.spotifyServices.showPlaylist = false;
  }
}
