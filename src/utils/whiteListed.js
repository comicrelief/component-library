const whiteList = [
  'https://giftaid.comicrelief.com',
  'https://donation.comicrelief.com',
  'https://www.comicrelief.com',
  'https://www.sportrelief.com',
  'https://app.beapplied.com/org/comic-relief',
];

const whiteListed = url => {
  if (
    url !== undefined
    && url !== null
    && whiteList.some(v => url.indexOf(v) >= 0)
  ) {
    return true;
  }
  return false;
};

export default whiteListed;
