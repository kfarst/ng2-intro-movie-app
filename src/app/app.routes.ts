import { Routes } from '@angular/router';
import { MoviesComponent, MoviesActivateGuard, MoviesDeactivateGuard } from './movies/index';

export const routes: Routes = [
  {
    path: 'movies',
    children: [{
      path: ':list_type',
      component: MoviesComponent,
      canActivate: [MoviesActivateGuard],
      canDeactivate: [MoviesDeactivateGuard],
    }]
  },
  { path: '**', redirectTo: '/movies/now-playing', pathMatch: 'full' }
];
