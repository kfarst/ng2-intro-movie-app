# codementor.io Intro to Angular 2 Movie App

This app is used as a live demonstration during [codementor.io](https://www.codementor.io)'s Intro to Angular 2 course. The project is built upon each week to teach the concrete concepts of Angular 2 as well as the development flow of features in Angular 2 using the [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.15.

<img src="http://imgur.com/bkDOhxi.png" alt="Screenshot" />

## Getting started
* Ensure [node.js](https://nodejs.org) is installed
* Within the project, run `npm install`
* The app is built with [The Movie DB API](https://www.themoviedb.org/documentation/api), therefore an API key must be obtained
* Depending on the commit and week, search the app for `your key here` and replace it with your API key
* Run `npm start` to start the server
* Navigate to `http://localhost:4200/`
* The app will automatically reload if you change any of the source files

## Syllabus

NOTE: Each week is separated into its own branch

**[Week 1](https://github.com/kfarst/ng2-intro-movie-app/tree/week1)**

*Getting started with Angular 2*

* A brief introduction to TypeScript and ES6
* Building an app with the angular-cli
* Structuring an app with NgModules
* The backbone of Angular 2: components
* The Swiss-Army module: services
* Lab 1: Fetching and presenting upcoming movies from an API

**[Week 2](https://github.com/kfarst/ng2-intro-movie-app/tree/week2)**

*Building on Angular 2*

* Connecting components and features through routing
* Transforming data through pipes
* Lab 2: Fetching lists of movies by type and displaying more robust data

**[Week 3](https://github.com/kfarst/ng2-intro-movie-app/tree/week3)**

*Dependency injection/content projection/RxJS*

* How Angular detects change
* View encapsulation with components
* Learning Angular 2’s dependency injection strategy
* Basic content projection in Angular 2
* Using ViewChildren and ContentChildren
* Cold observables, hot observables, EventEmitter, and RxJS
* Lab 3: Favoriting movies and aggregating the count

**[Week 4](https://github.com/kfarst/ng2-intro-movie-app/tree/week4)**

*Using Angular 2 Forms*

* Developing template-driven/model-driven forms
* Using the built-in form validations
* Defining custom form validations
* Leveraging observables with forms
* Lab 4: Adding a mailing list and newsletter forms to our app
