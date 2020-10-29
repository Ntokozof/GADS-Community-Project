import { Injectable } from '@angular/core';
import { Movie } from '../movieModel';

@Injectable({
  providedIn: 'root'
})
export class MovieModelService {

  private movie: Movie;

  constructor() { }

  setMovie(movie: Movie) {
    this.movie = movie;
  }

  getTitle() {
    return this.movie.title;
  }

  getRelease_date() {
    return this.movie.release_date;
  }

  getPoster_path() {
    return this.movie.poster_path;
  }

  getOverview() {
    return this.movie.overview;
  }

  getOriginal_language() {
    return this.movie.original_language;
  }
  getOriginal_title() {
    return this.movie.original_title;
  }

  getMovieViodeo() {
    return this.movie.video;
  }

  getMovieID() {
    return this.movie.id;
  }
}
