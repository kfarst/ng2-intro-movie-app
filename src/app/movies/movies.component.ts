import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Movie, MoviesService } from './movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  movieSub: Subscription;
  paramSub: Subscription;
  listType: string;
  errorMessage: string;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramSub = this.route
      .params
      .subscribe(params => {
        this.listType = params['list_type'];
        this.getMovies();
      });
  }

  getMovies() {
    this.movieSub = this.moviesService.get(this.listType.replace('-', '_'))
    .subscribe(
      movies => this.movies = movies,
        error =>  this.errorMessage = <any>error
    );
  }

  ngOnDestroy() {
    this.paramSub.unsubscribe();
    this.movieSub.unsubscribe();
  }
}
