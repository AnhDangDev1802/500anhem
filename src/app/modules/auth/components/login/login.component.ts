import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {LoginForm} from "../../forms/login.form";
import {Login} from "../../models/login";
import {AuthService} from "../../services/auth.service";
import {Auth} from "../../models/auth";
import {TemplateService} from "../../../core/services/template.service";
import {MatDialog} from "@angular/material/dialog";
import {RegisterModalComponent} from "../register-modal/register-modal.component";
import {User} from "../../models/user";
import {Subscription} from "rxjs/Rx";

@Component({
    selector: 'app-auth-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

    loginForm = new LoginForm(new Login('AnhDang1802', 'DangAnhHacker1'));
    subscription = new Subscription();

    constructor(private authService:AuthService,
                private templateService:TemplateService,
                private dialog:MatDialog,
                private router:Router, private snackbar:MatSnackBar) {
    }

    ngOnInit() {
    }

    onLogin() {
        // this.templateService.isLoading = true;
        this.templateService.loading.next(true);
        try {
            const loginSub = this.authService.login(this.loginForm.getObject())
                .subscribe((auth:Auth)=> {
                    if (auth) {
                        const getUserSub = this.authService.getUserById(auth.id)
                            .subscribe((user:User)=> {
                                if (user && user.id) {
                                    this.templateService.loading.next(false);
                                    this.router.navigate(['/']);
                                }
                            }, err=> {
                                this.templateService.loading.next(false);
                                this.snackbar.open('Lỗi đăng nhập!', null, {
                                    duration: 1500,
                                    verticalPosition: 'top',
                                    panelClass: 'login-alert'
                                })
                            });
                        this.subscription.add(getUserSub);
                        return;
                    }
                    this.templateService.loading.next(false);
                    this.snackbar.open('Username hoặc password không đúng!', null, {
                        duration: 1500,
                        verticalPosition: 'top',
                        panelClass: 'login-alert'
                    })
                }, err=> {
                    this.templateService.loading.next(false);
                    this.snackbar.open('Username hoặc password không đúng!', null, {
                        duration: 1500,
                        verticalPosition: 'top',
                        panelClass: 'login-alert'
                    })
                });
            this.subscription.add(loginSub);
        } catch (e) {
            this.templateService.loading.next(false);
        }
    }

    ngOnDestroy():void {
        this.subscription.unsubscribe();
    }

    openRegisterModal() {
        this.dialog.open(RegisterModalComponent, {
            id: 'register-modal',
            panelClass: 'abc',
            role: 'dialog',
            minWidth: '100%',
            minHeight: '100%',
            width: '100%',
            height: '100%',
        })
    }
}
