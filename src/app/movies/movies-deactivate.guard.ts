import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MoviesComponent } from './index';

@Injectable()
export class MoviesDeactivateGuard implements CanDeactivate<MoviesComponent> {
  canDeactivate(target: MoviesComponent) {
    return window.confirm('Are you sure you want to leave this page?');
  }
}
