import {Component, OnInit} from '@angular/core';
import {Image} from "../models/image";
import {PostForm} from "../forms/post.form";
import {Post} from "../models/post";
import {Post as MainPost} from "../../core/models/Post";
import {PostService} from "../services/post.service";
import {MatSnackBar} from "@angular/material";

declare var tinymce:any;

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

    postForm = new PostForm(new Post());

    constructor(private postService:PostService, private snackbar:MatSnackBar) {
    }

    ngOnInit() {
    }

    getPostThumbnail(postThumbnail:Image) {
        this.postForm.controls['featured_media'].setValue(postThumbnail.id);
    }

    getPostTitle(postTitle:string) {
        this.postForm.controls['title'].setValue(postTitle);
    }

    getPostExcerpt(postExcerpt:string) {
        this.postForm.controls['excerpt'].setValue(postExcerpt);
    }

    getPostContent(postContent:string) {
        this.postForm.controls['content'].setValue(postContent);
    }

    postCreateClick() {
        if (this.postForm.valid) {
            this.postService.createPost(this.postForm.getObject())
                .subscribe((post:MainPost)=> {
                    console.log(post);
                })
        } else {
            let message = this.postForm.getMessageError();
            this.snackbar.open(message, null, {
                duration: 1500,
                verticalPosition: 'bottom',
                panelClass: 'login-alert'
            })
        }
    }
}
