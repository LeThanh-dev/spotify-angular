import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

export const  BASE_URL = "http://192.168.48.152:8009"
export const BASE_URL_DEMO = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class SongApiService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  private getData(endPoint: string) {
    return this.http.get(
      endPoint, {
      headers: {
        "Content-Type": "application/json"
      },
    }
    )
  }
  private setData(endPoint: string, data: Object) {
    return this.http.post(
      endPoint,
      data,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
  }
  // GET
  getSongList() {
    return this.getData(`${BASE_URL}/Song/get-list-song`)
    // return this.getData(`${BASE_URL_DEMO}/get-list-song`)
  }
  getCategoryList() {
    return this.getData(`${BASE_URL}/Category/get-list-category`)
  }

  getSongListByCategory(id: string) {
    return this.getData(`${BASE_URL}/Song/get-song-by-category?id=${id}`)
  }


  // SET
  signUpAccount(data: Object) {
    return this.setData(`${BASE_URL}/Authentication/Registration`, data)
  }

  signInAccount(data: Object) {
    return this.setData(`${BASE_URL}/Authentication/Login`, data)
  }
}
