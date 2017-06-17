import { Injectable } from '@angular/core';
import {Post} from './post.model';
import { Http, Response } from '@angular/http';



@Injectable()
export class PostService {
    private posts: Post[] = [];
    content: string = 'מתחיל להיות צפוף בצמרת, בין המקום הראשון למקום השני מבדילים שני לייקים. הבוקר עוד הוביל קנט קלארק. יוזר שבחר בשמו של סופרמן. בהפרש של שני לייקים. עכשיו המצב התהפך סופרמן במקום השני עם 568 לייקים. וליאור'
    imgUrl: string = '../../assets/fake-images/post-back';

    constructor(private http : Http) { 
        this.load();

    }

    load(){

        this.http.get('http://tweets-statuses.herokuapp.com/GetAllPosts')
            .subscribe((response: Response) => {
                var rawPosts = response.json();
                for(var i in rawPosts){
                    var post = new Post(rawPosts[i].date, rawPosts[i].title, rawPosts[i].content, this.imgUrl + i + '.png');
                    this.posts.push(post);
                }
            })
    }

    getAllPosts(){
        return this.posts;
    }
}