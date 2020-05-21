# AddressForm

```jsx
import AddressForm from './AddressForm';

const onValidSubmission = values => {
  alert(JSON.stringify(values, null, 2));
};

<AddressForm onValidSubmission={onValidSubmission} />;
```
