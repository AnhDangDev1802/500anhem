import {Component, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {User} from "../../models/user";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {Auth} from "../../models/auth";
import {TemplateService} from "../../../core/services/template.service";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {

    @ViewChild('avatarUpload') avatarUpload:ElementRef;
    @ViewChild('avatarCanvas') avatarCropCanvas:ElementRef;
    @ViewChild('avatarImg') avatarImg:ElementRef;

    user:User;
    auth:Auth;
    numberChar:number = 0;
    maxLength:number = 16;
    displayName:string = '';
    isChangeDisplayname:boolean = false;
    subscription = new Subscription();

    constructor(private authService:AuthService, private templateService:TemplateService, private router:Router) {
    }

    ngOnInit() {
        const userSub = this.authService.user.subscribe((user:User)=> {
            this.user = user;
            this.displayName = user.display_name;
            this.numberChar = this.displayName.length;
        });
        this.subscription.add(userSub);
        this.auth = this.authService.getAuth();
    }

    openFileDialog() {
        this.avatarUpload.nativeElement.click();
    }

    onAvatarUpload(event) {
        this.templateService.loading.next(true);
        let files = event.target.files;
        let image = new Image();
        const canvas = this.avatarCropCanvas.nativeElement;
        const context = canvas.getContext('2d');

        let sizeAvatar:number = 0;
        let position = {x: 0, y: 0};

        if (files && files.length > 0) {
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                image.src = reader.result;
            };
            image.onload = () => {
                if (image.naturalHeight < image.naturalWidth) {
                    sizeAvatar = image.naturalHeight;
                    position.x = (image.naturalWidth / 2) - (sizeAvatar / 2);
                    position.y = 0;
                } else {
                    sizeAvatar = image.naturalWidth;
                    position.x = 0;
                    position.y = (image.naturalHeight / 2) - (sizeAvatar / 2);
                }
                canvas.width = sizeAvatar;
                canvas.height = sizeAvatar;
                context.drawImage(image, position.x, position.y, sizeAvatar, sizeAvatar, 0, 0, sizeAvatar, sizeAvatar);
                this.avatarImg.nativeElement.src = canvas.toDataURL();
                canvas.toBlob((result:Blob) => {
                    let formData = new FormData();
                    formData.append('file', result, files[0].name);
                    formData.append('description', 'change avatar');
                    this.authService.changeAvatar(formData)
                        .subscribe(()=> {
                            this.templateService.loading.next(false);
                        }, err=> {
                            this.templateService.loading.next(false);
                        });
                });
            };
        }
    }

    onChangeDisplayName() {
        // this.authService.changeDisplayname()
    }

    changeDisplayname() {
        this.isChangeDisplayname = true;
    }

    cancelChangeDisplayname() {
        this.isChangeDisplayname = false;
        this.numberChar = 0;
    }

    displayNameOnChange($event) {
        this.numberChar = $event.target.value.length;
        if (this.numberChar > this.maxLength) {
            this.displayName = this.displayName.slice(0, this.maxLength);
            this.numberChar = this.maxLength;
        }
    }

    ngOnDestroy():void {
        this.subscription.unsubscribe();
    }
}
