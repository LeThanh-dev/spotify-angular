import { UserLocalService } from './../../services/user-local/user-local.service';
import { SongApiService } from './../../services/song-api/song-api.service';
import { Component, OnInit } from '@angular/core';
import { SongData } from '../song-list-template/song-list-template.component';
import { PlayingSongService } from 'src/app/services/playing-song/playing-song.service';

interface LovedSongData extends SongData {
  lovedSongID: string
}
interface LovedSongDataResponse extends SongData {
  id: string
}

@Component({
  selector: 'app-loved-song',
  templateUrl: './loved-song.component.html',
  styleUrls: ['./loved-song.component.scss']
})

export class LovedSongComponent implements OnInit {

  lovedSongListData: LovedSongData[] = []

  constructor(
    private songService: SongApiService,
    private playingSong: PlayingSongService,
    private userLocal: UserLocalService
  ) { }
  ngOnInit() {
    this.getSongList()

  }

  getSongList() {
    this.songService.getLovedSongByUserId(this.userLocal.getUserID())
      .subscribe(songList => {
        const list = songList as LovedSongDataResponse[]
        this.lovedSongListData = list.map(data => (
          {
            ...data,
            lovedSongID: data?.id
          }
        ))
        this.lovedSongListData.length > 0 && !this.playingSong.getPlayingSong().songID && this.playingSong.setPlayingSong(this.lovedSongListData[0])
      })
  }


}
