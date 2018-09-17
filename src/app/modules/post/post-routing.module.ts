import {NgModule} from '@angular/core';
import {PostCreateComponent} from './post-create/post-create.component';
import {Routes, RouterModule} from "@angular/router";
import {AuthGuardService} from "../auth/services/auth-guard.service";

const routes:Routes = [
    {path: 'post-create', component: PostCreateComponent
        , canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class PostRoutingModule {
}
