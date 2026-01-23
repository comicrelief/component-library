# DonateBanner

## Image banner (widget right), custom padding + background

```js
import data from './dev-data/data';
const desktopPictures = require('../../../styleguide/data/data').defaultData;
const mobilePictures = require('../../../styleguide/data/data').mobileImages;

const imageL = {
  images: desktopPictures.images,
  imageLow: desktopPictures.imageLow,
  alt: 'Background image'
};

const imageM = {
  images: desktopPictures.images,
  imageLow: desktopPictures.imageLow,
  alt: 'Background image'
};

const imageS = {
  images: mobilePictures.images,
  imageLow: mobilePictures.imageLow,
  alt: 'Background image'
};

<DonateBanner
  pageBackgroundColour="grey_light"
  paddingAbove="0rem"
  paddingBelow="2rem"
  donateOrientation="right"
  imageL={imageL}
  imageM={imageM}
  imageS={imageS}
  data={data}
  mbshipID="mbship-1"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
/>;
```

## Image banner (widget left), monthly title/subtitle + choose amount text overrides

```js
import data from './dev-data/data';
const desktopPictures = require('../../../styleguide/data/data').defaultData;
const mobilePictures = require('../../../styleguide/data/data').mobileImages;

const imageL = {
  images: desktopPictures.images,
  imageLow: desktopPictures.imageLow,
  alt: 'Background image'
};

const imageM = {
  images: desktopPictures.images,
  imageLow: desktopPictures.imageLow,
  alt: 'Background image'
};

const imageS = {
  images: mobilePictures.images,
  imageLow: mobilePictures.imageLow,
  alt: 'Background image'
};

<DonateBanner
  pageBackgroundColour="grey_light"
  paddingAbove="2rem"
  paddingBelow="2rem"
  donateOrientation="left"
  imageL={imageL}
  imageM={imageM}
  imageS={imageS}
  data={data}
  mbshipID="mbship-2"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate today"
  subtitle="Your support can help people facing the toughest times."
  monthlyTitle="Give monthly"
  monthlySubtitle="A regular gift helps fund long-term impact."
  chooseAmountText="Choose a one-off amount"
  monthlyChooseAmountText="Choose a monthly amount"
  popUpText="Switching to a single gift means less predictable funding."
/>;
```

## Text-only widget (no image), custom widget background + text colour

```js
import data from './dev-data/data-single';

<DonateBanner
  donateWidgetIsTextOnly
  pageBackgroundColour="rnd_25_glitzy_grape"
  componentBackgroundColour="deep_violet_dark"
  textColor="blue"
  paddingAbove="2rem"
  paddingBelow="2rem"
  donateOrientation="right"
  data={data}
  mbshipID="mbship-3"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate now"
  subtitle="Make a difference today."
  chooseAmountText="Enter an amount to give"
  noMoneyBuys
/>;
```

## Text-only widget (no image), with the usual moneybuys, standard colours

```js
import data from './dev-data/data';

<DonateBanner
  donateWidgetIsTextOnly
  pageBackgroundColour="grey_light"
  componentBackgroundColour="white"
  textColor="black"
  paddingAbove="2rem"
  paddingBelow="2rem"
  donateOrientation="right"
  data={data}
  mbshipID="mbship-3b"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate now"
  subtitle="Choose an amount or pick a moneybuy."
/>;
```

## Different “Other amount” copy for single vs monthly

```js
import data from './dev-data/data';
const desktopPictures = require('../../../styleguide/data/data').defaultData;

const imageL = {
  images: desktopPictures.images,
  imageLow: desktopPictures.imageLow,
  alt: 'Background image'
};

<DonateBanner
  pageBackgroundColour="grey_light"
  paddingAbove="0rem"
  paddingBelow="0rem"
  donateOrientation="right"
  imageL={imageL}
  data={data}
  mbshipID="mbship-4"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate now"
  subtitle="Help fund life-changing work."
  otherAmountText="can help support people in crisis."
  monthlyOtherAmountText="each month can help provide long-term support."
/>;
```
