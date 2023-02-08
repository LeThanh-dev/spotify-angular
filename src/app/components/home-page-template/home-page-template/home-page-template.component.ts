import { SongData } from './../../song-list-template/song-list-template.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-template',
  templateUrl: './home-page-template.component.html',
  styleUrls: ['./home-page-template.component.scss']
})
export class HomePageTemplateComponent implements OnInit {

  @Input() songList: SongData[] = []
  @Input() title: string = ""
  @Input() isLoading: boolean = false

  songListDefault: SongData[] = []
  songNameInput: string = ""

  ngOnInit() {
    console.log(this.songListDefault)
    console.log(this.songList)

  }
  searchSongFunc() {
    this.songListDefault.length === 0 && (this.songListDefault = this.songList)

    const songNameInputTrim = this.songNameInput.trim()
    if (songNameInputTrim) {
      this.songList = this.songListDefault.filter(songData => songData.name.toLowerCase().includes(songNameInputTrim.toLowerCase()))
    }
    else {
      this.songList = this.songListDefault
    }
  }
}
