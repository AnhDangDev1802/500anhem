import {Injectable} from '@angular/core';
import {CoreService} from "../../core/services/core.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Login} from "../models/login";
import {Observable, ReplaySubject} from "rxjs/Rx";
import {Auth} from "../models/auth";
import {User} from "../models/user";
import {Register} from "../models/register";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
    private auth:Auth;
    public user:ReplaySubject<User> = new ReplaySubject<User>();

    constructor(private coreService:CoreService, private http:HttpClient, private router:Router) {
    }

    login(login:Login):Observable<Auth> {
        try {
            return this.http.post(`${this.coreService.config.API_ENDPOINT}wp-json/jwt-auth/v1/token`, login)
                .map((res:Auth)=> {
                    if (res && res.token) {
                        let auth = new Auth();
                        auth.setObject(res);
                        auth.saveToken();
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

    getUserById(userId:number):Observable<User> {
        try {
            let headers = new HttpHeaders();
            if (this.getAuth()) {
                headers = headers.append('Authorization', 'Bearer ' + this.getAuth().token);
            }
            return this.http.get(`${this.coreService.config.API_ENDPOINT}wp-json/wp/v2/users/${userId}`, {headers: headers as HttpHeaders})
                .map((res:any)=> {
                    let user = new User();
                    user.setObject(res);
                    if (user.id == this.auth.id) {
                        console.log(user);
                        this.user.next(user);
                    }

                    return user;
                })
        } catch (e) {
            console.error(e);
            return Observable.of(null);
        }
    }

    getAuth():Auth {
        return this.auth ? this.auth : null;
    }

    getCurrentUser():ReplaySubject<User> {
        return this.user ? this.user : null;
    }

    logout() {
        this.auth = null;
        this.user.next(null);
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }

}