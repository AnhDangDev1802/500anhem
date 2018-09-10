import {Component, OnInit, Input} from '@angular/core';
import {fadeAnimation} from "../../animation/fade.animation";
import {trigger, transition, style, animate} from "@angular/animations";
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [fadeAnimation()]
})
export class LoadingComponent implements OnInit {
  @Input('isLoading') isLoading:boolean;
  constructor() { }

  ngOnInit() {
  }

}
