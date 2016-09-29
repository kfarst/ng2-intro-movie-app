import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Movie, MoviesService } from './movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['../shared/styles.css', './movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  movieSub: Subscription;
  errorMessage: string;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieSub = this.moviesService.get('upcoming')
    .subscribe(
      movies => this.movies = movies,
        error =>  this.errorMessage = <any>error
    );
  }

  getImageUrl (fileName: string): string {
    return `https://image.tmdb.org/t/p/w1280${fileName}`;
  }

  ngOnDestroy() {
    this.movieSub.unsubscribe();
  }
}
