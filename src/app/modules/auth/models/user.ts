import {Model} from "../../core/models/model";
export class User extends Model{
    constructor(
        public custom_avatar?:string,
        public avatar?:any,
        public capabilities?:any,
        public description?:string,
        public email?:string,
        public id?:number,
        public registered?:Date,
        public url?:string,
        public username?:string,
        public display_name?:string,
        public firstname?:string,
        public lastname?:string,
        public nicename?:string,
        public name?:string,
        public nickname?:string
    ){
        super();
    }
}