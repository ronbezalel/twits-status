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

  constructor(private usersService: UsersService) { 

  }

  displayLogin(){
      if(this.isLoggedIn){
        this.display = false;
        this.logout();
        return;
      }
      this.display = !this.display;
  }

  login(){
    this.error = "";
    this.displayError = false;

    this.usersService.login(new LoginParams(this.userName, this.pass))
    .subscribe((response : Response) => { // <-------
            var res = response.json();
            if(res.error != undefined){
                this.displayError = true;
                this.error = res.error;
            }
            else{
              this.isLoggedIn = true;
              this.display = false;
            }
        });
  }


  logout(){
      this.usersService.logout().subscribe((success) => {
        this.isLoggedIn = false;
      })
  }

  ngOnInit() {
  }

}
