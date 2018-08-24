import {InjectionToken} from "@angular/core";
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
export interface AppConfig {
    API_ENDPOINT:string;
}
export const APP_CONFIG_CONST:AppConfig = {
    API_ENDPOINT: 'http://www.500anhem.net/'
};
