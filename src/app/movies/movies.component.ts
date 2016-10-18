import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Genre } from './index';
import { Movie, MoviesService } from './movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  genres: Genre[] = [];
  movieSub: Subscription;
  listType: string;
  errorMessage: string;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.movieSub = this.route.data.subscribe(data => {
      console.log('loaded');
      this.genres = data['genres'];
      this.movies = data['movies'];
    });
  }

  pickMovie(event: any) {
    event.preventDefault();
    let movie: Movie = this.movies.find(movie => movie.markedToSee);
    if (movie) {
      movie.markedToSee = false;
    }
    this.movies[Math.floor(Math.random() * this.movies.length)].markedToSee = true;
  }

  ngOnDestroy() {
    this.movieSub.unsubscribe();
  }
}
