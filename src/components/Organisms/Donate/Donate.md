# Donate

## Form align right

```js
import data from './dev-data/data';
const pictures = require('../../../styleguide/data/data').default;

<Donate
  alt="Background image"
  backgroundColor="blue_dark"
  formAlignRight={true}
  imageLow={pictures.imageLow}
  images={pictures.images}
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
const pictures = require('../../../styleguide/data/data').default;

<Donate
  backgroundColor="blue_dark"
  formAlignRight={false}
  imageLow={pictures.imageLow}
  images={pictures.images}
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
const pictures = require('../../../styleguide/data/data').default;

<Donate
  backgroundColor="blue_dark"
  formAlignRight={false}
  imageLow={pictures.imageLow}
  images={pictures.images}
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
