import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'post-upload-excerpt',
    templateUrl: './upload-excerpt.component.html',
})
export class UploadExcerptComponent implements OnInit {
    @Output('getExcerpt') getExcerpt = new EventEmitter<string>(true);

    constructor() {
    }

    ngOnInit() {
    }

    @ViewChild('excerptTxt') excerptTxt:ElementRef;

    onExcerptChange(event) {
        let excerpt = this.excerptTxt.nativeElement.innerHTML;
        if (excerpt == '') {
            this.excerptTxt.nativeElement.innerHTML = 'Chèn trích đoạn cho bài viết'
        } else {
            let reg = />(.*?)<\//gm;
            let result = reg.exec(this.excerptTxt.nativeElement.innerHTML);
            if (result && result[1]) {
                excerpt = result[1];
                this.excerptTxt.nativeElement.innerHTML = excerpt;
            }
            this.getExcerpt.emit(excerpt)
        }
    }
}
