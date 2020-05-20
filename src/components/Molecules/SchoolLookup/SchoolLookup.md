# SchoolLookup

```jsx
import SchoolLookup from './SchoolLookup';

const notFoundMessage =
  "Sorry, we can't find this. If the school or postcode you entered is correct then please add the address manually below";
const onSelect = (school, reset, e) => {
  alert(JSON.stringify(school, null, 2));
  reset(true);
};

<SchoolLookup onSelect={onSelect} notFoundMessage={notFoundMessage} />;
```
