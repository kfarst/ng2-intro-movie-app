/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FavoritesService } from './favorites.service';

describe('Service: Favorites', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoritesService]
    });
  });

  it('should ...', inject([FavoritesService], (service: FavoritesService) => {
    expect(service).toBeTruthy();
  }));
});
