import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListTemplateComponent } from './song-list-template.component';

describe('SongListTemplateComponent', () => {
  let component: SongListTemplateComponent;
  let fixture: ComponentFixture<SongListTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongListTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
