import { TwitsStatusesPage } from './app.po';

describe('twits-statuses App', () => {
  let page: TwitsStatusesPage;

  beforeEach(() => {
    page = new TwitsStatusesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
