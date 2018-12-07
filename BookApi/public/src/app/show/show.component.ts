import { HttpService } from "../http.service"
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  id = "";
  book: any;
  form = {name: "", comment: ""};

  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.form = {name: "", comment: ""};
    this._route.params.subscribe((params: Params) => {
      this.id = params["id"];
    });
    this.getReview();
  }

  submitComment() {
    let observable = this._httpService.putCommentFromService(this.id, this.form);
    observable.subscribe(data => {
      this.form = {name: "", comment: ""};
      this.getReview();
    })
  }

  getReview() {
    let observable = this._httpService.getSingleBookFromService(this.id);
    observable.subscribe(data => {
      this.book = data;
      console.log(this.book);
    })
  }
}
