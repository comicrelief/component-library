# Header 2026 - Comic Relief

```js
import data from './data/data';
import Link from '../../Atoms/Link/Link';

<Header2026
  navItems={data}
  rotate="true"
  donateButton={
    <>
      <Link color="red" type="button" href="/donation">
        Donate
      </Link>
    </>
  }
/>;
```

# Header 2026 - Sport Relief

```js
import data from './data/data';
import Link from '../../Atoms/Link/Link';

<Header2026
  navItems={data}
  campaign="Sport Relief"
  donateButton={
    <>
      <Link color="red" type="button" href="/donation">
        Donate
      </Link>
    </>
  }
/>;
```

# Header 2026 - Pride

```js
import data from './data/data';
import Link from '../../Atoms/Link/Link';

<Header2026
  navItems={data}
  campaign="Pride"
  donateButton={
    <>
      <Link color="red" type="button" href="/donation">
        Donate
      </Link>
    </>
  }
/>;
```

# Header 2026 - Comic Relief with Search

```js
import data from './data/data';
import Link from '../../Atoms/Link/Link';
import searchIcon from './assets/icon--search--2023.svg';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import RichText from '../../Atoms/RichText/RichText';

const title = 'Stay in the know!';
const topCopy = (
  <RichText
    markup={`<p>Get regular email updates and info on what we're up to!</p>`}
  />
);
const privacyCopy = (
  <RichText
    markup={`<p>Our <a class="link link--white inline" href="/privacy-notice">Privacy Policy</a> describes how we handle and protect your information.<br><br>If you are under 18, please make sure you have your parents’ permission before providing us with any personal details.</p>`}
  />
);
const successCopy = (
  <RichText
    markup={`<p>Thanks! Your first email will be with you shortly</p>`}
  />
);

initialState = { isSuccess: false };
const [success, setSuccess] = React.useState(false);

<Header2026
  navItems={data}
  rotate="true"
  donateButton={
    <>
      <Link color="red" type="button" href="/donation">
        Donate
      </Link>
    </>
  }
  metaIcons={
    <>
      <div>
        <Icon
          icon={searchIcon}
          title="Search"
          target="self"
          role="button"
          href="/search"
          brand="comicrelief"
          tabIndex="0"
          id="search"
          isHeader
        />
      </div>
    </>
  }
/>;
```

# Header 2026 - Comic Relief full header #1

```js
import data from './data/data';
import Link from '../../Atoms/Link/Link';
import searchIcon from './assets/icon--search--2023.svg';
import shopIcon from './assets/icon--shop--2023.svg';
import payinIcon from './assets/PayIn.svg';
import esuIcon from './assets/Post.svg';

import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import RichText from '../../Atoms/RichText/RichText';

const title = 'Stay in the know!';
const topCopy = (
  <RichText
    markup={`<p>Get regular email updates and info on what we're up to!</p>`}
  />
);
const privacyCopy = (
  <RichText
    markup={`<p>Our <a class="link link--white inline" href="/privacy-notice">Privacy Policy</a> describes how we handle and protect your information.<br><br>If you are under 18, please make sure you have your parents’ permission before providing us with any personal details.</p>`}
  />
);
const successCopy = (
  <RichText
    markup={`<p>Thanks! Your first email will be with you shortly</p>`}
  />
);

initialState = { isSuccess: false };
const [success, setSuccess] = React.useState(false);

<>
<Header2026
  navItems={data}
  rotate="true"
    donateButton={
    <>
      <Link color="red" type="button" href="/donation">
        Donate
      </Link>
    </>
  }
  metaIcons={
    <>
      <div>
        <Icon
          icon={esuIcon}
          title="Newsletter"
          target="_blank"
          role="button"
          href="#"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="esu"
        />
      </div>
      <div>
        <Icon
          icon={payinIcon}
          title="Pay in"
          target="_blank"
          role="button"
          href="https://donation.comicrelief.com/?cartId=rnd23-fundraisingpayin"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="payin"
        />
      </div>

      <div>
        <Icon
          icon={shopIcon}
          title="Shop"
          target="_blank"
          role="button"
          href="https://shop.comicrelief.com"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="shop"
        />
      </div>

      <div>
        <Icon
          icon={searchIcon}
          title="Search"
          target="self"
          role="button"
          href="/search"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="search"
        />
      </div>
    </>
  }
/>
<div style={{height: "1000px", backgroundColor: "turquoise", width:"100%"}}>
  <img style={{width: "100%", maxWidth:"1440px", margin: "0 auto", display: "block"}} src="https://images.ctfassets.net/zsfivwzfgl3t/ecqrPx7BesE3JsYR2ns0E/a374276ba6d8024b9cd7c6d27c911303/Manchester_Marathon.jpeg"/>
</div>
</>;
```

# Header 2026 - Comic Relief full header #2

```js
import data from './data/data-extended';
import Link from '../../Atoms/Link/Link';
import searchIcon from './assets/icon--search--2023.svg';
import shopIcon from './assets/icon--shop--2023.svg';
import payinIcon from './assets/PayIn.svg';
import esuIcon from './assets/Post.svg';

