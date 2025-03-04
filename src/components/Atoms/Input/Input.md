```js
<h4>Input required with label and hint</h4>
  <Input
    name="fullname"
    placeholder="This is the hint text"
    type="text"
    label="Label"
    id="input-example-1"
    showLabel={true}
  />
```

```js
  <h4>Input with error message</h4>
  <Input
    name="fullname"
    placeholder="This is the hint text"
    type="text"
    label="Label"
    errorMsg="This is an error message"
    id="input-example-2"
  />
```

```js
  <h4>Simple input (optional)</h4>
  <Input
    name="fullname"
    placeholder=""
    type="text"
    label="Label"
    errorMsg=""
    id="input-example-3"
    showLabel={true}
    optional={true}
  />
```

```js
  <h4>Simple input (required)</h4>
  <Input
    name="fullname"
    placeholder=""
    type="text"
    label="Label"
    errorMsg=""
    id="input-example-4"
    showLabel={true}
    optional={false} // can stil be overriden with standard 'required' attribute
  />
```


```js
  <h4>Input Label with markup</h4>
  <Input
    name="fullname"
    placeholder=""
    type="text"
    label="<b>Markup label <i>italic</i></b>"
    errorMsg=""
    id="input-example-5"
    showLabel={true}
  />
```

```js
import styled from 'styled-components';
import Text from '../../Atoms/Text/Text';

const ItalicText = styled(Text).attrs({weight: 'normal'})`
  font-style: italic
`;

<>
  <h4>Input label as React element</h4>
  <Input
    name="email"
    placeholder=""
    type="text"
    label={<>Email <ItalicText>(please check it's correct)</ItalicText></>}
    errorMsg=""
    id="input-example-6"
    showLabel={true}
  />
</>
```

```js
  <h4>Input with prefix</h4>
  <p>(This example also ensures there are two decimal places onBlur)</p>
  <Input
    name="price"
    type="number"
    label="label"
    errorMsg=""
    id="price"
    showLabel={true}
    prefix="£"
    placeholder="0.00"
    onBlur={event => {
      const price = event.target.value;
      if (typeof Number(price) === 'number') {
        event.target.value = Number(price).toFixed(2);
      }
    }}
  />
