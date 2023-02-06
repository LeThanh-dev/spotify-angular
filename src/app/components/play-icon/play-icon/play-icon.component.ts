import { Component, Input } from '@angular/core';
import { PlayingSongService } from 'src/app/services/playing-song/playing-song.service';

@Component({
  selector: 'app-play-icon',
  templateUrl: './play-icon.component.html',
  styleUrls: ['./play-icon.component.scss']
})
export class PlayIconComponent {

  @Input() styleCustom!: string;

  constructor(private playingSong: PlayingSongService) { }

  getPlayingSongState() {
    return this.playingSong.getPlayingSong().isPlaying
  }

  playSong() {
    this.playingSong.playSong()
  }

  pauseSong() {
    this.playingSong.pauseSong()
  }
}
