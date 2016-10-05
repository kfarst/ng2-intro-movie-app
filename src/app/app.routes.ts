import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/index';

export const routes: Routes = [
  {
    path: 'movies',
    children: [
      { path: ':list_type', component: MoviesComponent }
    ]
  },
  { path: '**', redirectTo: '/movies/now-playing', pathMatch: 'full' }
];
