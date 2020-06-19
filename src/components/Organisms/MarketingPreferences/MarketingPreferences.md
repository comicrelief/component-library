Marketing Preferences

```js
import { useForm, FormContext } from 'react-hook-form';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import MarketingPreferences from './MarketingPreferences';

const data = {
  mpEmailAddress: 'email@cr.com'
};

const methods = useForm({
  defaultValues: data
});

const onSubmit = data => console.log(data);

const copyTop = (
  <div>
    <Text tag="h3" size="xl" family="Anton" uppercase weight="400">
      How would you like to hear from us?
    </Text>
    <Text tag="p" size="md">
      Hear more about the project Comic Relief funds and other ways you can
      support our work including fundraising, campaigns and products.
    </Text>
  </div>
);

const copyBottom = (
  <Text tag="p" color="black">
    You can update your communication preferences at any time at
    <Link
      type="standard"
      href="https://www.comicrelief.com/update-your-preferences"
    >
      update your preferences
    </Link>. Your details will be kept safe, check out our
    <Link type="standard" href="https://www.comicrelief.com/privacy-policy">
      privacy policy
    </Link>
    for more details.
  </Text>
);

<FormContext {...methods}>
  <form onSubmit={methods.handleSubmit(onSubmit)}>
    <MarketingPreferences
      copyTop={copyTop}
      copyBottom={copyBottom}
      defaultValues={data}
      disableEmailInput
    />
    <input type="submit" />
  </form>
</FormContext>;
```
