import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { MoviesComponent } from './index';

@Injectable()
export class MoviesActivateGuard implements CanActivate {
  canActivate() {
    console.log('Movies component activated');
    return true;
  }
}
