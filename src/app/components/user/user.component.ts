import { UserLocalService } from './../../services/user-local/user-local.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userName: string = ""

  constructor(private userLocal:UserLocalService) {}

  ngOnInit() {
    this.userName = this.userLocal.getUserName()
  }

  
}
