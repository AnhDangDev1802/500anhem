import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'post-upload-title',
    templateUrl: './upload-title.component.html',
    styleUrls: ['./upload-title.component.scss']
})
export class UploadTitleComponent implements OnInit {
    @Output('getTitle') getTitle = new EventEmitter<string>(true);

    constructor() {
    }

    ngOnInit() {
    }

    @ViewChild('titleTxt') titleTxt:ElementRef;

    onTitleChange(event) {
        let title = this.titleTxt.nativeElement.innerHTML;
        if (title == '') {
            this.titleTxt.nativeElement.innerHTML = 'Chèn tiêu đề cho bài viết'
        } else {
            let reg = />(.*?)<\//gm;
            let result = reg.exec(this.titleTxt.nativeElement.innerHTML);
            if (result && result[1]) {
                title = result[1];
                this.titleTxt.nativeElement.innerHTML = title;
            }
            this.getTitle.emit(title)
        }
    }
}
