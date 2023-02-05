import { TestBed } from '@angular/core/testing';

import { PlayingSongService } from './playing-song.service';

describe('PlayingSongService', () => {
  let service: PlayingSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayingSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
