import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/posts.service';
import { Post } from '../services/post.model';

@Component({
  selector: 'app-hp-main-column',
  templateUrl: './hp-main-column.component.html',
  styleUrls: ['./hp-main-column.component.css'],
  providers: [PostService]
})
export class HpMainColumnComponent implements OnInit {
    //delete 
    content: string = 'מתחיל להיות צפוף בצמרת, בין המקום הראשון למקום השני מבדילים שני לייקים. הבוקר עוד הוביל קנט קלארק. יוזר שבחר בשמו של סופרמן. בהפרש של שני לייקים. עכשיו המצב התהפך סופרמן במקום השני עם 568 לייקים. וליאור'
    imgUrl: string = '../../assets/fake-images/post-back';
    posts: Post[] = [];

    constructor(private postsService: PostService) { 
        this.load();

    }

    load(){
        this.posts = this.postsService.getAllPosts();
    }

    ngOnInit() {
    }

}
