import whiteListed from './whiteListed';

it('link is whitelisted', () => {
  expect(whiteListed('https://www.sportrelief.com/')).toBe(true);
});

it('link is not whitelisted', () => {
  expect(whiteListed('https://www.google.co.uk/')).toBe(false);
});
