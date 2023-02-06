import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {

  }

  formData = this.formBuilder.group({
    userName: [''],
    password: ['']
  })

  signInFunc() {
    console.log(this.formData.value);

  }
}
