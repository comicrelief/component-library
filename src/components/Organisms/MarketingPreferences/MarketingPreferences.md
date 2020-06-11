Marketing Preferences

```js
import { useForm, FormContext } from 'react-hook-form';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import MarketingPreferences from './MarketingPreferences';

const methods = useForm();

const onSubmit = data => console.log(data);

<FormContext {...methods}>
  <form onSubmit={methods.handleSubmit(onSubmit)}>
    <MarketingPreferences
      copyBottom={
        <Text tag="p" color="black">
          You can update your communication preferences at any time at
          <Link
            type="standard"
            href="https://www.comicrelief.com/update-your-preferences"
          >
            update your preferences
          </Link>. Your details will be kept safe, check out our
          <Link
            type="standard"
            href="https://www.comicrelief.com/privacy-policy"
          >
            privacy policy
          </Link>
          for more details.
        </Text>
      }
    />
    <input type="submit" />
  </form>
</FormContext>;
```
