import {InjectionToken} from "@angular/core";
export const API_TYPE = new InjectionToken<ApiType>('api.type');
export interface ApiType {
    POST:string;
    USER:string;
    CATEGORY:string;
}
export const API_TYPE_CONST:ApiType = {
    POST: 'posts',
    USER: 'users',
    CATEGORY: 'categories',
};
