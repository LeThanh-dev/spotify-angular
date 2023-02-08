import { UserLocalService } from './services/user-local/user-local.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private userLocal: UserLocalService) { }
  ngOnInit(): void {
    this.userLocal.checkLogin()
  }

}
