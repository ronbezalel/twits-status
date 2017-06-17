

export class Post{
    date: string;
    title: string;
    header: string;
    imgUrl: string;

    constructor(date: string, title: string, header: string, imgUrl: string){
        this.date = date;
        this.title = title;
        this.header = header;
        this.imgUrl = imgUrl;
    }
}