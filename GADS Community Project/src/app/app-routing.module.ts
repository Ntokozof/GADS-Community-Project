import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearcComponent } from "./movie-searc/movie-searc.component";

const routes: Routes = [
  { path: '', component: MovieSearcComponent },
  { path: 'searchßMevies', component: MovieSearcComponent },
  { path: 'movieDetails', component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
