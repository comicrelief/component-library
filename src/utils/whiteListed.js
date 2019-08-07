const whiteList = [
  'https://giftaid.comicrelief.com/update',
  'https://www.sportrelief.com/'
];

const whiteListed = url => {
  if (whiteList.includes(url)) {
    return true;
  }
  return false;
};

export default whiteListed;
