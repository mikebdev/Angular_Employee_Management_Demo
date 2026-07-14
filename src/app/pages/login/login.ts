import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  http = inject(HttpClient);
  hostAddress: string = "https://localhost:7004"

  // API endpoints
  loginURL: string = this.hostAddress + '/api/EmployeeMaster/login';
  getAllDepartmentsURL: string = this.hostAddress + '/api/DepartmentMaster/GetAllDepartments';

  // will have JWT token authentication "Header, Payload, Signature", but for now, we will just have a simple login form
  // case needs to match what api expects, so we will use "Email" and "Password" instead of "email" and "password"
  loginObj: any = {
    Email: '',
    Password: ''
  }



  onLogin() {
    this.http.post(this.loginURL, this.loginObj).subscribe({
      next: (result: any) => {
        console.log(result);
        // Handle successful login, e.g., store token, redirect, etc.
      },
      error: (error: any) => {
        console.error('Login failed:', error);
        // Handle login error, e.g., show error message to user
      }
    })
  }


}
