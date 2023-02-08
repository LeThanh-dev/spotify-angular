import { SongListByCategoryComponent } from './components/song-list-by-category/song-list-by-category/song-list-by-category.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LovedSongComponent } from './components/loved-song/loved-song.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
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
        path:"category/:categoryID/:categoryName",
        component:SongListByCategoryComponent
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


  {
    path: '**',
    title: "Không tìm thấy trang",
    component: NotFoundPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }