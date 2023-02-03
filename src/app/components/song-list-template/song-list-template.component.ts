import { Component, OnInit, Input } from '@angular/core';
import { ConvertTimeService } from 'src/app/services/convert-time/convert-time.service';


export interface SongData {
  id: string,
  name: string,
  file: string,
  imageURL: string,
  singer: string,
  author: string,
  category: string,
  duration: number
}

@Component({
  selector: 'app-song-list-template',
  templateUrl: './song-list-template.component.html',
  styleUrls: ['./song-list-template.component.scss']
})
export class SongListTemplateComponent implements OnInit {

  constructor(private time: ConvertTimeService) {

  }

  // functions
  convertTimeFunction({ time }: { time: number }) {
    return this.time.convertTime({ time })
  }

  ngOnInit(): void {

  }

  @Input() songList!: SongData[];
  @Input() headerDark: boolean = false;


  headerLabel: string[] = [
    "#",
    "Tên bài hát",
    "Nhạc sỹ",
    "Thể loại",
    "",
  ];

  open(data: any) {
    console.log('click parent')
  }

  loveSongFunc({ event, songData }: { event: any, songData: SongData }) {
    event.stopPropagation()
    console.log(songData)
  }

  playSong() {
    console.log('row click');
  }

  addToLovedSong(event: any) {
    event.stopPropagation()
    console.log('love click');
  }
}
