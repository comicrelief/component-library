# Donate

## Form align right

```js
import data from './dev-data/data';
const pictures = require('../../../styleguide/data/data').default;

<Donate
  alt="Background image"
  backgroundColor="orange_light"
  formAlignRight={true}
  imageLow={pictures.imageLow}
  images={pictures.images}
  data={data}
  mbshipID="mship-1"
  donateLink="https://donation.comicrelief.com/"
  cartID="refugee1-365"
  title="Help someone like Jordan see a better tomorrow"
  subtitle="Jordan was close to suicide - which is now the biggest killer of men under 45 in the UK. Donate now and help save lives."
  otherDescription="Your donation will help us fund amazing projects in the UK and around the world."
/>;
```

## Form align left

```js
import data from './dev-data/data';
const pictures = require('../../../styleguide/data/data').default;

<Donate
  backgroundColor="orange_light"
  formAlignRight={false}
  imageLow={pictures.imageLow}
  images={pictures.images}
  data={data}
  mbshipID="mship-1"
  donateLink="https://donation.comicrelief.com/"
  cartID="refugee1-365"
  title="Help someone like Jordan see a better tomorrow"
  subtitle="Jordan was close to suicide - which is now the biggest killer of men under 45 in the UK. Donate now and help save lives."
  otherDescription="Your donation will help us fund amazing projects in the UK and around the world."
/>;
```
