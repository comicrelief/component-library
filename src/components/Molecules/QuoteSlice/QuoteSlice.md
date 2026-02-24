


# Quote slice

### Empty slice

```js
<QuoteSlice />
```

### Quote slice > basic props
```js
import { defaultData } from '../../../styleguide/data/data';
<QuoteSlice
    heading="Up to 100 characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
    body="Body text"
    imageS={defaultData.pictures.small}
    imageM={defaultData.pictures.medium}
    imageL={defaultData.pictures.large}
    ctaUrl="http://www.google.com"
    ctaLabel="An external link"
     />
```

### Quote slice > responsive heading size
Longer heading text should automatically use a smaller font size for a better fit.
```js
import { defaultData } from '../../../styleguide/data/data';
<QuoteSlice
    heading="Mid-length quotes over 100 characters will slowly scale down. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    body="Body text"
    imageS={defaultData.pictures.small}
    imageM={defaultData.pictures.medium}
    imageL={defaultData.pictures.large}
    ctaUrl="http://www.google.com"
    ctaLabel="An external link"
     />
```

### Quote slice > alternative props
```js
import { defaultData } from '../../../styleguide/data/data';
<QuoteSlice
    heading="Longer quotes of up to 500 characters will all appear at the smallest size. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in."
    body={`Line 1,
Line 2`}
    textColour="black"
    pageBackgroundColour="red"
    ctaUrl="/test-url"
    ctaLabel="An external link"
     />
```
