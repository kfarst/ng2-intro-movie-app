import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
