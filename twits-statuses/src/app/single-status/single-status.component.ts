import { Component, OnInit } from '@angular/core';
import { StatusesService } from '../services/statuses.service';
import { UsersService } from '../services/users.service';
import { Status} from '../services/status.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-single-status',
  templateUrl: './single-status.component.html',
  styleUrls: ['./single-status.component.css']
})
export class SingleStatusComponent implements OnInit {

  status: Status;

  constructor(private statusesService: StatusesService, private usersService : UsersService) {
      this.load();
  }

  load(){
      this.statusesService.getTopStatus().subscribe((res: Response) => {
          var newStatus = res.json();
          this.status = new Status(newStatus.userName, newStatus.statusObj.date, newStatus.statusObj.likes, newStatus.statusObj.tweets, newStatus.statusObj._id);
      })
  }

  incTwits(){

      if(!this.usersService.isLoggedIn)
          return;

      this.statusesService.incTwits(this.status.statusContent._id).subscribe(success => {
          this.load();
      })

  }

  storeStatusId(){
    this.statusesService.storedStatusId = this.status.statusContent._id;
  }

  ngOnInit() {

  }

}
