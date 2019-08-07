const whiteList = [
  'https://giftaid.comicrelief.com',
  'https://www.comicrelief.com',
  'https://www.sportrelief.com'
];

const whiteListed = url => {
  if (
    whiteList.some(v => {
      return url.indexOf(v) >= 0;
    })
  ) {
    return true;
  }
  return false;
};

export default whiteListed;
