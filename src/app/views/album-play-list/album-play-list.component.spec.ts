import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPlayListComponent } from './album-play-list.component';

describe('AlbumPlayListComponent', () => {
  let component: AlbumPlayListComponent;
  let fixture: ComponentFixture<AlbumPlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumPlayListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
