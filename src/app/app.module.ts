import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MoviesModule } from './movies/movies.module';
import { MailingListModule } from './mailing-list/mailing-list.module';
import { NewsletterModule } from './newsletter/newsletter.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    SharedModule,
    MoviesModule,
    MailingListModule,
    NewsletterModule
  ],
  providers: [{
    provide: 'preload',
    useValue: 'preloading'
  }, {
    provide: 'apiKey',
    useValue: 'your key here'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
