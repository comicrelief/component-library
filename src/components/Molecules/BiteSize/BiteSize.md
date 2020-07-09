# BiteSize

### BiteSize with link

```js
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
>
  <BiteSize
    target=""
    link="/home"
    linkLabel="find out more"
    backgroundColor="white"
    title="Heading"
    subtitle="Subtitle"
  >
    <Text tag="p">Text body copy description</Text>
  </BiteSize>
</div>;
```

### BiteSize with no link

```js
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
>
  <BiteSize backgroundColor="white" title="Heading" subtitle="Subtitle">
    <Text tag="p">Text body copy description</Text>
  </BiteSize>
</div>;
```
