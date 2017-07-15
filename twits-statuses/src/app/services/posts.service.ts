import { Injectable } from '@angular/core';
import {Post} from './post.model';
import { Http, Response } from '@angular/http';

@Injectable()
export class PostService {
    private posts: Post[] = [];

    storePostId: string = ''//"59590fd25ad0c4222be6ac8d";// ""
    storeCategory: string = ''//"אימה"; // ""

    constructor(private http : Http) { 

    }

    getAllPostsSummery(){
        return this.http.get('http://tweets-statuses.herokuapp.com/GetAllPostsSummery');
    }

    getPostsSummeryByCategory(){
        return this.http.get('http://tweets-statuses.herokuapp.com/GetPostsSummeryByCategory?category=' + this.storeCategory);
    }

    getPostById(){
        return this.http.get('http://tweets-statuses.herokuapp.com/GetPostById?postId=' + this.storePostId);
    }

    getAllCategories(){
        return this.http.get('http://tweets-statuses.herokuapp.com/GetPostsCategories');
    }
}