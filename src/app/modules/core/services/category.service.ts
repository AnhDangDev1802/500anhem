import {Injectable} from "@angular/core";
import {CoreService} from "./core.service";
import {Observable} from "rxjs/Rx";
import {HttpClient} from "@angular/common/http";
import {Category} from "../models/Category";
@Injectable()
export class CategoryService {
    categories:Array<Category>;
    rootCategories:Array<Category>;

    constructor(private coreService:CoreService, private httpClient:HttpClient) {
    }

    getCategories():Observable<Array<any>> {

        if (this.categories && this.categories.length > 0) {
            return Observable.of(this.categories);
        }

        return this.httpClient.get(this.coreService.getApi(this.coreService.API_TYPE.CATEGORY))
            .map((items:Array<any>)=> {
                let categories = items.map(item=> {
                    let category = new Category();
                    category.setObject(item);
                    return category;
                });

                this.categories = categories;

                return categories;
            })
    }

    getRootCategories():Observable<Array<any>> {
        try {
            if (this.rootCategories && this.rootCategories.length > 0) {
                return Observable.of(this.rootCategories);
            }
            return this.httpClient.get(this.coreService.getApi(this.coreService.API_TYPE.CATEGORY))
                .map((items:Array<any>)=> {
                    let categories = [];
                    items.forEach(item=> {
                        if (item.parent == 0 && item.id != 1) {
                            let category = new Category();
                            category.setObject(item);
                            categories.push(category);
                        }
                    });
                    this.rootCategories = categories;
                    return categories;
                })
        } catch (e) {
            console.error(e);
            return null
        }
    }

    getCategoryBySlug(categorySlug:string):Observable<Category> {
        try {
            if (this.categories && this.categories.length > 0) {
                let category = this.categories.find((item:Category)=> {
                    return item.slug === categorySlug
                });
                if (category) {
                    return Observable.of(category);
                }
            }
            return this.httpClient.get(this.coreService.getApi(this.coreService.API_TYPE.CATEGORY), {params: {slug: categorySlug} as any})
                .map((categories:Array<Category>)=> {
                    if (categories && categories.length > 0) {
                        let category = new Category();
                        category.setObject(categories[0]);
                        return category
                    }

                    return undefined;
                })
        } catch (e) {
            return Observable.of(undefined);
        }
    }
}