import {Injectable, Inject} from '@angular/core';
import {APP_CONFIG, AppConfig} from "../../../app.config";
import {API_TYPE, ApiType} from "../models/api-type";
@Injectable()
export class CoreService {
    constructor(@Inject(APP_CONFIG) public config:AppConfig,
                @Inject(API_TYPE) public API_TYPE:ApiType) {
    }

    getApi(apiType:string){
        return `${this.config.API_ENDPOINT}wp-json/wp/v2/${this.API_TYPE.POST}`
    }
}
