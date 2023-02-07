import { Router } from '@angular/router';
import { SongApiService } from 'src/app/services/song-api/song-api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private songServer: SongApiService,
    private router: Router
  ) { }
  ngOnInit(): void {

  }
  formData = this.formBuilder.group({
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
    rePassWord: ['', Validators.required],
    roleName: [''],
  })

  signUpFunc() {
    delete this.formData.value.rePassWord
    const data = this.formData.value
    this.songServer.signUpAccount(data).subscribe(response => {
      if (response) {
        this.router.navigate(['sign-in'])
      }
    })
  }
}
