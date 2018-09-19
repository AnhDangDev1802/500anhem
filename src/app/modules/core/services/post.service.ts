import {Injectable} from "@angular/core";
import {CoreService} from "./core.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {Post} from "../models/Post";
@Injectable()
export class PostService {

    constructor(private coreService:CoreService, private httpClient:HttpClient) {
    }

    getPostsByQuery(params:any):Observable<Array<Post>> {
        try {
            return this.httpClient.get(this.coreService.getApi(this.coreService.API_TYPE.POST), {
                params: {
                    ...params,
                    _embed: true
                }
            })
                .map((posts:Array<any>)=> {
                    return Post.parsePosts(posts);
                })
        } catch (e) {
            console.error(e);
            return Observable.of(null)
        }
    }

    getPostBySlug(slug:string):Observable<Post> {
        try {
            return this.httpClient.get(this.coreService.getApi(this.coreService.API_TYPE.POST), {params: {slug: slug, _embed:true} as any})
                .map((body:Array<any>)=> {
                    if (body && body.length > 0) {
                        let post = new Post();
                        post.setObject(body[0]);
                        return post;
                    }
                    return null;
                })
        } catch (e) {
            console.error(e);
            return Observable.of(null)
        }
    }
}