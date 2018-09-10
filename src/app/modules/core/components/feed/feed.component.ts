import {Component, OnInit, Input} from '@angular/core';
import {Post} from "../../models/Post";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
    @Input('post') post:Post;
  constructor() { }

  ngOnInit() {
  }

}
