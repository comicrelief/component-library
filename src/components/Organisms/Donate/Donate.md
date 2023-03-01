# Donate

## Form align right, with red desktop overlay and purple mobile background colour, with a blue submit button

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  mobileBackgroundColor="deep_violet_dark"
  desktopOverlayColor="red"
	submitButtonColor="blue_dark"
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

## Form align left, with custom message after choosing an "Other amount" to donate, high value cart.
```js
import data from './dev-data/data-high-value';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  mobileBackgroundColor="blue_dark"
  desktopOverlayColor="blue_dark"
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
  mobileBackgroundColor="blue_dark"
  desktopOverlayColor="blue_dark"
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
  mobileBackgroundColor="blue_dark"
  desktopOverlayColor="blue_dark"
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
  mobileBackgroundColor="transparent"
  desktopOverlayColor="transparent"
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
  mobileBackgroundColor="transparent"
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
  mobileBackgroundColor="blue_dark"
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
  mobileBackgroundColor="blue_dark"
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

## Single Giving "No Money Buys", no background image, blue background; overriding 'choose amount' text

```js
import data from './dev-data/data-single';

<Donate
  desktopOverlayColor="blue_dark"
  mobileBackgroundColor="blue_dark"
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

## Forcing mobile layout via isDesktop override; needed to pass parent prop for external media queries, red background

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  mobileBackgroundColor="red"
  desktopOverlayColor="red"
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
