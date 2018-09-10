import {Injectable} from '@angular/core';
import {CoreService} from "../../core/services/core.service";
import {HttpClient} from "@angular/common/http";
import {Login} from "../models/login";
import {Observable} from "rxjs/Rx";
import {Auth} from "../models/auth";
import {User} from "../models/user";
import {Register} from "../models/register";

@Injectable()
export class AuthService {
    private auth:Auth;

    constructor(private coreService:CoreService, private http:HttpClient) {
    }

    login(login:Login):Observable<Auth> {
        try {
            let params:any = {...login, insecure: 'cool'};
            return this.http.get(`${this.coreService.config.API_ENDPOINT}api/${this.coreService.API_CONTROLLER.USER.name}/${this.coreService.API_CONTROLLER.USER.methods.GENERATE_AUTH_COOKIE}`, {params: params})
                .map((res:Auth)=> {
                    if (res && res.status && res.status == 'ok') {
                        let auth = new Auth();
                        auth.setObject(res);
                        auth.saveCookie();
                        this.auth = auth;
                        return auth;
                    }
                    return null;
                })
        } catch (e) {
            console.error(e);
            return Observable.of(null)
        }
    }

    register(register:Register):Observable<any> {
        try {
            let params:any = {...register, insecure: 'cool'};
            return this.http.get(`${this.coreService.config.API_ENDPOINT}api/user/register`, {params: params})
        } catch (e) {
            console.error(e);
            return null
        }
    }

    getCurrentUser():User {
        return this.auth && this.auth.user ? this.auth.user : null;
    }

    getAuth() {
        return this.auth ? this.auth : null;
    }
}