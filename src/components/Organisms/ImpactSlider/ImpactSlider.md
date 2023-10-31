# Impact Slider

```js
const impactSliderMoneybuyIcons = require('../../../styleguide/data/data').impactSliderMoneybuyIcons;

const fakeItems = [
  { itemPerPound: 1, description: 'Fresh water pumps', imageURL: impactSliderMoneybuyIcons.item1 },
  { itemPerPound: 5, description: 'Food Sachets', imageURL: impactSliderMoneybuyIcons.item2 },
  { itemPerPound: 10, description: 'Midwife birthing kits', imageURL: impactSliderMoneybuyIcons.item3 },
  { itemPerPound: 15, description: 'School in a bag kit', imageURL: impactSliderMoneybuyIcons.item4 },
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
