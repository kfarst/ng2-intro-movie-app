import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MoviesService,
  MoviesActivateGuard,
  MoviesDeactivateGuard,
  MoviesComponent,
  MoviesResolver,
  GenresResolver,
  GenreService,
  GenreListPipe
} from './index';
import { MovieDetailsComponent } from './movie-details/index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: MoviesService, useClass: MoviesService },
    MoviesActivateGuard,
    MoviesDeactivateGuard,
    MoviesResolver,
    GenresResolver,
    GenreService
  ],
  declarations: [MoviesComponent, MovieDetailsComponent, GenreListPipe],
  exports: [MoviesComponent]
})
export class MoviesModule { }
