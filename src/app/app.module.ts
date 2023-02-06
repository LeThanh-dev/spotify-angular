import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LovedSongComponent } from './components/loved-song/loved-song.component';
import { SongListTemplateComponent } from './components/song-list-template/song-list-template.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { UserComponent } from './components/user/user.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongNameTemplateComponent } from './components/song-list-template/song-name-template/song-name-template/song-name-template.component';
import { PlayIconComponent } from './components/play-icon/play-icon/play-icon.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

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
    SignInComponent,
    DefaultLayoutComponent,
    SongNameTemplateComponent,
    PlayIconComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }