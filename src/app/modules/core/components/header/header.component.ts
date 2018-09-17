import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {ActivatedRoute, Router, NavigationStart} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    @ViewChild('categoryList', {read: ElementRef}) categoryList:ElementRef;
    categories:Array<any>;

    constructor() {
    }

    ngOnInit() {
    }
}
