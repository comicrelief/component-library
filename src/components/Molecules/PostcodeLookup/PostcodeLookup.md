# Postcode Lookup
The parent component must provide an `onSelect` prop in order to receive the selected address.

```js
const addressSelect = (address) => {
    setValue(FIELDS.LINE1, address.Line1, { shouldValidate: true });
    setValue(FIELDS.LINE2, address.Line2, { shouldValidate: true });
    setValue(FIELDS.LINE3, address.Line3, { shouldValidate: true });
    setValue(FIELDS.TOWN, address.posttown, { shouldValidate: true });
    setValue(FIELDS.POSTCODE, address.postcode, { shouldValidate: true });
    // Keep track of the last address that was selected; when the form is submitted, we will use the
    // address ID if the address hasn't been changed.
    setSelectedAddress(address);
    setSelectedSchool(null);
};

<PostcodeLookup onSelect={addressSelect} data-test="postcode-lookup" />
```
