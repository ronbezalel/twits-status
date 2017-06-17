import { Injectable } from '@angular/core';
import {HeaderStatus} from './status.model';
import { Http, Response } from '@angular/http';


@Injectable()
export class StatusesService {
    private statuses: HeaderStatus[] = [];


    constructor(private http : Http) { 
        this.load();

    }

    load(){

        this.http.get('http://tweets-statuses.herokuapp.com/GetTop10Statuses')
            .subscribe((response: Response) => {
                var rawStatuses = response.json();
                for(var i in rawStatuses){
                    //soulde be owner
                    var rawStatus = rawStatuses[i];
                    var status = new HeaderStatus(rawStatus.content, rawStatus.tweets, rawStatus.likes);
                    this.statuses.push(status);
                }
            })
    }

    getAll10Top(){
        return this.statuses;
    }
}