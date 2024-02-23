import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SpotifyService } from '../../services/spotify-service.service';
import { AlbumPlayListCardComponent } from '../album-play-list-card/album-play-list-card.component';
import { ScrollButtonsComponent } from '../scroll-buttons/scroll-buttons.component';

@Component({
  selector: 'app-album-play-list',
  standalone: true,
  templateUrl: './album-play-list.component.html',
  styleUrl: './album-play-list.component.css',
  imports: [
    CommonModule,
    InfiniteScrollModule,
    AlbumPlayListCardComponent,
    ScrollButtonsComponent,
  ],
})
export class AlbumPlayListComponent {
  constructor(public spotifyServices: SpotifyService) {}

  onScrollDown() {}
}
