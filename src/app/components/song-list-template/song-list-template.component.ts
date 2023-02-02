import { Component, OnInit, Input } from '@angular/core';
import convertTime from 'src/app/functions/convertTime';


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


  ngOnInit(): void {

  }

  @Input() listData!: SongData[];
  @Input() headerDark:boolean = false;


  displayedColumns: string[] = [
    "id",
    "name",
    "author",
    "category",
    "love-icon",
    "duration"
  ];
  // functions
  convertTimeFunction({ time }: { time: number }) {
    return convertTime({ time })
  }

  open(data: any) {
    console.log('click parent')
  }

  loveSongFunc({ event, songData }: { event: any, songData: SongData }) {
    event.stopPropagation()
    console.log(songData)
  }
}
