# Impact Slider

```js
const iconImageURL = require('../../../styleguide/data/data').iconImageURL;
const fakeItems = [
  { itemPerPound: 25, description: 'An item that costs £25', imageURL: iconImageURL },
  { itemPerPound: 50, description: 'An item that costs £50', imageURL: iconImageURL },
  { itemPerPound: 75, description: 'An item that costs £75', imageURL: iconImageURL },
  { itemPerPound: 100, description: 'An item with more text that costs £100', imageURL: iconImageURL },
];

<ImpactSlider
  copy={`<p>Use this slider to see how your donation can make a difference to lives in the UK and around the globe this winter.</p>`}
  heading="Your donations will change lives"
  donateLink="https://donation-staging.spa.comicrelief.com/"
  rowID="to-come-from-the-cms"
  clientID="donate" // to-do: is this really required?
  items={fakeItems}
  step={5}
  max={100}
/>
```
