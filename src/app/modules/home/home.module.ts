import {NgModule} from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';
import {CoreModule} from "../core/core.module";
import {IndexComponent} from "./index/index.component";
import { HomeComponent } from './home.component';
import { DetailComponent } from './detail/detail.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
    imports: [
        CoreModule,
        HomeRoutingModule
    ],
    declarations: [
        IndexComponent,
        HomeComponent,
        DetailComponent,
        CategoryComponent
    ]
})
export class HomeModule {
}
