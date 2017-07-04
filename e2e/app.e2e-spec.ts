import { OvisPage } from './app.po';

describe('ovis App', () => {
  let page: OvisPage;

  beforeEach(() => {
    page = new OvisPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
