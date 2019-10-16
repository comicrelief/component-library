# Membership sign up

```js
import data from './dev-data/data';
const pictures = require('../../../styleguide/data/data').default;

<Membership
  backgroundColor="orange_light"
  formAligntRight={false}
  imageLow={pictures.imageLow}
  images={pictures.images}
  data={data}
  mbshipID="mship-1"
  donateLink="https://donation.comicrelief.com/"
  cartID="refugee1-365"
  title="Help someone like Jordan see a better tomorrow"
  subtitle="Jordan was close to suicide - which is now the biggest killer of men under 45 in the UK. Join now and help save lives."
  otherDescription="Your donation will help us fund amazing projects in the UK and around the world."
/>;
```
