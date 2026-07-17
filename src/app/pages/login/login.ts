import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  http = inject(HttpClient);
  router = inject(Router);
  hostAddress: string = "https://localhost:7004"

  // API endpoints
  loginURL: string = this.hostAddress + '/api/EmployeeMaster/login';
  getAllDepartmentsURL: string = this.hostAddress + '/api/DepartmentMaster/GetAllDepartments';

  // will have JWT token authentication "Header, Payload, Signature", but for now, we will just have a simple login form
  // Payload can use postman or other client and the login form to test this.
  // {
  // "email": "someemail@outlook.com",
  // "password": "thepassword"
  // }
  
  loginObj: any = {
    Email: '',
    Password: ''
  }



  onLogin() {
    this.http.post(this.loginURL, this.loginObj).subscribe({
      next: (result: any) => {
        console.log(result);
        // Handle successful login, e.g., store token, redirect, etc.
        // For demonstration, we will just log the result and show an alert
        // alert('Login successful! Token: ' + result.token);
        //alert(result.message);
        this.router.navigate(['/dashboard']); // Redirect to dashboard or another page after successful login
        //LocalStorage.setItem('token', result.token); // JWT token can be stored in local storage for future requests, but for now, we will just store the user data in local storage for testing purposes
        localStorage.setItem('empLoginUser', JSON.stringify(result.data)); // Store the user data in local storage for testing, session storage can also be used, but local storage is more persistent across sessions
      },
      error: (error: any) => {
        console.error('Login failed:', error);
        // Handle login error, e.g., show error message to user
        alert('Login failed. Please check your credentials and try again.' + error.message);
      }
    })
  }


}
