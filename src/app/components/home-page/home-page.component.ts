


import { Component } from '@angular/core';
import { SongData } from '../song-list-template/song-list-template.component';

const SongListDefault: SongData[] = [
  {
    id: "song1",
    name: "bai hat 3",
    file: "https://spotify.baihat1.mp3",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Sơn Tùng",
    author: "Sơn Tùng",
    category: "Pop",
    duration: 182
  },
  {
    id: "song2",
    name: "bai hat 2",
    file: "https://spotify.baihat2.mp3",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Mono",
    author: "Mono",
    category: "Edm",
    duration: 125
  },
  {
    id: "song2",
    name: "bai hat 2",
    file: "https://spotify.baihat2.mp3",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Mono",
    author: "Mono",
    category: "Edm",
    duration: 125
  },
  {
    id: "song2",
    name: "bai hat 2",
    file: "https://spotify.baihat2.mp3",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Mono",
    author: "Mono",
    category: "Edm",
    duration: 125
  },
  {
    id: "song2",
    name: "bai hat 2",
    file: "https://spotify.baihat2.mp3",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Mono",
    author: "Mono",
    category: "Edm",
    duration: 125
  },
  {
    id: "song2",
    name: "bai hat 2",
    file: "https://spotify.baihat2.mp3",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Mono",
    author: "Mono",
    category: "Edm",
    duration: 125
  },
  {
    id: "song2",
    name: "bai hat 2",
    file: "https://spotify.baihat2.mp3",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Mono",
    author: "Mono",
    category: "Edm",
    duration: 125
  },
  {
    id: "song2",
    name: "bai hat 2",
    file: "https://spotify.baihat2.mp3",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Mono",
    author: "Mono",
    category: "Edm",
    duration: 125
  },
  {
    id: "song2",
    name: "bai hat 2",
    file: "https://spotify.baihat2.mp3",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Mono",
    author: "Mono",
    category: "Edm",
    duration: 125
  },
  {
    id: "song2",
    name: "bai hat 2",
    file: "https://spotify.baihat2.mp3",
    imageURL: "https://i.scdn.co/image/ab67616d0000485148e90a4c48b31c66e8b0d24f",
    singer: "Mono",
    author: "Mono",
    category: "Edm",
    duration: 125
  },
]


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  SongListDefault = SongListDefault
}

