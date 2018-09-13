import {Component, OnInit, OnDestroy} from '@angular/core';
import {User} from "../../models/user";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {Auth} from "../../models/auth";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
    user:User;
    auth: Auth;
    isChangeDisplayname:boolean = false;

    subscription = new Subscription();

    constructor(private authService:AuthService, private router:Router) {
    }

    ngOnInit() {
        const userSub = this.authService.user.subscribe((user:User)=> {
            this.user = user;
        });
        this.subscription.add(userSub);
        this.auth = this.authService.getAuth();
    }

    changeDisplayname() {
        this.isChangeDisplayname = true;
    }

    cancelChangeDisplayname() {
        this.isChangeDisplayname = false;
        this.numberChar = 0;
    }

    numberChar:number = 0;

    displayNameOnChange($event) {
        this.numberChar = $event.target.value.length;
    }

    ngOnDestroy():void {
        this.subscription.unsubscribe();
    }
}
