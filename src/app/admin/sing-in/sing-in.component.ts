import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtDecodeService } from 'src/app/services/jwt-decode/jwt-decode.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  constructor(private jwt: JwtDecodeService) {
  }
  ngOnInit() {

  }
  login() {
    // this.http.get<any>("http://192.168.48.152:8002/Authentication/Get-list-user",
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*"
    //     },
    //   }).subscribe(data => {
    //     console.log(data);
    //   })

    fetch("http://192.168.48.152:8002/Authentication/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          "userName": "phamtam@gmail.com",
          "passWord": "Ptam123aA@"
        }
      )
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(this.jwt.decodeToken({ token: data.token })["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);

      })
  }

}
