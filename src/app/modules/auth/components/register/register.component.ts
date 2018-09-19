import {Component, OnInit} from '@angular/core';
import {RegisterForm} from "../../forms/register.form";
import {Register} from "../../models/register";
import {NonceService} from "../../../nonce/services/nonce.service";
import {Nonce} from "../../../nonce/models/nonce";
import {MatSnackBar} from "@angular/material";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {TemplateService} from "../../../core/services/template.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm = new RegisterForm(new Register());

    constructor(private nonceService:NonceService,
                private authService:AuthService,
                private templateService:TemplateService,
                private router:Router,
                private snackbar:MatSnackBar) {
    }

    ngOnInit() {
        this.nonceService.getNonce('user', 'register')
            .subscribe((nonce:Nonce)=> {
                this.registerForm.controls['nonce'].setValue(nonce.nonce);
            })
    }

    onRegister() {
        if (this.registerForm.valid) {
            this.templateService.loading.next(true);
            this.authService.register(this.registerForm.getObject())
                .subscribe((res:any)=> {
                    this.templateService.loading.next(false);
                    this.router.navigate(['/login']);
                }, err=>{
                    this.templateService.loading.next(false);
                    console.log(err)
                });
        } else {

            this.snackbar.open(this.registerForm.getError(), null, {
                duration: 1500,
                verticalPosition: 'top',
                panelClass: 'login-alert'
            })
        }
    }
}
