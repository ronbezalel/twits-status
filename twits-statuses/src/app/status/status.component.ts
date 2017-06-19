import { Component, OnInit } from '@angular/core';
import { StatusesService } from '../services/statuses.service';
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


  constructor(private statusService: StatusesService) { 
      this.load();
  }

  load(){
      this.statusService.getStatusById(this.statusService.storedStatusId)
      .subscribe(res => {
          var status = res.json();
          if(status.Error != undefined){
              console.log('ddd');
              this.displayError = true;
              this.error  = status.Error
          }
          else{
              this.status = new Status(status.userName, status.statusObj.date, status.statusObj.likes, status.statusObj.tweets, status.statusObj._id);
          }
      })
  }

  ngOnInit() {
  
  }

}
