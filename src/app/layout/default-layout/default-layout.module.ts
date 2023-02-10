import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultLayoutRoutingModule } from './default-layout-routing.module';
import { HomePageTemplateComponent } from 'src/app/components/home-page-template/home-page-template/home-page-template.component';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { LoadingComponent } from 'src/app/components/loading/loading/loading.component';
import { LovedSongComponent } from 'src/app/components/loved-song/loved-song.component';
import { PlayIconComponent } from 'src/app/components/play-icon/play-icon/play-icon.component';
import { SearchPageComponent } from 'src/app/components/search-page/search-page.component';
import { SongListByCategoryComponent } from 'src/app/components/song-list-by-category/song-list-by-category/song-list-by-category.component';
import { SongListTemplateComponent } from 'src/app/components/song-list-template/song-list-template.component';
import { SongNameTemplateComponent } from 'src/app/components/song-list-template/song-name-template/song-name-template/song-name-template.component';
import { UserComponent } from 'src/app/components/user/user.component';
import { DefaultLayoutComponent } from './default-layout.component';


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    LovedSongComponent,
    SongListTemplateComponent,
    HomePageComponent,
    SearchPageComponent,
    UserComponent,
    SongNameTemplateComponent,
    PlayIconComponent,
    HomePageTemplateComponent,
    SongListByCategoryComponent,
    LoadingComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    DefaultLayoutRoutingModule,
    FormsModule      
  ],
  exports:[DefaultLayoutComponent]
})
export class DefaultLayoutModule { }
