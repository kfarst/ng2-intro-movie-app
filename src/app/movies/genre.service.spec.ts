/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenreService } from './genre.service';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('Service: Genre', () => {
  const mockResponse = {
    data: [
      { id: 0, name: 'Video 0' },
      { id: 1, name: 'Video 1' },
      { id: 2, name: 'Video 2' },
      { id: 3, name: 'Video 3' },
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        GenreService,
        { provide: XHRBackend, useClass: MockBackend },
        { provide: 'apiKey', useValue: 'abcdefg' }
      ]
    });
  });

  it('sets the API key', inject([GenreService, XHRBackend], (service: GenreService, mockBackend: MockBackend) => {
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    expect(service.apiKey).toBe('abcdefg');
  }));
});
