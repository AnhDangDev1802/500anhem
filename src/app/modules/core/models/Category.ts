import {Model} from "./model";
export class Category extends Model {
    constructor(
        public id?:number,
        public name?:string,
        public parent?:number,
        public slug?:string,
        public taxonomy?:string,
        public link?:string,
        public count?:number
    ) {
        super();
    }
}