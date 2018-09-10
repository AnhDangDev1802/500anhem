import {Model} from "../../core/models/model";

export class Nonce extends Model {
    constructor(public status?:string,
                public controller?:string,
                public method?:string,
                public nonce?:string) {
        super();
    }
}