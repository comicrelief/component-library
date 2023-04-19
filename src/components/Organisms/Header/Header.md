# Comic Relief header

```js
import data from './data/data';
import Link from '../../Atoms/Link/Link';

<Header
  navItems={data}
  rotate="true"
  metaIcons={
    <>
      <Link color="green" type="button" href="/donation">
        Donate
      </Link>
    </>
  }
/>;
```

# Sport Relief header

```js
import data from './data/data';
import Link from '../../Atoms/Link/Link';

<Header
  navItems={data}
  campaign="Sport Relief"
  metaIcons={
    <>
      <Link color="green" type="button" href="/donation">
        Donate
      </Link>
    </>
  }
/>;
```

# Comic Relief header with Search

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

<Header
  navItems={data}
  rotate="true"
  metaIcons={
    <>
      <Link color="green" type="button" href="/donation">
        Donate
      </Link>

      <div>
        <Icon
          icon={searchIcon}
          title="Search"
          target="self"
          role="button"
          href="/search"
          brand="comicrelief"
          tabIndex="0"
        />
      </div>
    </>
  }
/>;
```

# Comic Relief header with Search and Shop

```js
import data from './data/data';
import Link from '../../Atoms/Link/Link';
import searchIcon from './assets/icon--search--2023.svg';
import shopIcon from './assets/icon--shop--2023.svg';
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

<Header
  navItems={data}
  rotate="true"
  metaIcons={
    <>
      <Link color="green" type="button" href="/donation">
        Donate
      </Link>

      <div>
        <Icon
          icon={searchIcon}
          title="Search"
          target="self"
          role="button"
          href="/search"
          brand="comicrelief"
          tabIndex="0"
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
        />
      </div>
    </>
  }
/>;
```
