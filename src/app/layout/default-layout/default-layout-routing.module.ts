import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './default-layout.component';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { LovedSongComponent } from 'src/app/components/loved-song/loved-song.component';
import { SearchPageComponent } from 'src/app/components/search-page/search-page.component';
import { SongListByCategoryComponent } from 'src/app/components/song-list-by-category/song-list-by-category/song-list-by-category.component';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "",
    title: "Spotify",
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        title: "Spotify",
        component: HomePageComponent,
      },
      {
        path: 'search',
        title: "Tìm kiếm | Spotify",
        component: SearchPageComponent,
      },
      {
        path: "category/:categoryID/:categoryName",
        component: SongListByCategoryComponent
      },
      {
        path: 'loved-song',
        title: "Bài hát đã thích | Spotify",
        component: LovedSongComponent
      },
    ]
  },
  {
    path: 'sign-in',
    title: "Đăng nhập | Spotify",
    component: SignInComponent
  },
  {
    path: 'sign-up',
    title: "Đăng ký | Spotify",
    component: SignUpComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultLayoutRoutingModule { }
