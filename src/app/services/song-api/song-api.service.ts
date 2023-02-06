import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

export const BASE_URL = "http://192.168.48.152:8002"
export const BASE_URL_DEMO = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class SongApiService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getData(endPoint: string) {
    return this.http.get(
      endPoint, {
      headers: {
        "Content-Type": "application/json"
      }
    }
    )
  }
  getSongList() {
    // return this.getData(`${BASE_URL}/Song/get-list-song`)
    return this.getData(`${BASE_URL_DEMO}/get-list-song`)
  }
  getCategoryList() {
    return this.getData(`${BASE_URL}/Category/get-list-category`)
  }
}
