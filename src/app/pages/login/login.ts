import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  
  // will have JWT token authentication "Header, Payload, Signature", but for now, we will just have a simple login form
  loginObj: any = {
    email: '',
    password: ''
  }

  // loginObj any = {
  //   username: '',
  //   password: ''
  // };


}
