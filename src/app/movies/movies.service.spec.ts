/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MoviesService } from './movies.service';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('Service: Movies', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [MoviesService,
        { provide: XHRBackend, useClass: MockBackend },
        { provide: 'apiKey', useValue: 'abcdefg' }
      ]
    });
  });

  it('sets the API key', inject([MoviesService, XHRBackend], (service: MoviesService, mockBackend: MockBackend) => {
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    expect(service.apiKey).toBe('abcdefg');
  }));
});
