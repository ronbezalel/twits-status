import { Comment } from './comment.model'

export class Post{

    constructor(public date: string,
                public content: string,
                public summery: string,
                public title: string,
                public mainImgUrl: string,
                public _id: string,
                public comments: Comment[],
                public category: string,
                public contentImgsUrl: string[]){
    }
}