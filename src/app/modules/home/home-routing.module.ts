import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {HomeComponent} from "./home.component";
import {DetailComponent} from "./detail/detail.component";

const routes:Routes = [
    {path: '', component: HomeComponent, children: [
        {path: '', component: IndexComponent},
        {path: ':postSlug', component: DetailComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
