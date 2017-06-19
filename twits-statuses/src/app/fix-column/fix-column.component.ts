import { Component, OnInit } from '@angular/core';
import { StatusesService } from '../services/statuses.service';
import { HeaderStatus } from '../services/status.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-fix-column',
  templateUrl: './fix-column.component.html',
  styleUrls: ['./fix-column.component.css'],
  providers: [StatusesService]
})
export class FixColumnComponent implements OnInit {

  topStatuses : HeaderStatus[] = [];


    constructor(private statusesService: StatusesService) {
      this.load();
    }

    load() {
      this.statusesService.getAll10Top()
        .subscribe((response: Response) => {
                var rawStatuses = response.json();
                for(var i in rawStatuses){
                    //soulde be owner
                    var rawStatus = rawStatuses[i];
                    var status = new HeaderStatus(rawStatus.userName, rawStatus.tweets, rawStatus.likes);
                    this.topStatuses.push(status);
                }
            })
    }

    statusesLength(){
      return this.topStatuses.length;
    }

  ngOnInit() {
  }

}
