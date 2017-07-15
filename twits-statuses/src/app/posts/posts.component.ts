import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { PostService } from '../services/posts.service';
import { Post } from '../services/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    posts: Post[] = [];
    displayPost: Post; 
    categories: string[] = [];



  constructor(private postsService: PostService) { 
      this.load();
  }

  ngOnInit() {
  }

  load(){
    this.displayPost = null;
      this.getAllCategories();
      this.getPostById();
      this.getPostsSummery();

  }

  getAllCategories(){
      this.postsService.getAllCategories().subscribe((respone: Response) => {
          var res = respone.json();
          if(res.error != undefined){
              console.log(res.error);
          }
          else {
              this.categories = res;
          }

      },
      faild => {

      })
  }

  getPostById(){
      if(this.postsService.storePostId == "")
          return ;

      this.postsService.getPostById().subscribe((respone: Response) => {
          var res = respone.json();
          if(res.error != undefined){
              console.log(res.error);
          }
          else {
              var post = new Post(res.date,
                                    res.content, 
                                    null,
                                    res.title, 
                                    res.mainImgUrl,
                                    res._id,
                                    res.comments, 
                                    res.category, 
                                    res.contentImgsUrl);

              this.displayPost = post;
          }

      },
      faild => {

      });
  }

  getPostsSummery(){
      this.posts = [];
      this.postsService.getPostsSummeryByCategory().subscribe((respone: Response) => {
          var res = respone.json();
          if(res.error != undefined){
                console.log(res.error);
          }
          else {
              for(var i in res){
                  var rawPost = res[i];
                  var joinSummery = rawPost.summery.join(',');

                  var post = new Post(
                                  rawPost.date,
                                   null,
                                    joinSummery,
                                     rawPost.title,
                                      rawPost.mainImgUrl,
                                      rawPost._id,
                                      null,
                                      rawPost.category,
                                       null);
                  if(post._id != this.postsService.storePostId){
                      this.posts.push(post);
                  }
              }
          }

      },
      faild => {

      });
  }

  changeCategory(category: string){
      this.postsService.storePostId = "";
      this.postsService.storeCategory = category;

      this.load();
  }

  storePostDetails(postId: string, postCategory){
            this.postsService.storePostId = postId;
            this.postsService.storeCategory = postCategory;
            this.load();
    }

}
