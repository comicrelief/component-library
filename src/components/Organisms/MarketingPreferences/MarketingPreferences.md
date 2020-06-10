```js
import { useForm, FormContext, useFormContext } from 'react-hook-form';
import * as yup from 'yup';

import MarketingPreferences from './MarketingPreferences';
import {
  emailValidation,
  addressValidation,
  phoneValidation,
  mobileValidation
} from './marketingRules';

const methods = useForm({
  validationSchema: marketingValidations,
  mode: 'onBlur'
});

const marketingValidations = yup.object().shape({
  ...emailValidation
  // ...(emailActive === 'yes' && emailValidation),
  // ...(addressActive === 'yes' && addressValidation),
  // ...(phoneActive === 'yes' && phoneValidation),
  // ...(mobileActive === 'yes' && mobileValidation)
});

const onSubmit = data => console.log(data);

<FormContext {...methods}>
  <form onSubmit={methods.handleSubmit(onSubmit)}>
    <MarketingPreferences />
    <input type="submit" />
  </form>
</FormContext>;
```
