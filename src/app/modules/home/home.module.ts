import {NgModule} from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';
import {CoreModule} from "../core/core.module";
import {IndexComponent} from "./index/index.component";
import { HomeComponent } from './home.component';
import { DetailComponent } from './detail/detail.component';
import { CategoryComponent } from './category/category.component';
import {MaterialModule} from "../material/material.module";
import { BookmarkComponent } from './bookmark/bookmark.component';
import {CategoryResolve} from "./category/category.resolve";

@NgModule({
    imports: [
        CoreModule,
        MaterialModule,
        HomeRoutingModule
    ],
    declarations: [
        IndexComponent,
        HomeComponent,
        DetailComponent,
        CategoryComponent,
        BookmarkComponent
    ],
    providers: [
        CategoryResolve
    ]
})
export class HomeModule {
}
