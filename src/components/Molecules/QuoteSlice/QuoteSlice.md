


# Quote slice

### Empty slice

```js
<QuoteSlice />
```

### Quote slice > basic props
```js
import { defaultData } from '../../../styleguide/data/data';
<QuoteSlice
    heading="Heading"
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
    heading="Heading"
    body={`Line 1,
Line 2`}
    textColour="black"
    pageBackgroundColour="red"
    ctaUrl="/test-url"
    ctaLabel="An external link"
     />
```
