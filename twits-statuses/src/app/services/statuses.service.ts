import { Injectable } from '@angular/core';
import {HeaderStatus , Status} from './status.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';


@Injectable()
export class StatusesService {
    private statuses: HeaderStatus[] = [];

    storedStatusId: string = "";


    constructor(private http : Http) { 

    }

    getAll10Top(){
        return this.http.get('http://tweets-statuses.herokuapp.com/GetTop10Statuses');
    }

    getTopStatus(){
        return this.http.get('http://tweets-statuses.herokuapp.com/GetTopStatusObj');
    }

    getStatusById(id: string){
        return this.http.get('http://tweets-statuses.herokuapp.com/GetstatusById?statusId=' + id);
    }

    getStatusesByUser(userName: string){
        return this.http.get('http://tweets-statuses.herokuapp.com/getUserStatuses?userName=' + userName);
    }

    incTwits(statusId: string){
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        var body = `statusId=${statusId}`;
        let httpPost = this.http.post('http://tweets-statuses.herokuapp.com/IncTweetForStatus', body, options);

        return httpPost;
    }

    sendStatus(newStatus: string, userName: string){
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });

        var body = `statusContent=${newStatus}&userName=${userName}`;
        let httpPost = this.http.post('http://tweets-statuses.herokuapp.com/addUserStatus', body, options);

        return httpPost;
    }
}