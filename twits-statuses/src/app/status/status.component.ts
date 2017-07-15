import { Component, OnInit } from '@angular/core';
import { StatusesService } from '../services/statuses.service';
import { UsersService } from '../services/users.service';
 
import { Status} from '../services/status.model';
import { Response } from '@angular/http';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

    status: Status = null;
    
    displayError: boolean = false;
    error: string = "";


  constructor(private statusService: StatusesService, private usersService : UsersService) { 
      this.load();
  }

  load(){
    if(this.statusService.storedStatusId == undefined || this.statusService.storedStatusId == "")
      return;

      this.statusService.getStatusById(this.statusService.storedStatusId)
      .subscribe(res => {
          var status = res.json();
          if(status.Error != undefined){
              this.displayError = true;
              this.error  = status.Error
          }
          else{
            
              this.status = new Status(status.userName,
                                        status.imgUrl,
                                        status.statusObj.content, 
                                        status.statusObj.date, 
                                        status.statusObj.likes, 
                                        status.statusObj.tweets, 
                                        status.statusObj._id,
                                        status.statusObj.comments);
          }
      })
  }

  incTwits(){

      if(!this.usersService.isLoggedIn)
          return;

      this.statusService.incTwits(this.status.statusContent._id).subscribe(success => {
          this.load();
      })

  }

  ngOnInit() {
  
  }

}
