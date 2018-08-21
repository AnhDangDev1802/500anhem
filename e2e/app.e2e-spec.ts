import { AngularUniversalPage } from './app.po';

describe('angular-universal App', () => {
  let page: AngularUniversalPage;

  beforeEach(() => {
    page = new AngularUniversalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
