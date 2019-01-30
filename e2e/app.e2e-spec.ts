import { Integra2Page } from './app.po';

describe('integra2 App', function() {
  let page: Integra2Page;

  beforeEach(() => {
    page = new Integra2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
