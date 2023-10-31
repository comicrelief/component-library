# Impact Slider

```js
const impactSliderMoneybuyIcons = require('../../../styleguide/data/data').impactSliderMoneybuyIcons;
import Text from '../../Atoms/Text/Text';

const testItems = [
  { poundsPerItem: 1, description: 'Fresh water pumps', imageURL: impactSliderMoneybuyIcons.item1 },
  { poundsPerItem: 10, description: 'Food Sachets', imageURL: impactSliderMoneybuyIcons.item2 },
  { poundsPerItem: 15, description: 'Midwife birthing kits', imageURL: impactSliderMoneybuyIcons.item3 },
  { poundsPerItem: 20, description: 'School in a bag kit', imageURL: impactSliderMoneybuyIcons.item4 },
];

<ImpactSlider
  heading="Your donations will change lives"
  donateLink="https://donation-staging.spa.comicrelief.com"
  rowID="to-come-from-the-cms"
  cartID="to-also-come-from-the-cms"
  items={testItems}
  step={5}
  max={100}
  >
    <Text tag="p" color="black">
      Use this slider to see how your donation can make a difference to lives in the UK and around the globe this winter.
    </Text>
  </ImpactSlider>
```
