import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/posts.service';
import { Post } from '../services/post.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-hp-main-column',
  templateUrl: './hp-main-column.component.html',
  styleUrls: ['./hp-main-column.component.css'],
  providers: [PostService]
})
export class HpMainColumnComponent implements OnInit {
    //delete     
    imgUrl: string = '../../assets/post-back';
    posts: Post[] = [];

    constructor(private postsService: PostService) { 
        this.load();

    }

    load(){
        this.postsService.getAllPosts()
        .subscribe((response: Response) => {
                var rawPosts = response.json();
                for(var i in rawPosts){
                    var post = new Post(rawPosts[i].date, rawPosts[i].title, rawPosts[i].content, this.imgUrl + i + '.png');
                    this.posts.push(post);
                }
            })
    }

    ngOnInit() {
    }

}
