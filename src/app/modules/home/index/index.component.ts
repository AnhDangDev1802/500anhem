import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
    selector: 'app-home-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    constructor(private http:HttpClient) {
    }

    ngOnInit() {
        // this.http.get('http://wordpressdemo.test/wp-json/wp/v2/get_nonce')
        //     .subscribe(res=>console.log(res));
        // this.http.post('http://wordpressdemo.test/wp-json/jwt-auth/v1/token', {username:'AnhDang1802',password:'DangAnhHacker1'})
        //     .subscribe(res=>console.log(res));
    }

    onResend() {
        let formData = new FormData();
        formData.append('userId', '2');
        formData.append('fileName', 'hellokitty.png');
        if (this.file) {
            formData.append('avatar', this.file);
        }
        this.http.post('http://wordpressdemo.test/wp-json/wp/v2/wp_rest_upload_avatar', formData)
            .subscribe(res=>console.log(res));
    }

    file:File = undefined;

    uploadFile(file:File) {
        if (file) {
            this.file = file;
        }
    }
}
