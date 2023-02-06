import { SongApiService } from './../../services/song-api/song-api.service';
import { Component, OnInit } from '@angular/core';
import { SongData } from '../song-list-template/song-list-template.component';
import { PlayingSongService } from 'src/app/services/playing-song/playing-song.service';


@Component({
  selector: 'app-loved-song',
  templateUrl: './loved-song.component.html',
  styleUrls: ['./loved-song.component.scss']
})
export class LovedSongComponent implements OnInit {

  lovedSongListData: SongData[] = []

  constructor(private songService: SongApiService, private playingSong: PlayingSongService) { }
  ngOnInit() {
    this.getSongList()

  }

  getSongList() {
    this.songService.getSongList()
      .subscribe(songList => {
        this.lovedSongListData = songList as SongData[]
        !this.playingSong.getPlayingSong().songID && this.playingSong.setPlayingSong(this.lovedSongListData[0])
      })
  }

  
}
