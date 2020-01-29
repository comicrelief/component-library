```js
<div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link href="#anchor" target="blank" type="standard">
      Link standard
    </Link>
  </div>
  <div
    style={{
      display: 'block',
      padding: '10px',
      marginBottom: '10px',
      backgroundColor: '#000'
    }}
  >
    <Link href="#anchor" type="standard_white">
      Link standard white
    </Link>
  </div>
</div>
```

## Iconography

```js
import { External, Download, Favourite, Internal } from '../Icons/index';

<div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Internal style={{ marginLeft: '10px' }} colour="#ffffff" />}
    >
      Internal link
    </Link>
  </div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<External style={{ marginLeft: '10px' }} colour="#ffffff" />}
    >
      External link
    </Link>
  </div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Download style={{ marginLeft: '10px' }} colour="#ffffff" />}
    >
      Download link
    </Link>
  </div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Favourite style={{ marginLeft: '10px' }} colour="#ffffff" />}
    >
      Favourite link
    </Link>
  </div>
</div>;
```

```js
<div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link color="black" href="#anchor" target="self" type="button">
      Link as button
    </Link>
  </div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link color="red" href="/test" target="self" type="button">
      Link as button
    </Link>
  </div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link color="grey" href="/test" target="blank" type="button">
      Link as button
    </Link>
  </div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link color="yellow" href="/test" target="blank" type="button">
      Link as button
    </Link>
  </div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link color="yellow_light" href="/test" target="blank" type="button">
      Link as button
    </Link>
  </div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link color="yellow_dark" href="/test" target="blank" type="button">
      Link as button
    </Link>
  </div>
  <div
    style={{
      display: 'block',
      padding: '10px',
      marginBottom: '10px',
      backgroundColor: '#22CFD8'
    }}
  >
    <Link color="transparent" href="/test" target="blank" type="button">
      Link as transparent button
    </Link>
  </div>
</div>
```
