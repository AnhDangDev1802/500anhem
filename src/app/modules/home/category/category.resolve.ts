import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {CategoryService} from "../../core/services/category.service";
import {PostService} from "../../core/services/post.service";
import {Category} from "../../core/models/Category";
import {Post} from "../../core/models/Post";
import {Model} from "../../core/models/model";
import {TemplateService} from "../../core/services/template.service";

class CategoryResponse extends Model {
    constructor(public category?:Category,
                public posts?:Array<Post>) {
        super();
    }
}

@Injectable()
export class CategoryResolve implements Resolve<CategoryResponse> {

    constructor(private categoryService:CategoryService, private postService:PostService, private templateService:TemplateService) {
    }

    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<CategoryResponse>|Promise<CategoryResponse>|CategoryResponse {
        this.templateService.loading.next(true);
        return this.categoryService.getCategoryBySlug(route.paramMap.get('categorySlug'))
            .switchMap((category:Category)=> {
                if (category) {
                    let response = new CategoryResponse();
                    response.category = category;
                    return this.postService.getPostsByQuery({categories: category.id})
                        .map((posts:Array<Post>)=> {
                            response.posts = posts;
                            this.templateService.loading.next(false);
                            return response;
                        }, err=> {
                            console.error(err);
                            response.posts = null;
                        })
                } else {
                    return Observable.of(null);
                }
            });
    }
}