import { Injectable } from '@angular/core';
import {Post} from './post.model';
import { Http, Response } from '@angular/http';



@Injectable()
export class PostService {
    private posts: Post[] = [];
    content: string = 'מתחיל להיות צפוף בצמרת, בין המקום הראשון למקום השני מבדילים שני לייקים. הבוקר עוד הוביל קנט קלארק. יוזר שבחר בשמו של סופרמן. בהפרש של שני לייקים. עכשיו המצב התהפך סופרמן במקום השני עם 568 לייקים. וליאור'
    imgUrl: string = '../../assets/fake-images/post-back';

    constructor(private http : Http) { 

    }

    getAllPosts(){
        return this.http.get('http://tweets-statuses.herokuapp.com/GetAllPosts');
    }
}