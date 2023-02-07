import { SongApiService } from 'src/app/services/song-api/song-api.service';
import { Component, OnInit } from '@angular/core';
import { RandomColorService } from 'src/app/services/random-color/random-color.service';


interface CategoryData {
  id: string,
  name: string
}


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(private color: RandomColorService, private songService: SongApiService) { };

  categoryList: CategoryData[] = []

  ngOnInit(): void {
    this.getCategoryList()
  }

  getCategoryList() {
    this.songService.getCategoryList().subscribe(data => {
      this.categoryList = data as CategoryData[]
    })
  }
  
  randomColor() {
    return this.color.random()
  }

}
