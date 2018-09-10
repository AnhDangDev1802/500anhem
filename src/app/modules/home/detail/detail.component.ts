import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../core/services/post.service";
import {Post} from "../../core/models/Post";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    post:Post;

    constructor(private route:ActivatedRoute, private postService:PostService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params=> {
            this.postService.getPostBySlug(params.postSlug)
                .subscribe((post:Post)=> {
                    this.post = post;
                })
        })
    }

}
