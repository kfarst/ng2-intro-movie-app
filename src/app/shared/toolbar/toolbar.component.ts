import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  favSub: Subscription;
  favoritesCount: number = 0;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
    this.favSub = this.favoritesService.count.
      subscribe(favoritesCount => this.favoritesCount = favoritesCount);
  }

  ngOnDestroy() {
    this.favSub.unsubscribe();
  }
}
