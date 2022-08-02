import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  signupInfo = new FormGroup({
    fullname: new FormControl(),
    contact: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  })


  createUserAccount() {
    console.log(this.signupInfo.value);
  }
}
