import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthService} from "./services/auth.service";
import {CoreModule} from "../core/core.module";
import {MaterialModule} from "../material/material.module";
import { RegisterComponent } from './components/register/register.component';
import {LoginComponent} from "./components/login/login.component";
import {NonceModule} from "../nonce/nonce.module";
import {RegisterModalComponent} from "./components/register-modal/register-modal.component";
import { SettingsComponent } from './components/settings/settings.component';
import {AuthGuardService} from "./services/auth-guard.service";

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
        RegisterModalComponent,
        SettingsComponent
    ],
    entryComponents: [
        RegisterModalComponent
    ],
    providers: [
        AuthService,
        AuthGuardService
    ]
})
export class AuthModule {
}
