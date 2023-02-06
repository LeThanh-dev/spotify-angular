import { Injectable, OnInit } from '@angular/core';

export interface PlayingSongData {
  songID: string,
  name: string,
  pathMusic: string,
  imageURL: string,
  singers: string[],
  isPlaying?: boolean
}

@Injectable({
  providedIn: 'root'
})

export class PlayingSongService implements OnInit {

  private playingSong: PlayingSongData = {
    songID: "",
    name: "",
    pathMusic: "",
    imageURL: "",
    singers: [],
    isPlaying: false
  }

  constructor() { }

  ngOnInit(): void {

  }

  getPlayingSong() {
    return this.playingSong
  }
  setPlayingSong(data: PlayingSongData) {
    this.playingSong = data
  }

  playSong() {
    this.playingSong = {
      ...this.playingSong,
      isPlaying: true
    }
  }

  pauseSong() {
    this.playingSong = {
      ...this.playingSong,
      isPlaying: false
    }
  }

}
