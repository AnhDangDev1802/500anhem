import {Injectable, Inject, PLATFORM_ID} from '@angular/core';
import {APP_CONFIG, AppConfig} from "../../../app.config";
import {API_TYPE, ApiType} from "../models/api-type";
import {API_CONTROLLER, ApiController} from "../models/api-controller";
import {isPlatformBrowser} from "@angular/common";
@Injectable()
export class CoreService {
    constructor(@Inject(APP_CONFIG) public config:AppConfig,
                @Inject(PLATFORM_ID) private platformId:string,
                @Inject(API_TYPE) public API_TYPE:ApiType,
                @Inject(API_CONTROLLER) public API_CONTROLLER:ApiController) {
    }

    getApi(apiType:string) {
        return `${this.config.API_ENDPOINT}wp-json/wp/v2/${apiType}`
    }

    isClient():boolean {
        return isPlatformBrowser(this.platformId);
    }
}
