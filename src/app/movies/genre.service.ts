import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface Genre {
  id: number;
  name: string;
}

@Injectable()
export class GenreService {
  apiKey: string;

  constructor(private http: Http, @Inject('apiKey') apiKey) {
    this.apiKey = apiKey;
  }

  get(): Observable<Genre[]> {
    return this.http.get(`/3/genre/movie/list?api_key=${this.apiKey}`)
                    .map((res: Response) => res.json().genres)
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
