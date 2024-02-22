import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPlayListCardComponent } from './album-play-list-card.component';

describe('AlbumPlayListCardComponent', () => {
  let component: AlbumPlayListCardComponent;
  let fixture: ComponentFixture<AlbumPlayListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumPlayListCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumPlayListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
