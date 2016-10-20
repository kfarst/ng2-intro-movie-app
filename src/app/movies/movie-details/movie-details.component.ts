import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Movie, Genre } from '../index';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent {
  @Input('movie') movieData: Movie;
  @Input() genres: Genre[];
  @Input() isEven: any;
  @Input() markedToSee: boolean;

  get movie() {
    console.log(`GET movie: ${this.movieData.title}`);
    return this.movieData;
  }

  getImageUrl (fileName: string): string {
    return `https://image.tmdb.org/t/p/w1280${fileName}`;
  }
}
