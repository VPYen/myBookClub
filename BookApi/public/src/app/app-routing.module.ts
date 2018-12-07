import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewBookComponent } from './review-book/review-book.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "reviews", component: ReviewsComponent},
  {path: "reviews/:id", component: ShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
