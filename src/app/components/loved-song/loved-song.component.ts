import { Component } from '@angular/core';
import { SongData } from '../song-list-template/song-list-template.component';

const LovedSongListData: SongData[] = [
  {
    id: "song1",
    name: "bai hat 1",
    file: "https://p.scdn.co/mp3-preview/71de8f1111711a564a3c71f41e54ede9fec98407?cid=b4d876fc16314d0eb2f8bac2f363f74e",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Sơn Tùng",
    author: "Sơn Tùng",
    category: "Pop",
    duration: 130
  },
  {
    id: "song2",
    name: "Intentions",
    file: "https://p.scdn.co/mp3-preview/a6d484a64efd5e8c1458156cf698b0f05eb60483?cid=b4d876fc16314d0eb2f8bac2f363f74e",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Justin Bieber",
    author: "Mono",
    category: "Edm",
    duration: 125
  },
  {
    id: "song3",
    name: "bai hat 2",
    file: "https://spotify.baihat2.mp3",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Mono",
    author: "Mono",
    category: "Edm",
    duration: 125
  },
  {
    id: "song4",
    name: "bai hat 2",
    file: "https://spotify.baihat2.mp3",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Mono",
    author: "Mono",
    category: "Edm",
    duration: 125
  },
  {
    id: "song5",
    name: "bai hat 5",
    file: "https://spotify.baihat2.mp3",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Mono",
    author: "Mono",
    category: "Edm",
    duration: 125
  },
]

@Component({
  selector: 'app-loved-song',
  templateUrl: './loved-song.component.html',
  styleUrls: ['./loved-song.component.scss']
})
export class LovedSongComponent {
  LovedSongListData = LovedSongListData

  lovedSongQuantity = 12
}