import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import RichText from '../../Atoms/RichText/RichText';

const title = 'Stay in the know!';
const topCopy = (
  <RichText
    markup={`<p>Get regular email updates and info on what we're up to!</p>`}
  />
);
const privacyCopy = (
  <RichText
    markup={`<p>Our <a class="link link--white inline" href="/privacy-notice">Privacy Policy</a> describes how we handle and protect your information.<br><br>If you are under 18, please make sure you have your parents’ permission before providing us with any personal details.</p>`}
  />
);
const successCopy = (
  <RichText
    markup={`<p>Thanks! Your first email will be with you shortly</p>`}
  />
);

initialState = { isSuccess: false };
const [success, setSuccess] = React.useState(false);

<>
<Header2026
  navItems={data}
  rotate="true"
    donateButton={
    <>
      <Link color="red" type="button" href="/donation">
        Donate
      </Link>
    </>
  }
  metaIcons={
    <>
      <div>
        <Icon
          icon={esuIcon}
          title="Newsletter"
          target="_blank"
          role="button"
          href="#"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="esu"
        />
      </div>
      <div>
        <Icon
          icon={payinIcon}
          title="Pay in"
          target="_blank"
          role="button"
          href="https://donation.comicrelief.com/?cartId=rnd23-fundraisingpayin"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="payin"
        />
      </div>

      <div>
        <Icon
          icon={shopIcon}
          title="Shop"
          target="_blank"
          role="button"
          href="https://shop.comicrelief.com"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="shop"
        />
      </div>

      <div>
        <Icon
          icon={searchIcon}
          title="Search"
          target="self"
          role="button"
          href="/search"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="search"
        />
      </div>
    </>
  }
/>
<div style={{height: "1000px", backgroundColor: "turquoise", width:"100%"}}>
  <img style={{width: "100%", maxWidth:"1440px", margin: "0 auto", display: "block"}} src="https://images.ctfassets.net/zsfivwzfgl3t/ecqrPx7BesE3JsYR2ns0E/a374276ba6d8024b9cd7c6d27c911303/Manchester_Marathon.jpeg"/>
</div>
</>;
```

# Header 2026 - Comic Relief full header #3
# nav items as per 19/11/24 (default 60 character limit)

```js
import data from './data/data-live';
import Link from '../../Atoms/Link/Link';
import searchIcon from './assets/icon--search--2023.svg';
import shopIcon from './assets/icon--shop--2023.svg';
import payinIcon from './assets/PayIn.svg';
import esuIcon from './assets/Post.svg';

import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import RichText from '../../Atoms/RichText/RichText';

const title = 'Stay in the know!';
const topCopy = (
  <RichText
    markup={`<p>Get regular email updates and info on what we're up to!</p>`}
  />
);
const privacyCopy = (
  <RichText
    markup={`<p>Our <a class="link link--white inline" href="/privacy-notice">Privacy Policy</a> describes how we handle and protect your information.<br><br>If you are under 18, please make sure you have your parents’ permission before providing us with any personal details.</p>`}
  />
);
const successCopy = (
  <RichText
    markup={`<p>Thanks! Your first email will be with you shortly</p>`}
  />
);

initialState = { isSuccess: false };
const [success, setSuccess] = React.useState(false);

<>
<Header2026
  navItems={data}
  rotate="true"
    donateButton={
    <>
      <Link color="red" type="button" href="/donation">
        Donate
      </Link>
    </>
  }
  metaIcons={
    <>
      <div>
        <Icon
          icon={esuIcon}
          title="Newsletter"
          target="_blank"
          role="button"
          href="#"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="esu"
        />
      </div>
      <div>
        <Icon
          icon={payinIcon}
          title="Pay in"
          target="_blank"
          role="button"
          href="https://donation.comicrelief.com/?cartId=rnd23-fundraisingpayin"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="payin"
        />
      </div>

      <div>
        <Icon
          icon={shopIcon}
          title="Shop"
          target="_blank"
          role="button"
          href="https://shop.comicrelief.com"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="shop"
        />
      </div>

      <div>
        <Icon
          icon={searchIcon}
          title="Search"
          target="self"
          role="button"
          href="/search"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="search"
        />
      </div>
    </>
  }
/>
<div style={{height: "1000px", backgroundColor: "turquoise", width:"100%"}}>
  <img style={{width: "100%", maxWidth:"1440px", margin: "0 auto", display: "block"}} src="https://images.ctfassets.net/zsfivwzfgl3t/ecqrPx7BesE3JsYR2ns0E/a374276ba6d8024b9cd7c6d27c911303/Manchester_Marathon.jpeg"/>
</div>
</>;
```

# Header 2026 - Comic Relief full header #3
# nav items as per 19/11/24 (overridden 50 character limit)

```js
import data from './data/data-live';
import Link from '../../Atoms/Link/Link';
import searchIcon from './assets/icon--search--2023.svg';
import shopIcon from './assets/icon--shop--2023.svg';
import payinIcon from './assets/PayIn.svg';
import esuIcon from './assets/Post.svg';

