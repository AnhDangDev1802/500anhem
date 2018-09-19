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
    posts:Array<Post> = undefined;
    category:Category;

    constructor(private route:ActivatedRoute, private templateService:TemplateService) {
    }

    ngOnInit() {
        this.route.data.subscribe((data:any)=> {
            if (data.response) {
                this.posts = data.response.posts;
                this.category = data.response.category;
            }
        });
    }

}
