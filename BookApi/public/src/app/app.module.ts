import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { HttpService } from "./http.service"
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewBookComponent } from './review-book/review-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewBookComponent,
    ReviewsComponent,
    HomeComponent,
    ShowComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
