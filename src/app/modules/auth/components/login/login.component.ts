import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {LoginForm} from "../../forms/login.form";
import {Login} from "../../models/login";
import {AuthService} from "../../services/auth.service";
import {Auth} from "../../models/auth";
import {TemplateService} from "../../../core/services/template.service";

@Component({
    selector: 'app-auth-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginForm = new LoginForm(new Login());

    constructor(
        private authService:AuthService,
        private templateService:TemplateService,
        private router:Router, private snackbar:MatSnackBar) {
    }

    ngOnInit() {
    }

    onLogin() {
        this.templateService.isLoading = true;
        try{
            this.authService.login(this.loginForm.getObject())
                .subscribe((auth:Auth)=> {
                    this.templateService.isLoading = false;
                    if (auth) {
                        this.router.navigate(['/']);
                        return;
                    }
                    this.snackbar.open('Username hoặc password không đúng!', null, {
                        duration: 1500,
                        verticalPosition: 'top',
                        panelClass: 'login-alert'
                    })
                },err=>{
                    this.templateService.isLoading = false;
                    this.snackbar.open('Username hoặc password không đúng!', null, {
                        duration: 1500,
                        verticalPosition: 'top',
                        panelClass: 'login-alert'
                    })
                })
        } catch (e) {
            this.templateService.isLoading = false;
        }
    }
}
