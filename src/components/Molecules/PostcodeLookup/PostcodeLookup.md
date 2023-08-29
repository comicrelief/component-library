# Postcode Lookup
The parent component must provide an `onSelect` prop in order to receive the selected address.

```js
import {
  FIELDS
} from './constants';

const addressSelect = (address) => {
    setValue(FIELDS.LINE1, address.Line1, { shouldValidate: true });
    setValue(FIELDS.LINE2, address.Line2, { shouldValidate: true });
    setValue(FIELDS.LINE3, address.Line3, { shouldValidate: true });
    setValue(FIELDS.TOWN, address.posttown, { shouldValidate: true });
    setValue(FIELDS.POSTCODE, address.postcode, { shouldValidate: true });
};

<PostcodeLookup onSelect={addressSelect} data-test="postcode-lookup" />
```
