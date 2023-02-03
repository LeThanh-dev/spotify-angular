import { HomePageComponent } from './components/home-page/home-page.component';
import { SingInComponent } from './admin/sing-in/sing-in.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LovedSongComponent } from './components/loved-song/loved-song.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    title: "Spotify",
    component: HomePageComponent
  },
  {
    path: 'sign-in',
    title: "Đăng nhập | Spotify",
    component: SingInComponent
  },

  {
    path: 'search',
    title: "Tìm kiếm | Spotify",
    component: SearchPageComponent
  },
  {
    path: 'loved-song',
    title: "Bài hát đã thích | Spotify",
    component: LovedSongComponent
  },
  {
    path: '**',
    title: "Spotify",
    component: NotFoundPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }