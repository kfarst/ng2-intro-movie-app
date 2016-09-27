import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
