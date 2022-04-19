import { Component, OnInit } from '@angular/core';
import { LoginService } from '../utils/login.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  username: string;
  email: string;
  purchases: any;
  isAdmin: boolean;
  usr: any;

  constructor(private userService: LoginService) {
    this.username = '';
    this.email = '';
    this.isAdmin = false;
    this.purchases = [];
  }

  ngOnInit(): void {
    this.userService.getUser(localStorage.getItem('email') || '').subscribe(
      msg =>{
        this.usr = msg;
        this.update();
      },
      error =>{
        console.log(error)
      }
    )
  }

  update(){
    this.email = this.usr['email'];
    this.username = this.usr['username'];
    this.purchases = this.usr['orders'];
    this.isAdmin = this.usr['isAdmin'];
  }

}
