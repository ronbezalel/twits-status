import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';


@Injectable()
export class UsersService {

    isLoggedIn : boolean = false;
    userName : string = "";
    userImg : string = "";

    displayError: boolean = false;
    error: string = "";

    constructor(private http : Http) { 

    }

    login(body: LoginParams) {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        var stringBody = `name=${body.name}&password=${body.password}`;

        let httpPost = this.http.post('http://tweets-statuses.herokuapp.com/login', stringBody, options);

        httpPost.subscribe((response : Response) => {
            var res = response.json();
            if(res.error != undefined){
                this.displayError = true;
                this.error = res.error;
            }
            else{
                this.userImg = res;
              this.isLoggedIn = true;
              this.userName = body.name;
            }
          },
          error => {
               console.log('err', error);
            }
          )
        return httpPost;
    }

    logout(){
        var httpPromise =  this.http.get('http://tweets-statuses.herokuapp.com/logout');

        httpPromise.subscribe((success) => {
            this.isLoggedIn = false;
            this.userName = "";
        });

        return httpPromise;
    }
}

export class LoginParams{
    name: string;
    password: string;

    constructor(name: string, pass: string){
        this.name = name;
        this.password = pass;

    }
}