import {Model} from "../../core/models/model";
export class User extends Model{
    constructor(
        public avatar?:any,
        public capabilities?:any,
        public description?:string,
        public displayname?:string,
        public email?:string,
        public firstname?:string,
        public id?:number,
        public lastname?:string,
        public nicename?:string,
        public nickname?:string,
        public registered?:Date,
        public url?:string,
        public username?:string
    ){
        super();
    }
}