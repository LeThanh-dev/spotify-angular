import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userName: string = ""

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.getUserName()
  }

  getUserName() {
    const userDataLocal = localStorage.getItem("userData")
    if (userDataLocal) {
      this.userName = JSON.parse(userDataLocal)?.userName || ""
    }
    else {
      this.router.navigate(['sign-in'])
    }
  }
}
