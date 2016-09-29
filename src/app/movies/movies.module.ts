import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService, MoviesComponent } from './index';
import { MovieDetailsComponent } from './movie-details/index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MoviesService],
  declarations: [MoviesComponent, MovieDetailsComponent],
  exports: [MoviesComponent]
})
export class MoviesModule { }
