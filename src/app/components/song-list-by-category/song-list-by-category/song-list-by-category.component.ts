import { SongData } from './../../song-list-template/song-list-template.component';
import { SongApiService } from 'src/app/services/song-api/song-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-list-by-category',
  templateUrl: './song-list-by-category.component.html',
  styleUrls: ['./song-list-by-category.component.scss']
})
export class SongListByCategoryComponent implements OnInit {

  songList: SongData[] = []
  isLoading:boolean = false

  constructor(
    private param: ActivatedRoute,
    private songServer: SongApiService
  ) { }

  ngOnInit(): void {
    this.getSongListByCategory()
  }

  getSongListByCategory() {
    const categoryID = this.param.snapshot.params['categoryID']
    if (categoryID) {
      this.isLoading = true
      this.songServer.getSongListByCategory(categoryID).subscribe(data => {
        this.isLoading = false
        this.songList = data as SongData[]
      })
    }
  }
}
