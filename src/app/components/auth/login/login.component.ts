import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  loginInfo = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });


  signUserIn() {
    console.log(this.loginInfo.value);
  }

}
