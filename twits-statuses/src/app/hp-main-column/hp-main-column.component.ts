import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/posts.service';
import { Post } from '../services/post.model';
import { Response } from '@angular/http';

@Component({
  selector: 'app-hp-main-column',
  templateUrl: './hp-main-column.component.html',
  styleUrls: ['./hp-main-column.component.css']
})
export class HpMainColumnComponent implements OnInit {   
    posts: Post[] = [];

    constructor(private postsService: PostService) { 
        this.load();

    }

    load(){
        this.postsService.getAllPostsSummery()
        .subscribe((response: Response) => {
                var rawPosts = response.json();
                for(var i in rawPosts){
                    var rawPost = rawPosts[i];
                    var post = new Post(rawPost.date,
                                        null, 
                                        rawPost.summery.join(','),
                                        rawPost.title, 
                                        rawPost.mainImgUrl,
                                        rawPost._id, 
                                        rawPost.comments, 
                                        rawPost.category, 
                                        rawPost.contentImgsUrl);
                    this.posts.push(post);
                }
            })
    }

    storePostDetails(postId: string, postCategory){
            this.postsService.storePostId = postId;
            this.postsService.storeCategory = postCategory;
    }

    ngOnInit() {
    }

}
