import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../core/services/category.service";
import {Category} from "../../core/models/Category";
import {PostService} from "../../core/services/post.service";
import {Post} from "../../core/models/Post";
import {TemplateService} from "../../core/services/template.service";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
    isLoading:boolean = true;
    posts:Array<Post> = undefined;

    constructor(private route:ActivatedRoute,
                private categoryService:CategoryService,
                private templateService:TemplateService,
                private postService:PostService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params=> {
            this.templateService.isLoading = true;
            this.categoryService.getCategoryBySlug(params.categorySlug)
                .subscribe((category:Category)=> {
                    if (category) {
                        this.postService.getPostsByQuery({categories: category.id})
                            .subscribe((posts)=> {
                                this.posts = posts;
                                this.templateService.isLoading = false;
                            })
                    } else {
                        this.templateService.isLoading = false;
                    }
                })
        });
    }

}
