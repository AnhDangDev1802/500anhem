import {Model} from "../../core/models/model";
export class Image extends Model {

    constructor(public id?:string,
                public file?:string,
                public type?:string,
                public url?:string) {
        super();
    }

    setObject(obj):any {
        return super.setObject(obj);
    }
}