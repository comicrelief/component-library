# Donate

## Form align right, with red desktop overlay and purple mobile background colour, with a blue submit button and 'no top padding' option

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  mobileBackgroundColor="deep_violet_dark"
  desktopOverlayColor="red"
  submitButtonColor="blue_donate"
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
  paddingOption="upper_off"
/>;
```

## Form align left, with custom message after choosing an "Other amount" to donate, high value cart, and 'no bottom padding' option
```js
import data from './dev-data/data-high-value';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  mobileBackgroundColor="blue_dark"
  submitButtonColor="blue_donate"
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
  paddingOption="lower_off"
/>;
```

## Single Giving, with 'no padding' option

```js
import data from './dev-data/data-single';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  mobileBackgroundColor="blue_dark"
  submitButtonColor="blue_donate"
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
  paddingOption="both_off"
/>;
```

## Single Giving "No Money Buys"

```js
import data from './dev-data/data-single';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  mobileBackgroundColor="blue_dark"
  submitButtonColor="blue_donate"
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

## Single Giving "No Money Buys" with overridden manual input value

```js
import data from './dev-data/data-single';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;
import { useState } from 'react';

// Simulating default state of a parent componenet
const [amountDonate, setAmountDonate] = useState(123.45);

// Simulating state update of a parent componenet
setTimeout(()=>{
  setAmountDonate(567.89);
}, 3000);

<Donate
  mobileBackgroundColor="blue_dark"
  desktopOverlayColor="blue_dark"
  formAlignRight={false}
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
  noMoneyBuys
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  otherAmountValue={amountDonate}
  otherAmountText="Here's an otherAmountText override"

/>;
```

## Form align right, with red desktop overlay and purple mobile background colour, with a blue submit button, with overridden manual input value

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;
import { useState } from 'react';

// Simulating default state of a parent componenet
const [amountDonate, setAmountDonate] = useState(111.22);

// Simulating state update of a parent componenet
setTimeout(()=>{
  setAmountDonate(333.44);
}, 3000);

<Donate
  alt="Background image"
  formAlignRight={true}
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
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  otherAmountValue={amountDonate}
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
  mbshipID="mship-7"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  otherAmountText="Overridden via the 'Other amount text' prop"
/>;
```


## Form align right, but no copy, so ACTUALLY centre-aligns

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  mobileBackgroundColor="transparent"
  submitButtonColor="blue_donate"
  desktopOverlayColor="transparent"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-8"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  // Directly omiting values for these to centre-align
  title=""
  subtitle=""
  chooseAmountText=""
  monthlyTitle=""
  monthlySubtitle=""
/>;
```

## Form align left - no subtitle

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  mobileBackgroundColor="transparent"
  submitButtonColor="blue_donate"
  formAlignRight={false}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-9"
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
  submitButtonColor="blue_donate"
  formAlignRight={false}
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
  submitButtonColor="blue_donate"
  formAlignRight={false}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-11"
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
  submitButtonColor="blue_donate"
  mobileBackgroundColor="blue_dark"
  formAlignRight={false}
  data={data}
  mbshipID="mship-12"
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
  submitButtonColor="blue_donate"
  desktopOverlayColor="red"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-13"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  isDesktopOverride={false}
/>;
```

## Additional copy for BOTH giving types

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  mobileBackgroundColor="deep_violet_dark"
  desktopOverlayColor="red"
  submitButtonColor="blue_donate"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-14"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  additionalSingleCopy="Some additional single giving copy - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa."
  additionalMonthlyCopy="Some additional regular giving copy! - Quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos."
/>;
```

## Additional copy for monthly only

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  mobileBackgroundColor="deep_violet_dark"
  desktopOverlayColor="red"
  submitButtonColor="blue_donate"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-15"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  additionalMonthlyCopy="Some additional regular giving copy! - Quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos."
/>;
```

## Additional copy for single only

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  mobileBackgroundColor="deep_violet_dark"
  desktopOverlayColor="red"
  submitButtonColor="blue_donate"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-16"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  additionalSingleCopy="Some additional single giving copy - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa."
/>;
```

## Default monthly giving type

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  mobileBackgroundColor="deep_violet_dark"
  desktopOverlayColor="red"
  submitButtonColor="blue_donate"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-17"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  defaultGivingType="monthly"
/>;
```

## Monthly ONLY

```js
import data from './dev-data/data-monthly';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  mobileBackgroundColor="deep_violet_dark"
  desktopOverlayColor="red"
  submitButtonColor="blue_donate"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-18"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
/>;
```

## Monthly ONLY, no moneybuys

```js
import data from './dev-data/data-monthly';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  mobileBackgroundColor="deep_violet_dark"
  desktopOverlayColor="red"
  submitButtonColor="blue_donate"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-19"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Donate Now"
  subtitle="Please help us fund life-changing projects in the UK and around the world."
  noMoneyBuys
/>;
```

## Monthly 'Choose Amount' and 'Other Amount' copy overrides

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  mobileBackgroundColor="deep_violet_dark"
  desktopOverlayColor="red"
  submitButtonColor="blue_donate"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-20"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Standard title here"
  subtitle="Standard subtitle here"
  otherAmountText="Here's an otherAmountText override"
  chooseAmountText="Here's an chooseAmountText override"
  monthlyChooseAmountText="monthlyChooseAmountText here"
  monthlyOtherAmountText="monthlyOtherAmountText here"
/>;
```

## Monthly Title and Subtitle overrides

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  mobileBackgroundColor="deep_violet_dark"
  desktopOverlayColor="red"
  submitButtonColor="blue_donate"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-21"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Standard title here"
  subtitle="Standard subtitle here"
  otherAmountText="Here's an otherAmountText override"
  chooseAmountText="Here's an chooseAmountText override"
  monthlyTitle="Monthly Title here"
  monthlySubtitle="Monthly Subtitle here"
/>;
```

## All monthly overrides

```js
import data from './dev-data/data';
const mobilePictures = require('../../../styleguide/data/data').mobileImages;
const desktopPictures = require('../../../styleguide/data/data').defaultData;

<Donate
  alt="Background image"
  mobileBackgroundColor="deep_violet_dark"
  desktopOverlayColor="red"
  submitButtonColor="blue_donate"
  formAlignRight={true}
  imageLow={desktopPictures.imageLow}
  images={desktopPictures.images}
  mobileImageLow={mobilePictures.imageLow}
  mobileImages={mobilePictures.images}
  data={data}
  mbshipID="mship-22"
  donateLink="https://donation.comicrelief.com/"
  clientID="donate"
  cartID="default-comicrelief"
  title="Standard title here"
  subtitle="Standard subtitle here"
  otherAmountText="Here's an otherAmountText override"
  chooseAmountText="Here's an chooseAmountText override"
  monthlyTitle="Monthly Title here"
  monthlySubtitle="Monthly Subtitle here"
  monthlyChooseAmountText="monthlyChooseAmountText here"
  monthlyOtherAmountText="monthlyOtherAmountText here"
/>;
```
