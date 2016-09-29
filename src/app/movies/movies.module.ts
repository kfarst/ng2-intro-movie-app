import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService, MoviesComponent } from './index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [MoviesService],
  declarations: [MoviesComponent],
  exports: [MoviesComponent]
})
export class MoviesModule { }
