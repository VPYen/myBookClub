// import { HttpService } from "./http.service"
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookModal = false;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.bookModal = false;
  }

  toggleReview() {
    if (this.bookModal == false) {
      this.bookModal = true;
    }else {
      this.bookModal = false;
    }
  }

  closeFromReview(eventData) {
    this.bookModal = eventData;
  }
}
