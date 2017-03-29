import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FavoritesService {
  private countSource = new Subject<number>();

  count = this.countSource.asObservable();

  updateCount(count: number) {
    this.countSource.next(count);
  }
}
