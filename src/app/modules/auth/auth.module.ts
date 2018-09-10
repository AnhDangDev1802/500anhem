import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthService} from "./services/auth.service";
import {CoreModule} from "../core/core.module";
import {MaterialModule} from "../material/material.module";
import { RegisterComponent } from './components/register/register.component';
import {LoginComponent} from "./components/login/login.component";
import {NonceModule} from "../nonce/nonce.module";

@NgModule({
    imports: [
        CoreModule,
        MaterialModule,
        AuthRoutingModule,
        NonceModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {
}
