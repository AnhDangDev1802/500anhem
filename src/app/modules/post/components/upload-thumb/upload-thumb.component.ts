import {Component, OnInit, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import {Image} from "../../models/image";
import {PostService} from "../../services/post.service";
import {TemplateService} from "../../../core/services/template.service";

@Component({
    selector: 'app-upload-thumb',
    templateUrl: './upload-thumb.component.html',
    styleUrls: ['./upload-thumb.component.scss']
})
export class UploadThumbComponent implements OnInit {
    @Output('getThumbnail') getThumbnail = new EventEmitter<Image>();

    constructor(private postService:PostService, private templateService:TemplateService) {
    }

    ngOnInit() {
    }


    @ViewChild('thumbUpload') thumbUpload:ElementRef;

    openFileDialog() {
        this.thumbUpload.nativeElement.click();
    }

    result:string;

    onThumbUpload(event) {
        let files = event.target.files;
        if (files && files.length > 0) {
            this.templateService.loading.next(true);
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                this.result = reader.result;
                this.getThumbnail.emit(files[0]);
                this.postService.uploadImage(files[0])
                    .subscribe((result:Image)=> {
                        this.getThumbnail.emit(result);
                        this.templateService.loading.next(false);
                    }, error=> {
                        this.templateService.loading.next(false);
                        console.log(error);
                    });
            };
        }
    }
}
