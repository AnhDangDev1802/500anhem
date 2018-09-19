import {Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit} from '@angular/core';
import {Observable, Subscription} from "rxjs/Rx";
import {CoreService} from "../../services/core.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, AfterViewInit {
    @ViewChild('headerContainer', {read: ElementRef}) headerContainer:ElementRef;
    subscription = new Subscription();

    constructor(private coreService:CoreService) {
    }

    ngAfterViewInit():void {
        if (this.coreService.isClient()){
            const headerElm = this.headerContainer.nativeElement;
            let oldOffset = window.scrollY;
            let length = 56;
            const eventSub = Observable.fromEvent(window, 'scroll')
                .debounceTime(8)
                .subscribe(()=> {
                    length -= window.scrollY - oldOffset;
                    oldOffset = window.scrollY;
                    length = length > 0 ? 0 : length < -56 ? -56 : length;
                    headerElm.style.top = `${length}px`;
                });
            this.subscription.add(eventSub);
        }
    }

    ngOnInit() {
    }
}
