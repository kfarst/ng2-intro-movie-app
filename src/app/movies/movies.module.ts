import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MoviesService,
  MoviesActivateGuard,
  MoviesDeactivateGuard,
  MoviesComponent,
  MoviesResolver
} from './index';
import { MovieDetailsComponent } from './movie-details/index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MoviesService,
    MoviesActivateGuard,
    MoviesDeactivateGuard,
    MoviesResolver
  ],
  declarations: [MoviesComponent, MovieDetailsComponent],
  exports: [MoviesComponent]
})
export class MoviesModule { }
