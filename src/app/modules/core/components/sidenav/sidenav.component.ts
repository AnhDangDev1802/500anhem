import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {User} from "../../../auth/models/user";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
    user:User;

    constructor(public authService:AuthService) {
    }

    ngOnInit() {
        this.authService.user
            .subscribe((user:User)=> {
                this.user = user;
            })
    }


    logout(){
        this.authService.logout();

    }
}
