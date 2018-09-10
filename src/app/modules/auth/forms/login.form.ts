import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Login} from "../models/login";
export class LoginForm extends FormGroup {
    constructor(login:Login) {
        super({});

        this.addControl('username', new FormControl(login.username, [Validators.required]));
        this.addControl('password', new FormControl(login.password, [Validators.required]));
    }

    getObject():Login {
        let formData = this.value;
        let login = new Login();
        login.username = formData.username;
        login.password = formData.password;
        return login;
    }
}