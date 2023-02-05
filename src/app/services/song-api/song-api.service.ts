import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongApiService implements OnInit{

  BASE_URL=  "http://localhost:3000"

  constructor() { }

  ngOnInit(): void {
      
  }
}
