import {Model} from "../../core/models/model";
import {User} from "./user";
export class Auth extends Model {
    constructor(public id?:number,
                public token?:string,
                public user_display_name?:string,
                public user_email?:string,
                public user_nicename?:User) {
        super();
    }

    setObject(obj):any {
        super.setObject(obj);
        if (this.token) {
            let jwtData = JSON.parse(atob(this.token.split('.')[1]));
            if (jwtData && jwtData.data && jwtData.data.user) {
                this.id = jwtData.data.user.id;
            }
        }
    }

    public saveToken() {
        localStorage.setItem('token', this.token);
    }
}