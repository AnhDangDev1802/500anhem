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

    constructor(private categoryService:CategoryService) {
    }

    ngOnInit() {
        this.categoryService.getRootCategories()
            .subscribe((categories)=> {
                if (categories) {
                    this.categories = categories;
                    setTimeout(()=> {
                        let element = document.getElementsByClassName('active');
                        if (this.categoryList && element.length > 0) {
                            let bound = element[0].getBoundingClientRect();
                            this.categoryList.nativeElement.scrollLeft = this.categoryList.nativeElement.scrollLeft + bound.left - 16 - (window.innerWidth / 3);
                        }
                    }, 20);
                }
            });
    }

    selectCategory(e) {
        if (this.categoryList) {
            let bound = e.target.getBoundingClientRect();
            this.categoryList.nativeElement.scrollLeft = this.categoryList.nativeElement.scrollLeft + bound.left - 16 - (window.innerWidth / 3);
        }
    }

}
