import { Component, OnInit } from '@angular/core';
import { UsersService, LoginParams } from '../services/users.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    display: boolean = false;

    userName: string;
    pass: string;

    isLoggedIn : boolean = false;

    displayError: boolean = false;
    error: string = "";

  constructor(public usersService: UsersService) { 

  }

  displayLogin(){
      if(this.usersService.isLoggedIn){
        this.display = false;
        this.logout();
        window.location.href = '/home';
        return;
      }
      this.display = !this.display;
  }

  login(){
    this.error = "";
    this.displayError = false;

    this.usersService.login(new LoginParams(this.userName, this.pass));
  }


  logout(){
      this.usersService.logout().subscribe((success) => {
      })
  }

  ngOnInit() {
  }

}
