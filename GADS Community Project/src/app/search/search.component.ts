import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Movie } from "../movieModel";
import { MovieModelService } from "../services/movieModelService";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

   arr;
   filtedMovie = '';
   selected = false;

   movie = {} as Movie;

   constructor(
    public movieService: MovieService,
    private router: Router,
    public movieModelService: MovieModelService
    ) { }


  ngOnInit() {
    this.onGetMovie(this.filtedMovie);
  }


  toDetail(movie) {
    this.movieModelService.setMovie({
      id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      overview: movie.overview,
      original_language: movie.original_language,
      original_title: movie.original_title,
      video: movie.video,
      adult: movie.adult,
    });
    this.router.navigate(['/movieDetails']);
    this.selected = true;
  }

  onGetMovie = (movieName: string) => {
    this.selected = false;
    this.movieService.getMovie(movieName)
      .subscribe(
        (movies: any) => {
          console.log(movies.results);
          this.arr = movies.results;
        },
      );
  }

}
