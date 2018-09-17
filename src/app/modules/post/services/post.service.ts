import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CoreService} from "../../core/services/core.service";
import {AuthService} from "../../auth/services/auth.service";
import {Observable} from "rxjs/Rx";
import {Image} from "../models/image";
import {Post} from "../models/post";
import {Post as MainPost} from "../../core/models/Post";

@Injectable()
export class PostService {

    constructor(private http:HttpClient,
                private coreService:CoreService,
                private authService:AuthService) {
    }

    uploadImage(image:File, description?:string):Observable<Image> {
        try {

            let headers = new HttpHeaders();
            if (this.authService.getAuth() && this.authService.getAuth().token) {
                headers = headers.append('Authorization', 'Bearer ' + this.authService.getAuth().token);
            }

            let formData = new FormData();
            formData.append('file', image, image.name);

            return this.http.post(`${this.coreService.config.API_ENDPOINT}wp-json/wp/v2/wp_rest_upload_image`, formData, {headers: headers})
                .map((result:any)=> {
                    let image = new Image();
                    image.setObject(result);
                    return image;
                })
        } catch (e) {
            console.error(e);
            return Observable.of(null);
        }
    }

    createPost(post:Post):Observable<MainPost> {
        try {
            let headers = new HttpHeaders();
            if (this.authService.getAuth() && this.authService.getAuth().token) {
                headers = headers.append('Authorization', 'Bearer ' + this.authService.getAuth().token);
            }
            return this.http.post(`${this.coreService.config.API_ENDPOINT}wp-json/wp/v2/posts`, post as any, {headers: headers})
                .map((res:any)=> {
                    let post = new MainPost();
                    post.setObject(res);
                    return post;
                })
        } catch (e) {
            console.error(e);
            return Observable.of(null);
        }
    }
}