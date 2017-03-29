import { Injectable, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Movie } from './index';
import { MoviesService } from './movies.service';

@Injectable()
export class MoviesResolver implements Resolve<Movie[]> {
  constructor(private moviesService: MoviesService, @Inject('preload') preload) {
    // Prints 'preloading' to the console
    console.log(preload);
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Movie[]> {
    return this.moviesService.get(route.params['list_type'].replace('-', '_'));
  }
}
