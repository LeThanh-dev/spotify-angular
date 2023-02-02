import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LovedSongComponent } from './components/loved-song/loved-song.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    title: "Spotify",
    component: HomePageComponent
  },
  {
    path: 'search',
    title: "Tìm kiếm",
    component: SearchPageComponent
  },
  {
    path: 'loved-song',
    title: "Bài hát đã thích",
    component: LovedSongComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }