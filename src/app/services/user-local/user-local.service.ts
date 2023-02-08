import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLocalService {

  constructor(private router: Router) { }

  checkLogin() {
    const userDataLocal = sessionStorage.getItem("userData")
    const urlCurrent = window.location.pathname;
    if (!userDataLocal) {
      !(urlCurrent.includes("sign-in") || urlCurrent.includes("sign-up")) && this.router.navigate(['sign-in'])
    }
    else {
      (urlCurrent.includes("sign-in") || urlCurrent.includes("sign-up")) && this.router.navigate([''])
    }
    return ""
  }

  getUserID() {
    const userDataLocal = sessionStorage.getItem("userData")
    if (userDataLocal) {
      return JSON.parse(userDataLocal)?.userID || ""
    }
    return ""
  }

  getUserName() {
    const userDataLocal = sessionStorage.getItem("userData")
    if (userDataLocal) {
      return JSON.parse(userDataLocal)?.userName || ""
    }
    return ""
  }
}
