import { HttpService } from "../http.service"
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-review-book',
  templateUrl: './review-book.component.html',
  styleUrls: ['./review-book.component.css']
})
export class ReviewBookComponent implements OnInit {

  form = {name: "", title: "", author: "", review: ""};
  @Output() close = new EventEmitter();
  @Output() submit = new EventEmitter();

  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.form = {name: "", title: "", author: "", review: ""};
  }

  submitReview() {
    let observable = this._httpService.postReviewFromService(this.form);
    observable.subscribe(data => {
      console.log(data);
      this.closeModal();
    })
  }

  closeModal() {
    this.close.emit(false);
  }
}
