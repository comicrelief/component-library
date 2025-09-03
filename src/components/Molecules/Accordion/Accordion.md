# Accordion

```js
import Text from '../../Atoms/Text/Text';

<Accordion
  title={
    <Text family="Anton" size="l" uppercase>
      I am the title
    </Text>
  }
  >
 <Text tag="p">Name, surname, email and billing address We need these to process your payment, create a receipt and send it to you. Establishment information We use this information to understand which institutions (e.g. schools, companies) raise money for us. Your details will be kept safe and never shared with other organisations; see our Privacy Policy for more information</Text>
</Accordion>
```

```js
import Text from '../../Atoms/Text/Text';

<Accordion
  contentBottomPadding="100px"
  title={
    <Text family="Anton" size="l" uppercase>
      I am the title
    </Text>
  }
  >
  
  <Text tag="p">Customised bottom padding here!</Text>
  
  <Text tag="p">
    <a href="https://www.google.com">A plain anchor link, made to resemble a Link component</a>.
  </Text>
</Accordion>
```
