import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtDecodeService } from 'src/app/services/jwt-decode/jwt-decode.service';
import { SongApiService } from 'src/app/services/song-api/song-api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private songServer: SongApiService,
    private route: Router,
    private jwt: JwtDecodeService
  ) { }


  ngOnInit(): void {
  }

  signInStateError: boolean = false
  isLoading = false


  formData = this.formBuilder.group({
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
  })

  signInFunc() {
    this.isLoading = true
    const data = this.formData.value
    this.songServer.signInAccount(data).subscribe((res: any) => {
      if (res.status === 200) {
        const userSignedInData = this.jwt.decodeToken(res?.token || "")
        const data = {
          userID: userSignedInData?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
          userName: userSignedInData?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
        }
        sessionStorage.setItem('userData', JSON.stringify(data))
        this.route.navigate([''])
        this.isLoading = false
      }
      else {
        this.signInStateError = true
        this.isLoading = false
      }
    }, error => {
      this.signInStateError = true
      this.isLoading = false
    })
  }
}