import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import RichText from '../../Atoms/RichText/RichText';

const title = 'Stay in the know!';
const topCopy = (
  <RichText
    markup={`<p>Get regular email updates and info on what we're up to!</p>`}
  />
);
const privacyCopy = (
  <RichText
    markup={`<p>Our <a class="link link--white inline" href="/privacy-notice">Privacy Policy</a> describes how we handle and protect your information.<br><br>If you are under 18, please make sure you have your parents’ permission before providing us with any personal details.</p>`}
  />
);
const successCopy = (
  <RichText
    markup={`<p>Thanks! Your first email will be with you shortly</p>`}
  />
);

initialState = { isSuccess: false };
const [success, setSuccess] = React.useState(false);

<>
<Header2026
  showBoxShadow="true"
  characterLimit={50}
  navItems={data}
  rotate="true"
    donateButton={
    <>
      <Link color="red" type="button" href="/donation">
        Donate
      </Link>
    </>
  }
  metaIcons={
    <>
      <div>
        <Icon
          icon={esuIcon}
          title="Newsletter"
          target="_blank"
          role="button"
          href="#"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="esu"
        />
      </div>
      <div>
        <Icon
          icon={payinIcon}
          title="Pay in"
          target="_blank"
          role="button"
          href="https://donation.comicrelief.com/?cartId=rnd23-fundraisingpayin"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="payin"
        />
      </div>

      <div>
        <Icon
          icon={shopIcon}
          title="Shop"
          target="_blank"
          role="button"
          href="https://shop.comicrelief.com"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="shop"
        />
      </div>

      <div>
        <Icon
          icon={searchIcon}
          title="Search"
          target="self"
          role="button"
          href="/search"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="search"
        />
      </div>
    </>
  }
/>
<div style={{height: "1000px", backgroundColor: "turquoise", width:"100%"}}>
  <img style={{width: "100%", maxWidth:"1440px", margin: "0 auto", display: "block"}} src="https://images.ctfassets.net/zsfivwzfgl3t/ecqrPx7BesE3JsYR2ns0E/a374276ba6d8024b9cd7c6d27c911303/Manchester_Marathon.jpeg"/>
</div>
</>;
```

# Header 2026 - Comic Relief minimal header

```js
import data from './data/data-live--minimal';
import Link from '../../Atoms/Link/Link';
import searchIcon from './assets/icon--search--2023.svg';
import shopIcon from './assets/icon--shop--2023.svg';
import payinIcon from './assets/PayIn.svg';
import esuIcon from './assets/Post.svg';

import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import RichText from '../../Atoms/RichText/RichText';

const title = 'Stay in the know!';
const topCopy = (
  <RichText
    markup={`<p>Get regular email updates and info on what we're up to!</p>`}
  />
);
const privacyCopy = (
  <RichText
    markup={`<p>Our <a class="link link--white inline" href="/privacy-notice">Privacy Policy</a> describes how we handle and protect your information.<br><br>If you are under 18, please make sure you have your parents’ permission before providing us with any personal details.</p>`}
  />
);
const successCopy = (
  <RichText
    markup={`<p>Thanks! Your first email will be with you shortly</p>`}
  />
);

initialState = { isSuccess: false };
const [success, setSuccess] = React.useState(false);

<>
<Header2026
  showBoxShadow="true"
  characterLimit={50}
  navItems={data}
  rotate="true"
    donateButton={
    <>
      <Link color="red" type="button" href="/donation">
        Donate
      </Link>
    </>
  }
  metaIcons={
    <>
      <div>
        <Icon
          icon={esuIcon}
          title="Newsletter"
          target="_blank"
          role="button"
          href="#"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="esu"
        />
      </div>
      <div>
        <Icon
          icon={payinIcon}
          title="Pay in"
          target="_blank"
          role="button"
          href="https://donation.comicrelief.com/?cartId=rnd23-fundraisingpayin"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="payin"
        />
      </div>

      <div>
        <Icon
          icon={shopIcon}
          title="Shop"
          target="_blank"
          role="button"
          href="https://shop.comicrelief.com"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="shop"
        />
      </div>

      <div>
        <Icon
          icon={searchIcon}
          title="Search"
          target="self"
          role="button"
          href="/search"
          brand="comicrelief"
          tabIndex="0"
          isHeader
          id="search"
        />
      </div>
    </>
  }
/>
<div style={{height: "1000px", backgroundColor: "turquoise", width:"100%"}}>
  <img style={{width: "100%", maxWidth:"1440px", margin: "0 auto", display: "block"}} src="https://images.ctfassets.net/zsfivwzfgl3t/ecqrPx7BesE3JsYR2ns0E/a374276ba6d8024b9cd7c6d27c911303/Manchester_Marathon.jpeg"/>
</div>
</>;
```
