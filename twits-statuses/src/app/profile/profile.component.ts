import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { StatusesService } from '../services/statuses.service';
import { UsersService } from '../services/users.service';

import { Status } from '../services/status.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    userName: string = "";
    userImg: string = "";

    newStatusDesc: string = "";
    newStatusText: string = "";

    statuses: Status[] = [];
    totalStatuses: number = 0;
    totalTwits: number = 0;
    totalLikes: number = 0;

    displayErr: boolean = false;
    err: string = "";

    constructor(private statusService: StatusesService, private usersService : UsersService) { 
        this.userName = this.usersService.userName;
        this.userImg = this.usersService.userImg;
        this.load();
    }

    ngOnInit() {
    }

    sendNewStatus(){
    if(this.newStatusText != ""){

        this.statusService.sendStatus(this.newStatusText, this.usersService.userName).subscribe((success:  Response) => {
          var res = success.json();
          if(res.error != undefined){
            this.newStatusText = "";
            this.newStatusDesc = res.error;
          }
          else{
            this.newStatusText = "";
            this.newStatusDesc = "success";
            this.load();
          }
      },
      faild => {
          this.newStatusText = "";
          this.newStatusDesc = "Somthing went wrong";
      })
    }
  }

    load(){
      if(this.userName == null || this.userName == ""){
          this.displayErr = true;
          this.err = 'Please login';
      }

      this.statusService.getStatusesByUser(this.userName).subscribe((data: Response) => {
          var res = data.json();
          if(res.error != undefined){
              this.displayErr = true;
              this.err = res.error;
          }
          else if(res.length == 0){
              this.displayErr = true;
              this.err = 'no statuses';
          }
          else{
              for(var i in res[0].statuses){
                  var rawStatus = res[0].statuses[i];

                  var status = new Status(this.userName, 
                                          this.usersService.userImg,
                                          rawStatus.content,
                                          rawStatus.date,
                                          rawStatus.likes,
                                          rawStatus.tweets,
                                          rawStatus._id,
                                          rawStatus.comments);
                  this.totalStatuses++;
                  this.totalTwits += status.statusContent.tweets;
                  this.totalLikes += status.statusContent.likes;

                  this.statuses.push(status);
              }
          }
      },
      err => {
          console.log(err);
      });


    }

    storeStatusId(statusId : string){
    this.statusService.storedStatusId = statusId;
  }

}
