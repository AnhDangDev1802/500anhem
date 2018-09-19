import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from "./modules/core/core.module";
import {RouterModule, Routes} from "@angular/router";
import {HomeModule} from "./modules/home/home.module";
import {AuthModule} from "./modules/auth/auth.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {APP_CONFIG, APP_CONFIG_CONST} from "./app.config";
import {API_TYPE, API_TYPE_CONST} from "./modules/core/models/api-type";
import {PostModule} from "./modules/post/post.module";
import {NotFoundComponent} from "./not-found.component";

const routes: Routes = [
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule,
        BrowserModule.withServerTransition({appId: 'angular-universal'}),
        BrowserAnimationsModule,
        CoreModule,
        AuthModule,
        PostModule,
        HomeModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    providers: [
        {provide: APP_CONFIG, useValue: APP_CONFIG_CONST},
        {provide: API_TYPE, useValue: API_TYPE_CONST}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
