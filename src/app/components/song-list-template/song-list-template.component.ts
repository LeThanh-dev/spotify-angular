import { Router } from '@angular/router';
import { SongApiService } from 'src/app/services/song-api/song-api.service';
import { UserLocalService } from './../../services/user-local/user-local.service';
import { PlayingSongService } from './../../services/playing-song/playing-song.service';
import { Component, OnInit, Input } from '@angular/core';
import { ConvertTimeService } from 'src/app/services/convert-time/convert-time.service';


export interface SongData {
  songID: string,
  name: string,
  author: string,
  singers: string[],
  imageURL: string,
  pathMusic: string,
  categoryName: string,
  isDelete: boolean,
  userLoved: string[]
  lovedSongID?: string,
}

@Component({
  selector: 'app-song-list-template',
  templateUrl: './song-list-template.component.html',
  styleUrls: ['./song-list-template.component.scss']
})
export class SongListTemplateComponent implements OnInit {

  @Input() songList!: SongData[];
  @Input() headerDark: boolean = false;

  constructor(
    private time: ConvertTimeService,
    private playingSong: PlayingSongService,
    private userLocal: UserLocalService,
    private songAPI: SongApiService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }
 

  showLoveIcon = ''
  showActiveLoveIcon = false

  headerLabel: string[] = [
    "#",
    "Tên bài hát",
    "Nhạc sỹ",
    "Thể loại",
    // "",
  ];

  // functions
  convertTimeFunction({ time }: { time: number }) {
    return this.time.convertTime({ time })
  }


  playSong(song: SongData) {
    this.playingSong.setPlayingSong({
      ...song,
      isPlaying: true
    })
  }
  getPLayingSongState() {
    const data = this.playingSong.getPlayingSong()
    return {
      id: data.songID,
      isPlaying: data.isPlaying
    }
  }
  addToLovedSong(event: any, song: SongData) {
    event.stopPropagation()
    const userIDInput = this.userLocal.getUserID()
    const songIDInput = song.songID

    const data = {
      userID: userIDInput,
      songID: songIDInput
    }
    this.songAPI.setLovedSong(data).subscribe(res => {
      console.log('then love thanh cong');
      this.songList = this.songList.map(songData => {
        if (songData.songID === songIDInput) {
          songData.userLoved.push(userIDInput)
        }
        return songData
      })
    })
  }
  removeFromLovedSong(event: any, song: SongData) {
    event.stopPropagation()

    const userIDInput = this.userLocal.getUserID()
    const songIDInput = song.songID

    const data = {
      userID: userIDInput,
      songID: songIDInput
    }

    this.songAPI.removeLovedSong(data).subscribe((res: any) => {
      console.log('xoa thanh cong');

      this.songList = this.songList.map(songData => {
        if (songData.songID === songIDInput) {
          const songIndexIsRemoved = songData.userLoved.indexOf(userIDInput)
          songData.userLoved.splice(songIndexIsRemoved, 1)
        }
        return songData
      })

    })
  }

  getUserIDLocal() {
    return this.userLocal.getUserID()
  }
}
