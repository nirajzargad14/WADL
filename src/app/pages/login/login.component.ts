import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpModel } from '../../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginObj: LoginModel = new LoginModel();

  constructor(private router: Router) { }




  onLogin() {
    debugger;
    const localUsers = localStorage.getItem('angular17users');
    if (localUsers != null) {
      const users = JSON.parse(localUsers);

      const isUserPresent = users.find((user: SignUpModel) => user.email == this.loginObj.email && user.password == this.loginObj.password);
      if (isUserPresent != undefined) {
        alert("User Found...");
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('layout');
      } else {
        alert("No User Found")
      }
    }
  }
  navigateToSignUp() {
    this.router.navigate(['signup']); // Change '/signup' to the route of your sign-up component
  }



}



export class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = ""
  }
}

