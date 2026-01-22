const allowList = [
  'https://giftaid.comicrelief.com',
  'https://donation.comicrelief.com',
  'https://www.comicrelief.com',
  'https://www.sportrelief.com',
  'https://app.beapplied.com/org/comic-relief',
  'stories.comicrelief.com',
  'https://form.typeform.com',
  // Required for the HHoF form:
  'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js'
];

const allowListed = url => {
  if (
    url !== undefined
    && url !== null
    && allowList.some(v => url.indexOf(v) >= 0)
  ) {
    return true;
  }
  return false;
};

export default allowListed;
