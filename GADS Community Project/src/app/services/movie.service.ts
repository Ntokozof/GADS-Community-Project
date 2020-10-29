import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnInit {
   arr = [];
   movieName;

  constructor(
    private http: Http,
    private httpClient: HttpClient
    ) { this.getPic(); }

  ngOnInit() {
  }



  getMovie = (movieName: string) => {

    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=c38610fa8a10874402de6828c17c31d6&language=en-US&page=1&
    include_adult=false&query=${movieName}`)
    .map(
        (response: Response) => {
          const data = response.json();
          console.log(response.json());
          this.arr.push(response.json().results);
          for (const movies of data.results) {
            console.log(movies.title);
          }
          return data;
        }
      ).catch(
        (error: Response) => {
          return Observable.throw('Some Thing went Wrong While getting movies');
        }
        );
  }

  getPic() {
    return this.http.get('https://api.themoviedb.org/3/configuration?api_key=c38610fa8a10874402de6828c17c31d6&language=en-US')
    .map(
      (res: Response) => {
        console.log(res.json().images)
        const data = res.json();
        console.log(data.images);
        return data;
      }
    ).catch(
      (error: Response) => {
        return Observable.throw('Some Thing went Wrong While getting movies');
      }
      );
  }
}
