import { Injectable, OnInit } from '@angular/core';

export interface PlayingSongData {
  id:string,
  name: string,
  file: string,
  imageURL: string,
  singer: string
}

@Injectable({
  providedIn: 'root'
})
  
export class PlayingSongService implements OnInit {

  private playingSong: PlayingSongData = {
    id:"",
    name: "",
    file: "",
    imageURL: "",
    singer: ""
  }

  constructor() { }

  ngOnInit(): void {

  }

  getPlayingSong() {
    return this.playingSong
  }
  setPlayingSong(data: PlayingSongData) {
    console.log(data);
    
    this.playingSong = data
  }

}
