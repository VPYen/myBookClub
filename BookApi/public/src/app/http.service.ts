import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = "http://localhost:8080/api/books/"
  constructor(private _http: HttpClient) {}

  postReviewFromService(form: any) {
    return this._http.post(this.baseUrl + "new", form)
  }

  getBooksFromService() {
    return this._http.get(this.baseUrl);
  }

  getSingleBookFromService(id: String) {
    return this._http.get(this.baseUrl + `${id}`);
  }

  putCommentFromService(id: String, form: any) {
    return this._http.put(this.baseUrl + `comment/${id}`, form)
  }
}
