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
  isDelete: boolean
}

@Component({
  selector: 'app-song-list-template',
  templateUrl: './song-list-template.component.html',
  styleUrls: ['./song-list-template.component.scss']
})
export class SongListTemplateComponent implements OnInit {

  @Input() songList!: SongData[];
  @Input() headerDark: boolean = false;

  constructor(private time: ConvertTimeService, private playingSong: PlayingSongService) {

  }


  ngOnInit(): void {

  }




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

  open(data: any) {
    console.log('click parent')
  }

  loveSongFunc({ event, songData }: { event: any, songData: SongData }) {
    event.stopPropagation()
    console.log(songData)
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
  addToLovedSong(event: any) {
    event.stopPropagation()
    console.log('love click');
  }


}
