import {Model} from "../../core/models/model";
import {User} from "./user";
export class Auth extends Model {
    constructor(
        public cookie?:string,
        public cookie_name?:string,
        public status?:string,
        public user?: User
    ){
        super();
    }

    public saveCookie(){
        document.cookie = `${this.cookie_name}=${this.cookie}`
    }
}