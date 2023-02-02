import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovedSongComponent } from './loved-song.component';

describe('LovedSongComponent', () => {
  let component: LovedSongComponent;
  let fixture: ComponentFixture<LovedSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LovedSongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LovedSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
