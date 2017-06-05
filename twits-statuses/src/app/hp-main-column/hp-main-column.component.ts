import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hp-main-column',
  templateUrl: './hp-main-column.component.html',
  styleUrls: ['./hp-main-column.component.css']
})
export class HpMainColumnComponent implements OnInit {
    //delete 
    content: string = 'מתחיל להיות צפוף בצמרת, בין המקום הראשון למקום השני מבדילים שני לייקים. הבוקר עוד הוביל קנט קלארק. יוזר שבחר בשמו של סופרמן. בהפרש של שני לייקים. עכשיו המצב התהפך סופרמן במקום השני עם 568 לייקים. וליאור'
    imgUrl: string = '../../assets/fake-images/post-back';
    posts: Post[] = [];

    constructor() { 
        this.load();

    }

    load(){
        for(var i = 0; i < 4; i++){
            var imgUrl = `${this.imgUrl}${i}.png`;

            var post = new Post('02.10.10', 'האלמנה עושה בושדות בפייסבוק', this.content, imgUrl);
            this.posts.push(post);
        }
    }

    ngOnInit() {
    }

}

class Post{
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
