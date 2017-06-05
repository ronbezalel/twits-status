import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fix-column',
  templateUrl: './fix-column.component.html',
  styleUrls: ['./fix-column.component.css']
})
export class FixColumnComponent implements OnInit {

  topStatuses : HeaderStatus[] = [];


    constructor() {
      this.load();
    }

    load() {
      for(var i = 10; i > 0 ; i--){
          var status = new HeaderStatus(i, 'test' + i, (i * 5), (i * 7));

          this.topStatuses.push(status);
      }
    }

    statusesLength(){
      return this.topStatuses.length;
    }

  ngOnInit() {
  }

}

export class HeaderStatus {
    id : number;
    owner: string;
    twits: number;
    likes: number;

    constructor(id: number, owner: string, twits: number,likes: number){
        this.id = id;
        this.owner = owner;
        this.twits = twits;
        this.likes = likes;
    }
}
