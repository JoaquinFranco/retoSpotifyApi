import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpotifyService } from './services/spotify-service.service';
import { AlbumPlayListComponent } from './views/album-play-list/album-play-list.component';
import { AlbumsComponent } from './views/albums/albums.component';
import { NavbarComponent } from './views/navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [SpotifyService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    NavbarComponent,
    AlbumsComponent,
    AlbumPlayListComponent,
  ],
})
export class AppComponent {
  constructor(public spotifyServices: SpotifyService) {}
  search($event: string) {
    this.spotifyServices.showPlaylist = false;
    new AlbumsComponent().getAlbums($event, true);
    //viewchild
  }
}
