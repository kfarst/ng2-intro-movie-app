import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    SharedModule,
    MoviesModule
  ],
  providers: [{
    provide: 'preload',
    useValue: () => console.log('preloading')
  }, {
    provide: 'apiKey',
    useValue: 'your key here'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
