import {Model} from "../../core/models/model";
export class Post extends Model {
    constructor(public id?:number,
                public title?:string,
                public excerpt?:string,
                public content?:string,
                public featured_media?:number) {
        super();
    }
}