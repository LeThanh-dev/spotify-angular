import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

export const BASE_URL = "http://192.168.48.152:8009"

@Injectable({
  providedIn: 'root'
})
export class SongApiService implements OnInit {


  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

  }

  headerOptions = {
    "Content-Type": "application/json",
  }


  // GET
  getSongList() {
    return this.http.get(`${BASE_URL}/Song/get-list-song`,
      {
        headers: this.headerOptions,
      },
    )
  }
  getLovedSongByUserId(id: string) {
    return this.http.get(`${BASE_URL}/LovedSong/get-list-loved-song-by-user`,
      {
        headers: this.headerOptions,
        params: { id }
      }
    )
  }

  getCategoryList() {
    return this.http.get(`${BASE_URL}/Category/get-list-category`, {
      headers: this.headerOptions
    })
  }

  getSongListByCategory(id: string) {
    return this.http.get(`${BASE_URL}/Song/get-song-by-category`, {
      headers: this.headerOptions,
      params: { id }
    })
  }


  // SET
  signUpAccount(data: Object) {
    return this.http.post(`${BASE_URL}/Authentication/Registration`,
      data,
      {
        headers: this.headerOptions,
      })
  }

  signInAccount(data: Object) {
    return this.http.post(`${BASE_URL}/Authentication/Login`,
      data,
      {
        headers: this.headerOptions
      })
  }

  setLovedSong(data: { userID: string, songID: string }) {
    return this.http.post(`${BASE_URL}/LovedSong/create-loved-song`,
      data,
      {
        headers: this.headerOptions,
      })

  }

  // DELETE
  removeLovedSong(data: { userID: string, songID: string }) {

    return this.http.delete(`${BASE_URL}/Song/delete-user-loved`,
      {
        headers: this.headerOptions,
        body: data
      })
  }
}
