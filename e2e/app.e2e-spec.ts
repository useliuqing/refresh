import { RefreshPage } from './app.po';

describe('refresh App', () => {
  let page: RefreshPage;

  beforeEach(() => {
    page = new RefreshPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
