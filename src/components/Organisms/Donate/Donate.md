# Donate

## Form align right, with red backgound on desktop view

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  backgroundColor="transparent"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-1"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  otherDescription="will help us fund amazing projects in the UK and around the world."
/>;
```

## Form align left

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  backgroundColor="blue_dark"
  formAlignRight={false}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-1"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  otherDescription="will help us fund amazing projects in the UK and around the world."
/>;
```

## Single Giving

```js
import data from './dev-data/data-single';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  backgroundColor="blue_dark"
  formAlignRight={false}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-1"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  otherDescription="will help us fund amazing projects in the UK and around the world."
/>;
```

## Single Giving "No Money Buys"

```js
import data from './dev-data/data-single';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  backgroundColor="blue_dark"
  formAlignRight={false}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-1"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  noMoneyBuys
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  otherDescription="will help us fund amazing projects in the UK and around the world."
/>;
```

## Form align right - no subtitle

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  backgroundColor="blue_dark"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-1"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle=""
  otherDescription="will help us fund amazing projects in the UK and around the world."
/>;
```

## Form align left - no subtitle

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  backgroundColor="blue_dark"
  formAlignRight={false}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-1"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle=""
  otherDescription="will help us fund amazing projects in the UK and around the world."
/>;
```

## Single Giving - no subtitle

```js
import data from './dev-data/data-single';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  backgroundColor="blue_dark"
  formAlignRight={false}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-1"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle=""
  otherDescription="will help us fund amazing projects in the UK and around the world."
/>;
```

## Single Giving "No Money Buys"

```js
import data from './dev-data/data-single';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  backgroundColor="blue_dark"
  formAlignRight={false}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-1"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  noMoneyBuys
  subtitle=""
  otherDescription="will help us fund amazing projects in the UK and around the world."
/>;
```

## Single Giving "No Money Buys", no background image, overriding 'choose amount' text

```js
import data from './dev-data/data-single';

<Donate
  backgroundColor="blue_dark"
  formAlignRight={false}
  data={data}
  mbshipID="mship-1"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  noMoneyBuys
  subtitle=""
  otherDescription="will help us fund amazing projects in the UK and around the world."
  chooseAmountText="Overridden via the 'choose amount text' props"
/>;
```
