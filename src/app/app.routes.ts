import { Routes } from '@angular/router';
import {
  MoviesComponent,
  MoviesActivateGuard,
  MoviesDeactivateGuard,
  MoviesResolver
} from './movies/index';

export const routes: Routes = [
  {
    path: 'movies',
    children: [{
      path: ':list_type',
      component: MoviesComponent,
      canActivate: [MoviesActivateGuard],
      canDeactivate: [MoviesDeactivateGuard],
      resolve: {
        preload: 'preload',
        movies: MoviesResolver
      }
    }]
  },
  { path: '**', redirectTo: '/movies/now-playing', pathMatch: 'full' }
];
