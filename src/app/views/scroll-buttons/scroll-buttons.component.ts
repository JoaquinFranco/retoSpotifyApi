import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-buttons',
  standalone: true,
  imports: [],
  templateUrl: './scroll-buttons.component.html',
  styleUrl: './scroll-buttons.component.css',
})
export class ScrollButtonsComponent {
  topScroll() {
    window.scrollTo(0, 0);
  }

  downScroll() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
