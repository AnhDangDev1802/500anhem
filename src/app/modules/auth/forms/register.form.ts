import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Register} from "../models/register";
export class RegisterForm extends FormGroup {
    constructor(register:Register) {
        super({});

        this.addControl('username', new FormControl(register.username, [Validators.required]));
        this.addControl('user_pass', new FormControl(register.user_pass, [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
        ]));
        this.addControl('email', new FormControl(register.email, [Validators.required, Validators.email]));
        this.addControl('display_name', new FormControl(register.display_name, [Validators.required]));
        this.addControl('nonce', new FormControl(register.nonce, [Validators.required]));
        this.addControl('notify', new FormControl(register.notify));
    }

    getObject():Register {
        let register = new Register();
        register.setObject(this.value);
        return register;
    }

    getError() {
        if (this.controls['username'].hasError('required')) {
            return 'Username is required!'
        }
        if (this.controls['email'].hasError('required')) {
            return 'Email is required!'
        }
        if (this.controls['email'].hasError('email')) {
            return 'Email is not valid!'
        }
        if (this.controls['user_pass'].hasError('required')) {
            return 'Password is required!'
        }
        if (this.controls['user_pass'].hasError('minlength')) {
            return 'Password must 6 to 20 characters!'
        }
        if (this.controls['user_pass'].hasError('maxlength')) {
            return 'Password must 6 to 20 characters!'
        }
        if (this.controls['display_name'].hasError('required')) {
            return 'Display name is required!'
        }
    }
}