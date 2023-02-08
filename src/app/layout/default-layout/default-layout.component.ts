import { Router } from '@angular/router';
import { PlayingSongService } from './../../services/playing-song/playing-song.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  sideBarStateOnMobile = true

  constructor(
    private playingSong: PlayingSongService,
    private route: Router
  ) {
  }
  ngOnInit(): void {
    window.innerWidth <= 740 && (this.sideBarStateOnMobile = false)
  }

  getPlayingSong() {
    return this.playingSong.getPlayingSong()
  }

  pauseSong() {
    this.playingSong.pauseSong()
  }

  playSong() {
    this.playingSong.playSong()
  }

  signOut() {
    sessionStorage.removeItem("userData")
    this.route.navigate(["sign-in"])
  }

  showSideBar() {
    this.sideBarStateOnMobile = true
  }
  
  hideSideBar() {
    this.sideBarStateOnMobile = false
  }
}
