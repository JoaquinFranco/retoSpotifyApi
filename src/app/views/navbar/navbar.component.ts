import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  searchText: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  search() {
    if (this.searchText.length > 0) this.searchEvent.emit(this.searchText);
  }
}
