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
  selectedMovieIndex: number;

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
    this.selectedMovieIndex = Math.floor(Math.random() * this.movies.length);
  }

  ngOnDestroy() {
    this.movieSub.unsubscribe();
  }
}
