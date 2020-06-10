Marketing Preferences

```js
import { useForm, FormContext } from 'react-hook-form';

import MarketingPreferences from './MarketingPreferences';

const methods = useForm();

const onSubmit = data => console.log(data);

<FormContext {...methods}>
  <form onSubmit={methods.handleSubmit(onSubmit)}>
    <MarketingPreferences />
    <input type="submit" />
  </form>
</FormContext>;
```
