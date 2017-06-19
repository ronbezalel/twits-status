export class HeaderStatus {

    constructor(public owner: string,public  twits: number,public likes: number){
    }
}

export class Status {
    userName: string;
    statusContent: StatusContent;

    constructor(userName: string, date: string, likes: number, tweets: number, _id: string){
        this.userName = userName;

        this.statusContent = new StatusContent(date, likes, tweets, _id);
    }
}

export class StatusContent{
    constructor(public date: string, public likes: number, public tweets: number, public _id: string){

    }
}