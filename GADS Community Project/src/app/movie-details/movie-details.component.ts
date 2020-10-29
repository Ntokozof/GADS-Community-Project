import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { Movie } from "../movieModel";
import { MovieModelService } from "../services/movieModelService";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {


  movie = {} as Movie;
  img;
  arr;
  public picImg;
  breakpoint: number;

  constructor(
    private http: Http,
    public movieService: MovieService,
    public movieModelService: MovieModelService) {
    this.onGetConfig()
  }

  ngOnInit() {
    this.onGetConfig();
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }

  onget(){
    return this.picImg = this.arr.images.secure_base_url +'/w300/'+this.movieModelService.getPoster_path();
  }

  onGetConfig = () => {
    this.movieService.getPic()
      .subscribe(
        (movies: any) => {
          this.arr = movies;
          return this.picImg = this.arr.images.secure_base_url +'/w300/'+this.movieModelService.getPoster_path();
        },
      );
  }






}
