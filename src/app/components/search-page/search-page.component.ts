import { Component, OnInit } from '@angular/core';
import { RandomColorService } from 'src/app/services/random-color/random-color.service';


interface CategoryData {
  id: string,
  name: string
}


const data: CategoryData[] = [
  {
    id: "category1",
    name: "pop"
  },
  {
    id: "category2",
    name: "edm"
  },
  {
    id: "category3",
    name: "hiphop"
  },
  {
    id: "category4",
    name: "rock"
  },
  {
    id: "category5",
    name: "la tinh"
  },
]
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(private color: RandomColorService) { };


  ngOnInit(): void {

  }

  randomColor() {
    return this.color.random()
  }
  categoryList = data
}
