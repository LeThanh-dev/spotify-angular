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
  isLoading = false

  constructor(private songService: SongApiService, private playingSong: PlayingSongService) { }

  getSongList() {
    this.isLoading = true
    this.songService.getSongList()
      .subscribe(songList => {
        this.songList = songList as SongData[]
        !this.playingSong.getPlayingSong().songID && this.playingSong.setPlayingSong(this.songList[0])
        this.isLoading = false
      })
  }

  ngOnInit() {
    this.getSongList()

  }



}

