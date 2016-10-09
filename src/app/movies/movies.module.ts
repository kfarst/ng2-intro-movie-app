import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService, MoviesActivateGuard, MoviesDeactivateGuard, MoviesComponent } from './index';
import { MovieDetailsComponent } from './movie-details/index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MoviesService, MoviesActivateGuard,  MoviesDeactivateGuard],
  declarations: [MoviesComponent, MovieDetailsComponent],
  exports: [MoviesComponent]
})
export class MoviesModule { }
