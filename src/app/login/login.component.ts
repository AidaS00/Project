import { Component, OnInit } from '@angular/core';

class login {
  email:string;
  password:any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  login: login;
  // tslint:disable-next-line:typedef
  private loginForm: any;

  ngOnInit() {
    // @ts-ignore
    this.login = {
      email: 'email@gmail.com',
      password: 'password'
    };
  }
  // tslint:disable-next-line:typedef
  onSubmit(userForm: any){
    console.log(this.loginForm.value);
  }
}
export class contact {
  email:string;
  password:any
  ;
}

