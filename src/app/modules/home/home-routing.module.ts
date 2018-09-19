import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {HomeComponent} from "./home.component";
import {DetailComponent} from "./detail/detail.component";
import {CategoryComponent} from "./category/category.component";
import {BookmarkComponent} from "./bookmark/bookmark.component";
import {AuthGuardService} from "../auth/services/auth-guard.service";
import {CategoryResolve} from "./category/category.resolve";

const routes:Routes = [
    {
        path: '', component: HomeComponent, children: [
        {path: '', component: IndexComponent},
        {path: 'bookmark', component: BookmarkComponent, canActivate: [
            AuthGuardService
        ]},
        {path: 'c/:categorySlug', component: CategoryComponent, resolve: {response:CategoryResolve}},
        {path: ':postSlug', component: DetailComponent}
    ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
