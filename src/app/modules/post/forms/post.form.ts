import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Post} from "../models/post";

export class PostForm extends FormGroup {
    constructor(post?:Post){
        super({});
        this.addControl('title',new FormControl(post.title,[Validators.required]));
        this.addControl('excerpt',new FormControl(post.excerpt,[Validators.required]));
        this.addControl('content',new FormControl(post.content,[Validators.required]));
        this.addControl('featured_media',new FormControl(post.featured_media,[Validators.required]));
    }

    getObject():Post{
        let post = new Post();
        post.setObject(this.value);
        return post;
    }

    getMessageError(){
        if (this.controls['title'].hasError('required')){
            return 'Bạn chưa thêm tiêu đề!';
        }
        if (this.controls['excerpt'].hasError('required')){
            return 'Bạn chưa thêm trích đoạn!';
        }
        if (this.controls['featured_media'].hasError('required')){
            return 'Bạn chưa thêm thumbnail';
        }
        if (this.controls['content'].hasError('required')){
            return 'Bạn chưa viết nội dung cho bài viết';
        }
    }
}