```js
import { External, Download, Favourite, Internal } from '../Icons/index';
<div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link href="#anchor" target="blank" type="standard">
      Link standard
    </Link>
  </div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      href="#anchor"
      target="blank"
      type="standard"
      icon={<Download colour="black" />}
    >
      Link standard icon
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
</div>;
```

## Iconography

```js
import { External, Download, Favourite, Internal, Chevron, Arrow, AtSign } from '../Icons/index';

<div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      color="red"
      mobileColour="blue"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Internal colour="white" mobileColour="red"/>}
    >
      Internal link, 'blue' with red icon on tablet and mobile
    </Link>
  </div>

  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      color="blue"
      mobileColour="black"
      href="#anchor"
      target="blank"
      type="button"
      icon={<External colour="white" />}
    >
      External link (black on mobile, blue on desktop)
    </Link>
  </div>

  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Download colour="white" />}
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
      icon={<Favourite colour="white" />}
    >
      Favourite link
    </Link>
  </div>

    <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Chevron direction="up" colour="white" />}
    >
      Chevron Up
    </Link>
  </div>

  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Chevron direction="down" colour="white" />}
    >
      Chevron Down
    </Link>
  </div>

  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Chevron direction="left" colour="white" />}
    >
      Chevron Left
    </Link>
  </div>

  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Chevron direction="right" colour="white" />}
    >
      Chevron Right
    </Link>
  </div>

  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      iconFirst
      icon={<Arrow direction="left" colour="white" />}
    >
      Arrow Left
    </Link>
  </div>

  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<AtSign />}
    >
      At Sign
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
    <div style={{ display: 'block', marginBottom: '10px' }}>
      <Link color="grey" href="/test" target="blank" type="button">
        Link as button
      </Link>
    </div>
    <Link color="transparent" href="/test" target="blank" type="button">
      Link as transparent button
    </Link>
    <div style={{ display: 'block', marginTop: '10px' }}>
      <Link color="white" href="/test" target="blank" type="button">
        White button
      </Link>
    </div>
  </div>
</div>
```
