import allowListed from './allowListed';

it('link is allowListed', () => {
  expect(allowListed('https://www.comicrelief.com/home')).toBe(true);
});

it('link is not allowListed', () => {
  expect(allowListed('https://www.google.co.uk/')).toBe(false);
});
