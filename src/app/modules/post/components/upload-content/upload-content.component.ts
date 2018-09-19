import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Image} from "../../models/image";

declare var tinyMCE:any;

@Component({
    selector: 'post-upload-content',
    templateUrl: './upload-content.component.html',
    styleUrls: ['./upload-content.component.scss'],
})
export class UploadContentComponent implements OnInit, OnDestroy {
    @Output('getContent') getContent = new EventEmitter();
    content:string;

    constructor(private postService:PostService) {
    }

    ngOnInit() {
        setTimeout(()=> {
            tinyMCE.init({
                selector: '#post_content',
                theme: 'modern',
                mobile: {
                    theme: 'mobile',
                    plugins: ['autosave', 'lists', 'image']
                },
                images_upload_handler: (file, success, failure) => {
                    this.postService.uploadImage(file.blob(), '')
                        .subscribe((result:Image)=> {
                            success(result.url);
                        });
                }
            }).then((editors)=> {
                if (editors && editors[0]) {
                    editors[0].on('change', (value)=> {
                        this.getContent.emit(value.level.content);
                    })
                }
            })
        }, 100)
    }


    ngOnDestroy():void {
        tinyMCE.remove();
    }
}
