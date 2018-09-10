import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from "./modules/core/core.module";
import {RouterModule} from "@angular/router";
import {HomeModule} from "./modules/home/home.module";
import {AuthModule} from "./modules/auth/auth.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {APP_CONFIG, APP_CONFIG_CONST} from "./app.config";
import {API_TYPE, API_TYPE_CONST} from "./modules/core/models/api-type";
// import {MaterialModule} from "./modules/material/material.module";
// import {API_CONTROLLER, API_CONTROLLER_CONST} from "./modules/core/models/api-controller";

@NgModule({
    imports: [
        RouterModule,
        BrowserModule.withServerTransition({appId: 'angular-universal'}),
        BrowserAnimationsModule,
        CoreModule,
        AuthModule,
        HomeModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        {provide: APP_CONFIG, useValue: APP_CONFIG_CONST},
        {provide: API_TYPE, useValue: API_TYPE_CONST}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
