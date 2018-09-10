import {Model} from "../../core/models/model";
export class Register extends Model {
    constructor(public username?:string,
                public email?:string,
                public user_pass?:string,
                public display_name?:string,
                public notify?:string,
                public nonce?:string) {
        super();
        this.notify = 'both';
    }

    setObject(obj):any {
        return super.setObject(obj);
    }
}