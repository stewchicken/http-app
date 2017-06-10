import { HttpAppPage } from './app.po';

describe('http-app App', () => {
  let page: HttpAppPage;

  beforeEach(() => {
    page = new HttpAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
