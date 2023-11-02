# Impact Slider (w/opacity animation)

```js
const { testImpactSliderItems} = require('../../../styleguide/data/data');
import Text from '../../Atoms/Text/Text';

<ImpactSlider
  heading="Your donations will change lives"
  donateLink="https://donation-staging.spa.comicrelief.com"
  rowID="to-come-from-the-cms"
  cartID="to-also-come-from-the-cms"
  items={testImpactSliderItems}
  step={5}
  max={100}
  opacityAnimation={true}
  >
    <Text tag="p" color="black">
      Use this slider to see how your donation can make a difference to lives in the UK and around the globe this winter.
    </Text>
  </ImpactSlider>
```

# Impact Slider (w/o opacity animation, w/default value)
```js
const { testImpactSliderItems} = require('../../../styleguide/data/data');
import Text from '../../Atoms/Text/Text';

<ImpactSlider
  heading="Your donations will change lives"
  donateLink="https://donation-staging.spa.comicrelief.com"
  rowID="to-come-from-the-cms"
  cartID="to-also-come-from-the-cms"
  items={testImpactSliderItems}
  step={5}
  max={100}
  defaultSliderValue={45}
  >
    <Text tag="p" color="black">
      Use this slider to see how your donation can make a difference to lives in the UK and around the globe this winter.
    </Text>
  </ImpactSlider>
```