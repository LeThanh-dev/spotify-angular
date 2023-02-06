import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {

  }
  formData = this.formBuilder.group({
    userName: [''],
    password: [''],
    rePassword: [''],
  })

  signUpFunc() {
    console.log(this.formData.value);

  }
}
