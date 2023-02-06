import { PlayingSongService } from 'src/app/services/playing-song/playing-song.service';
import { Component, OnInit } from '@angular/core';
import { SongApiService } from 'src/app/services/song-api/song-api.service';
import { SongData } from '../song-list-template/song-list-template.component';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  songList: SongData[] = []
  songListDefault: SongData[] = []
  songNameInput: string = ""

  constructor(private songService: SongApiService, private playingSong: PlayingSongService) { }

  getSongList() {
    this.songService.getSongList()
      .subscribe(songList => {
        this.songList = songList as SongData[]
        this.songListDefault = this.songList
        !this.playingSong.getPlayingSong().songID && this.playingSong.setPlayingSong(this.songListDefault[0])
      })
  }

  ngOnInit() {
    this.getSongList()
  }

  searchSongFunc() {
    const songNameInputTrim = this.songNameInput.trim()
    if (songNameInputTrim) {

      this.songList = this.songListDefault.filter(songData => songData.name.toLowerCase().includes(songNameInputTrim.toLowerCase()))
    }
    else {
      this.songList = this.songListDefault
    }
  }

}

