import { Component, Input } from '@angular/core';
import { Movie } from '../index';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['../../shared/styles.css', './movie-details.component.css']
})
export class MovieDetailsComponent {
  @Input() movie: Movie;

  getImageUrl (fileName: string): string {
    return `https://image.tmdb.org/t/p/w1280${fileName}`;
  }
}
