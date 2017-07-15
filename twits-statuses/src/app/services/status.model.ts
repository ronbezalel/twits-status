import {Comment} from './comment.model';


export class HeaderStatus {

    constructor(public owner: string,public  twits: number,public likes: number){
    }
}

export class Status {
    userName: string;
    userImg: string;
    statusContent: StatusContent;

    constructor(userName: string, imgUrl:string, content: string, date: string, likes: number, tweets: number, _id: string, comments: Comment[]){
        this.userName = userName;
        this.userImg = imgUrl;

        this.statusContent = new StatusContent(content, date, likes, tweets, _id, comments);
    }
}

export class StatusContent{
    constructor(public content: string, 
                public date: string, 
                public likes: number, 
                public tweets: number, 
                public _id: string,
                public comments: Comment[]){

    }
}

