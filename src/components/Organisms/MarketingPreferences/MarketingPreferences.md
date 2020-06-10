```js
import { useForm, FormContext, useFormContext } from 'react-hook-form';
import * as yup from 'yup';

import MarketingPreferences from './MarketingPreferences';
import { ValidationSchemaProvider } from './validationSchemaContext';

import {
  emailValidation,
  addressValidation,
  phoneValidation,
  mobileValidation
} from './marketingRules';

const marketingValidations = yup.object().shape({
  ...emailValidation
  // ...(emailActive === 'yes' && emailValidation),
  // ...(addressActive === 'yes' && addressValidation),
  // ...(phoneActive === 'yes' && phoneValidation),
  // ...(mobileActive === 'yes' && mobileValidation)
});

const methods = useForm({
  validationSchema: marketingValidations,
  mode: 'onBlur'
});

const onSubmit = data => console.log(data);

<FormContext {...methods}>
  <form onSubmit={methods.handleSubmit(onSubmit)}>
    <MarketingPreferences />
    <input type="submit" />
  </form>
</FormContext>;
```
