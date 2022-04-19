import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../utils/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  username: string;
  password: string;
  errorMsg: string;

  constructor(private loginService: LoginService, private router: Router) {
      this.email = '';
      this.username = '';
      this.password = '';
      this.errorMsg = '';
   }

  register(){
    if(this.email!=='' && this.username !== '' && this.password !== ''){
      this.loginService.register(this.email, this.username, this.password).subscribe(
        (msg) =>{
          console.log(msg);
          this.errorMsg = '';
          this.router.navigate(['/login']);
        },
        error => {
          this.errorMsg = error['error'];
          console.log(error);
        }
      )
    }
  }

  ngOnInit(): void {
  }

}
