import {Component} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {TemplateService} from "./modules/core/services/template.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    constructor(public templateService:TemplateService) {
        // Observable.of(null);
    }

}
