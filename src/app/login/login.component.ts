import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../utils/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorMsg: string;

  constructor(private loginService: LoginService, private router: Router) {
    this.email = '';
    this.password = '';
    this.errorMsg = '';
  }

  login(){
    if(this.email!='' && this.password!=''){
      this.loginService.login(this.email, this.password).subscribe(
        (msg) =>{
          console.log(msg);
          localStorage.setItem('email', this.email);
          this.router.navigate(['/mainPage']);
        },
        error => {
          this.errorMsg = error['error'];
          console.log(error);
        }
      );
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('email')){
        localStorage.removeItem('email');
        this.loginService.logout().subscribe(
          (msg) =>{
            console.log(msg);
          },
          error => {
            console.log(error);
          }
        );
    }
  }

}
