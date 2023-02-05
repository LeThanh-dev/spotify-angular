import { PlayingSongService } from './../../services/playing-song/playing-song.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {


  constructor(private playingSong: PlayingSongService) {
  }
  ngOnInit(): void {
  }

  getPlayingSong() {
    return this.playingSong.getPlayingSong()
  }

  
}
