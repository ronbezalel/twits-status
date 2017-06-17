import { Component, OnInit } from '@angular/core';
import { StatusesService } from '../services/statuses.service';
import { HeaderStatus } from '../services/status.model';

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
      this.topStatuses = this.statusesService.getAll10Top();
    }

    statusesLength(){
      return this.topStatuses.length;
    }

  ngOnInit() {
  }

}
