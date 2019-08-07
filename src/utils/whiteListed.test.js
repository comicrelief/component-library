import whiteListed from './whiteListed';

it('link is whitelisted', () => {
  expect(whiteListed('https://www.comicrelief.com/home')).toBe(true);
});

it('link is not whitelisted', () => {
  expect(whiteListed('https://www.google.co.uk/')).toBe(false);
});
