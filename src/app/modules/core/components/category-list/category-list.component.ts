import {Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit, OnDestroy} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Observable, Subscription} from "rxjs/Rx";
import {CoreService} from "../../services/core.service";

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('categoryList', {read: ElementRef}) categoryList:ElementRef;
    @ViewChild('categoryMenu', {read: ElementRef}) categoryMenu:ElementRef;

    categories:Array<any>;
    subscription = new Subscription();

    constructor(private categoryService:CategoryService, private coreService: CoreService) {
    }

    ngAfterViewInit():void {
        if (this.coreService.isClient()){
            const headerElm = this.categoryMenu.nativeElement;
            let oldOffset = window.scrollY;
            let length = 56;
            const eventSub = Observable.fromEvent(window, 'scroll')
                .debounceTime(8)
                .subscribe(()=> {
                    length -= window.scrollY - oldOffset;
                    oldOffset = window.scrollY;
                    length = length > 56 ? 56 : length < 0 ? 0 : length;
                    headerElm.style.top = `${length}px`;
                });
            this.subscription.add(eventSub);
        }
    }

    ngOnInit() {
        this.categoryService.getRootCategories()
            .subscribe((categories)=> {
                if (categories) {
                    this.categories = categories;
                    if (this.coreService.isClient()){
                        setTimeout(()=> {
                            let element = document.getElementsByClassName('active');
                            if (this.categoryList && element.length > 0) {
                                let bound = element[0].getBoundingClientRect();
                                this.categoryList.nativeElement.scrollLeft = this.categoryList.nativeElement.scrollLeft + bound.left - 16 - (window.innerWidth / 3);
                            }
                        }, 20);
                    }
                }
            });
    }

    selectCategory(e) {
        if (this.categoryList && this.coreService.isClient()) {
            let bound = e.target.getBoundingClientRect();
            this.categoryList.nativeElement.scrollLeft = this.categoryList.nativeElement.scrollLeft + bound.left - 16 - (window.innerWidth / 3);
        }
    }

    ngOnDestroy():void {
        this.subscription.unsubscribe();
    }
}
