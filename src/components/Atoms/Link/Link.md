```js
import { External, Download, Favourite, Internal } from '../Icons/index';

<div>
  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link href="#anchor" target="blank">
      Link standard
    </Link>
  </div>
  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link
      href="#anchor"
      target="blank"
      icon={<Download colour="black" />}
    >
      Link standard icon
    </Link>
  </div>
  <div
    style={{backgroundColor:"#000", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}
  >
    <Link href="#anchor" type="standard_white">
      Link standard white
    </Link>
  </div>
</div>;
```

```js

import buttonTypes from '../../../theme/crTheme/buttonTypes';

<div>
  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link color="black" href="#anchor" target="self" type="button">
      Link as button
    </Link>
  </div>
  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link color="red" href="/test" target="self" type="button">
      Link as button
    </Link>
  </div>
  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link color="yellow" href="/test" target="blank" type="button">
      Link as button
    </Link>
  </div>


  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link color="red" href="#anchor" target="self" type="button" buttonType={buttonTypes.SECONDARY}>
      Link as button (secondary)
    </Link>
  </div>
  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link color="black" href="/test" target="self" type="button"buttonType={buttonTypes.SECONDARY}>
      Link as button (secondary)
    </Link>
  </div>
  <div style={{backgroundColor:"#222222", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link color="white" href="/test" target="blank" type="button" buttonType={buttonTypes.SECONDARY}>
      Link as button (secondary)
    </Link>
  </div>

  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link color="red" href="#anchor" target="self" type="button" buttonType={buttonTypes.TERTIARY}>
      Link as button (tertiary)
    </Link>
  </div>
  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link color="black" href="/test" target="self" type="button"buttonType={buttonTypes.TERTIARY}>
      Link as button (tertiary)
    </Link>
  </div>
  <div style={{backgroundColor:"#222222", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link color="white" href="/test" target="blank" type="button" buttonType={buttonTypes.TERTIARY}>
      Link as button (tertiary)
    </Link>
  </div>

  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>

    <div style={{ display: 'block', marginTop: '10px' }}>
      <Link color="red" href="/test" target="blank" type="button" fullWidth>
        Link as full-width red button
      </Link>
    </div>
  </div>
</div>
```


## Iconography
```js
import { External, Download, Favourite, Internal, Chevron, Arrow, AtSign } from '../Icons/index';

<div>
  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
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

  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link
      color="blue"
      mobileColour="black"
      href="#anchor"
      target="blank"
      type="button"
      icon={<External colour="white" mobileColour="blue" />}
    >
      External link (black on mobile, blue on desktop)
    </Link>
  </div>

  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Download colour="white" mobileColour="blue" />}
    >
      Download link (blue mobile-tablet icon, white desktop icon)
    </Link>
  </div>

  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Favourite colour="white" mobileColour="blue" />}
    >
      Favourite link (blue mobile-tablet icon, white desktop icon)
    </Link>
  </div>

    <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Chevron direction="up" colour="white" mobileColour="blue" />}
    >
      Chevron Up (blue mobile-tablet icon, white desktop icon)
    </Link>
  </div>

  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Chevron direction="down" colour="white" mobileColour="blue" />}
    >
      Chevron Down (blue mobile-tablet icon, white desktop icon)
    </Link>
  </div>

  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Chevron direction="left" colour="white" mobileColour="blue" />}
    >
      Chevron Left (blue mobile-tablet icon, white desktop icon)
    </Link>
  </div>

  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<Chevron direction="right" colour="white" mobileColour="blue" />}
    >
      Chevron Right (blue mobile-tablet icon, white desktop icon)
    </Link>
  </div>

  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      iconFirst
      icon={<Arrow direction="left" colour="white" mobileColour="blue" />}
    >
      Arrow Left (blue mobile-tablet icon, white desktop icon)
    </Link>
  </div>

  <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
    <Link
      color="red"
      href="#anchor"
      target="blank"
      type="button"
      icon={<AtSign colour="white" mobileColour="blue" />}
    >
      At Sign (blue mobile-tablet icon, white desktop icon)
    </Link>
  </div>
</div>;
```
