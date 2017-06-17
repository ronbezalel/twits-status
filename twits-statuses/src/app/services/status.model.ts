export class HeaderStatus {
    id : number;
    owner: string;
    twits: number;
    likes: number;

    constructor(owner: string, twits: number,likes: number){
        this.owner = owner;
        this.twits = twits;
        this.likes = likes;
    }
}