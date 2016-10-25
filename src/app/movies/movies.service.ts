import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  imdb_id: string;
  vote_average: number;
  status: string;
  tagline: string;
  budget: number;
  revenue: number;
  runtime: number;
  genres: any[];
  production_companies: any[];
  markedToSee: boolean;
}

@Injectable()
export class MoviesService {
  apiKey: string;

  constructor(private http: Http, @Inject('apiKey') apiKey) {
    this.apiKey = apiKey;
  }

  get(endpoint: string): Observable<Movie[]> {
    return this.http.get(`/3/movie/${endpoint}?api_key=${this.apiKey}`)
                    .map((res: Response) => res.json().results)
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}


