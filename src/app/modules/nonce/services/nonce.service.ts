import {Injectable} from '@angular/core';
import {CoreService} from "../../core/services/core.service";
import {Observable} from "rxjs/Rx";
import {HttpClient} from "@angular/common/http";
import {Nonce} from "../models/nonce";

@Injectable()
export class NonceService {

    constructor(private coreService:CoreService, private http:HttpClient) {
    }

    getNonce(controller:string, method:string):Observable<Nonce> {
        try {
            return this.http.get(`${this.coreService.config.API_ENDPOINT}api/get_nonce?controller=${controller}&method=${method}`)
                .map((res:Nonce)=> {
                    if (res.status !== 'ok') {
                        return null;
                    }
                    let nonce = new Nonce();
                    nonce.setObject(res);
                    return nonce;
                })
        } catch (e) {
            console.error(e);
            return Observable.of(null);
        }
    }

}