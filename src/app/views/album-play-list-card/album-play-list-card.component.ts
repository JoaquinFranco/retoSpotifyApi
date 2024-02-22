import { Component } from '@angular/core';
import { item } from '../../models/albums';
import { SpotifyService } from '../../services/spotify-service.service';

@Component({
  selector: 'app-album-play-list-card',
  standalone: true,
  imports: [],
  templateUrl: './album-play-list-card.component.html',
  styleUrl: './album-play-list-card.component.css',
})
export class AlbumPlayListCardComponent {
  album!: item;

  constructor(public spotifyServices: SpotifyService) {}

  ngOnInit(): void {
    this.album =
      this.spotifyServices.albumList[this.spotifyServices.albumIndex];
  }

  volver() {
    this.spotifyServices.showPlaylist = false;
  }
}
