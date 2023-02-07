import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListByCategoryComponent } from './song-list-by-category.component';

describe('SongListByCategoryComponent', () => {
  let component: SongListByCategoryComponent;
  let fixture: ComponentFixture<SongListByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongListByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongListByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
