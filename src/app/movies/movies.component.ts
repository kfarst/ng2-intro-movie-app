import {
  Component,
  OnInit,
  OnDestroy,
  Injector,
  ViewChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Genre } from './index';
import { Movie, MoviesService } from './movies.service';
import { MovieDetailsComponent } from './movie-details/index';
import { FavoritesService } from '../shared/index';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(MovieDetailsComponent)
  private movieDetails: QueryList<MovieDetailsComponent>;

  movies: Movie[] = [];
  genres: Genre[] = [];
  movieSub: Subscription;
  listType: string;
  errorMessage: string;
  selectedMovieIndex: number;
  moviesService: MoviesService;

  constructor(private injector: Injector, private route: ActivatedRoute, private favoritesService: FavoritesService) {
    this.moviesService = this.injector.get(MoviesService);
  }

  ngOnInit() {
    this.movieSub = this.route.data.subscribe(data => {
      console.log('loaded');
      this.genres = data['genres'];
      this.movies = data['movies'];
    });
  }

  ngAfterViewInit() {
    this.movieDetails.changes.subscribe(changes => console.log(changes));
  }

  pickMovie(event: any) {
    event.preventDefault();
    this.selectedMovieIndex = Math.floor(Math.random() * this.movies.length);
  }

  toggleAsFavorite(detailCmp: MovieDetailsComponent) {
    detailCmp.isFavorited = !detailCmp.isFavorited;
    this.updateFavoriteCount();
  }

  updateFavoriteCount() {
    this.favoritesService.updateCount(
      this.movieDetails.filter(comp => comp.isFavorited).length
    );
  }

  ngOnDestroy() {
    this.movieSub.unsubscribe();
  }
}
