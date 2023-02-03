import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongNameTemplateComponent } from './song-name-template.component';

describe('SongNameTemplateComponent', () => {
  let component: SongNameTemplateComponent;
  let fixture: ComponentFixture<SongNameTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongNameTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongNameTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
