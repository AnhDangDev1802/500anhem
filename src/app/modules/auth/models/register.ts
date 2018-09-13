import {Model} from "../../core/models/model";
export class Register extends Model {
    constructor(public username?:string,
                public email?:string,
                public user_pass?:string,
                public user_pass_cfm?:string,
                public display_name?:string,
                public nickname?:string,
                public notify?:string,
                public nonce?:string) {
        super();
        this.notify = 'both';
    }

    setObject(obj):any {
        super.setObject(obj);

        if (this.display_name) {
            this.nickname = this.display_name;
        }
    }
}