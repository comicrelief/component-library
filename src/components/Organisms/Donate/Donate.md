# Donate

## Form align right, with red backgound on desktop view

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  backgroundColor="red"
  overlayColor="red"
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
/>;
```

## Form align left, with custom message after choosing an "Other amount" to donate.

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  backgroundColor="blue_dark"
  overlayColor="blue_dark"
  formAlignRight={false}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-2"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  otherAmountText="Overridden via the 'Other amount text' prop"
/>;
```

## Single Giving

```js
import data from './dev-data/data-single';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  backgroundColor="blue_dark"
  overlayColor="blue_dark"
  formAlignRight={false}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-3"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
/>;
```

## Single Giving "No Money Buys"

```js
import data from './dev-data/data-single';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  backgroundColor="blue_dark"
  overlayColor="blue_dark"
  formAlignRight={false}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-4"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  noMoneyBuys
  subtitle="Please help us fund life-changing projects in the UK and around the world."
/>;
```

## Form align right - no subtitle

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  backgroundColor="transparent"
  overlayColor="transparent"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-5"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle=""
/>;
```

## Form align left - no subtitle

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  backgroundColor="transparent"
  formAlignRight={false}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-6"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle=""
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
  mbshipID="mship-7"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle=""
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
  mbshipID="mship-8"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  noMoneyBuys
  subtitle=""
/>;
```

## Single Giving "No Money Buys", no background image, overriding 'choose amount' text

```js
import data from './dev-data/data-single';

<Donate
  backgroundColor="blue_dark"
  formAlignRight={false}
  data={data}
  mbshipID="mship-9"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  noMoneyBuys
  subtitle=""
  chooseAmountText="Overridden via the 'choose amount text' prop"
/>;
```

## Forcing mobile layout via isDesktop override; needed to pass parent prop for external media queries

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  backgroundColor="red"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-10"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  isDesktopOverride={false}
/>;
```
