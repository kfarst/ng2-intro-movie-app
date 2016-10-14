import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { GenreService, Genre } from './genre.service';

@Injectable()
export class GenresResolver implements Resolve<Genre[]> {
  constructor(private genreService: GenreService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Genre[]> {
    return this.genreService.get();
  }
}
