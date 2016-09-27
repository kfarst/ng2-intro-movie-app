import { Ng2IntroMovieAppPage } from './app.po';

describe('ng2-intro-movie-app App', function() {
  let page: Ng2IntroMovieAppPage;

  beforeEach(() => {
    page = new Ng2IntroMovieAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
