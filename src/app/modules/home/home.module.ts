import {NgModule} from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';
import {CoreModule} from "../core/core.module";
import {IndexComponent} from "./index/index.component";
import { HomeComponent } from './home.component';
import { DetailComponent } from './detail/detail.component';
import {MaterialModule} from "../material/material.module";

@NgModule({
    imports: [
        CoreModule,
        MaterialModule,
        HomeRoutingModule
    ],
    declarations: [
        IndexComponent,
        HomeComponent,
        DetailComponent
    ]
})
export class HomeModule {
}
