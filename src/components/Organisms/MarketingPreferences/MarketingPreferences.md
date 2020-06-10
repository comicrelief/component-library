```js
import React, { useState, useEffect } from 'react';
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

const [emailActive, setEmailActive] = useState(false);
const [addressActive, setAddressActive] = useState(false);
const [phoneActive, setPhoneActive] = useState(false);
const [mobileActive, setMobileActive] = useState(false);

const marketingValidations = yup.object().shape({
  ...(emailActive === 'yes' && emailValidation),
  ...(addressActive === 'yes' && addressValidation),
  ...(phoneActive === 'yes' && phoneValidation),
  ...(mobileActive === 'yes' && mobileValidation)
});

const methods = useForm({
  validationSchema: marketingValidations,
  mode: 'onBlur'
});

const watcher = methods.watch();

useEffect(() => {
  setEmailActive(watcher && watcher.email);
  setAddressActive(watcher && watcher.address);
  setPhoneActive(watcher && watcher.telephone);
  setMobileActive(watcher && watcher.mobilePhone);
}, [watcher]);

const onSubmit = data => console.log(data);

<FormContext {...methods}>
  <form onSubmit={methods.handleSubmit(onSubmit)}>
    <MarketingPreferences />
    <input type="submit" />
  </form>
</FormContext>;
```
