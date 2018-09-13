import {Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {CategoryService} from "../core/services/category.service";
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {
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

    ngAfterViewInit():void {
    }
}
