import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
// MUI module
import { LovedSongComponent } from './components/loved-song/loved-song.component';
import { SongListTemplateComponent } from './components/song-list-template/song-list-template.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './admin/sign-up/sign-up.component';
import { SingInComponent } from './admin/sing-in/sing-in.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { FormsModule } from '@angular/forms';
import { SongNameTemplateComponent } from './components/song-list-template/song-name-template/song-name-template/song-name-template.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    LovedSongComponent,
    SongListTemplateComponent,
    HomePageComponent,
    SearchPageComponent,
    UserComponent,
    SignUpComponent,
    SingInComponent,
    DefaultLayoutComponent,
    SongNameTemplateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }