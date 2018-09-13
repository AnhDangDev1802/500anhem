import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoreService} from "./services/core.service";
import { HeaderComponent } from './components/header/header.component';
import {MaterialModule} from "../material/material.module";
import {RouterModule} from "@angular/router";
import { FeedComponent } from './components/feed/feed.component';
import {CategoryService} from "./services/category.service";
import {PostService} from "./services/post.service";
import { LoadingComponent } from './components/loading/loading.component';
import {TemplateService} from "./services/template.service";
import {API_CONTROLLER, API_CONTROLLER_CONST} from "./models/api-controller";
import {PostNotFoundComponent} from "./components/post-notfound/post-notfound.component";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
    imports: [
        MaterialModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HeaderComponent,
        FeedComponent,
        LoadingComponent,
        PostNotFoundComponent,
        SidenavComponent,
        CategoryListComponent
    ],
    providers: [
        {provide: API_CONTROLLER, useValue: API_CONTROLLER_CONST},
        CoreService,
        CategoryService,
        PostService,
        TemplateService
    ],
    declarations: [
        HeaderComponent,
        FeedComponent,
        LoadingComponent,
        PostNotFoundComponent,
        SidenavComponent,
        CategoryListComponent,
    ]
})
export class CoreModule {
}
