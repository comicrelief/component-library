# AddressForm

```jsx
import AddressForm from './AddressForm';

const afterValidSubmission = values => {
  alert(JSON.stringify(values, null, 2));
};

<AddressForm afterValidSubmission={afterValidSubmission} />;
```
