/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { GenreListPipe } from './genre-list.pipe';
import { Genre } from './index';

describe('Pipe: GenreList', () => {
  let pipe = new GenreListPipe();

  it('returns an empty string with no genres', () => {
    expect(pipe.transform([], [])).toBe('');
  });

  it('returns a comma separated list of genres', () => {
    let genres: number[] = [1, 3, 5];
    let list: Genre[] = [
      { id: 1, name: 'Action' },
      { id: 3, name: 'Horror' },
      { id: 5, name: 'Comedy' },
    ];
    expect(pipe.transform(genres, list)).toBe('Action, Horror, Comedy');
  });
});
