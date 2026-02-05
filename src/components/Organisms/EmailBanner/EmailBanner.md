# EmailBanner

## Image banner (widget right), custom padding + background

```js
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RichText from '../../Atoms/RichText/RichText';
import EmailBanner from './EmailBanner';
import { buildEsuValidationSchema } from '../shared/emailSignup/emailSignupConfig';

const desktopPictures = require('../../../styleguide/data/data').defaultData;
const mobilePictures = require('../../../styleguide/data/data').mobileImages;

const imageL = {
  images: desktopPictures.images,
  imageLow: desktopPictures.imageLow,
  alt: 'Background image'
};

const imageM = {
  images: desktopPictures.images,
  imageLow: desktopPictures.imageLow,
  alt: 'Background image'
};

const imageS = {
  images: mobilePictures.images,
  imageLow: mobilePictures.imageLow,
  alt: 'Background image'
};

const validationSchema = buildEsuValidationSchema({});
const formMethods = useForm({
  mode: 'onBlur',
  resolver: yupResolver(validationSchema)
});

const handleSubscribe = (data) => {
  console.log(data);
};

<FormProvider {...formMethods}>
  <EmailBanner
    pageBackgroundColour="grey_light"
    paddingAbove="0rem"
    paddingBelow="2rem"
    orientation="right"
    imageL={imageL}
    imageM={imageM}
    imageS={imageS}
    title="Stay in the know!"
    bodyCopy={<RichText markup="<p>Sign up for exclusive news, stories and updates about everything Comic Relief.</p>" />}
    privacyCopy={<RichText markup='<p>By agreeing to subscribe to our emails and clicking the button to sign up, you are consenting to the terms of our <a href="/privacy-notice">Privacy Policy</a>. You can unsubscribe at any time.</p>' />}
    successCopy={<RichText markup="<p>Thanks! Your first email will be with you shortly.</p>" />}
    ctaText="Sign up"
    formContext={formMethods}
    onSubmit={handleSubscribe}
  />
</FormProvider>
```

## Image banner (widget left)

```js
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RichText from '../../Atoms/RichText/RichText';
import EmailBanner from './EmailBanner';
import { buildEsuValidationSchema } from '../shared/emailSignup/emailSignupConfig';

const desktopPictures = require('../../../styleguide/data/data').defaultData;
const mobilePictures = require('../../../styleguide/data/data').mobileImages;

const imageL = {
  images: desktopPictures.images,
  imageLow: desktopPictures.imageLow,
  alt: 'Background image'
};

const imageM = {
  images: desktopPictures.images,
  imageLow: desktopPictures.imageLow,
  alt: 'Background image'
};

const imageS = {
  images: mobilePictures.images,
  imageLow: mobilePictures.imageLow,
  alt: 'Background image'
};

const validationSchema = buildEsuValidationSchema({});
const formMethods = useForm({
  mode: 'onBlur',
  resolver: yupResolver(validationSchema)
});

const handleSubscribe = (data) => {
  console.log(data);
};

<FormProvider {...formMethods}>
  <EmailBanner
    pageBackgroundColour="grey_light"
    paddingAbove="2rem"
    paddingBelow="2rem"
    orientation="left"
    imageL={imageL}
    imageM={imageM}
    imageS={imageS}
    title="Stay in the know!"
    bodyCopy={<RichText markup="<p>Sign up for exclusive news, stories and updates about everything Comic Relief.</p>" />}
    privacyCopy={<RichText markup='<p>By agreeing to subscribe to our emails and clicking the button to sign up, you are consenting to the terms of our <a href="/privacy-notice">Privacy Policy</a>. You can unsubscribe at any time.</p>' />}
    successCopy={<RichText markup="<p>Thanks! Your first email will be with you shortly.</p>" />}
    ctaText="Sign up"
    formContext={formMethods}
    onSubmit={handleSubscribe}
  />
</FormProvider>
```

## Text-only widget (no image), custom widget background + text colour

```js
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RichText from '../../Atoms/RichText/RichText';
import EmailBanner from './EmailBanner';
import { buildEsuValidationSchema } from '../shared/emailSignup/emailSignupConfig';

const validationSchema = buildEsuValidationSchema({});
const formMethods = useForm({
  mode: 'onBlur',
  resolver: yupResolver(validationSchema)
});

const handleSubscribe = (data) => {
  console.log(data);
};

<FormProvider {...formMethods}>
  <EmailBanner
    emailWidgetIsTextOnly
    pageBackgroundColour="rnd_25_glitzy_grape"
    componentBackgroundColour="deep_violet_dark"
    paddingAbove="2rem"
    paddingBelow="2rem"
    orientation="right"
    title="Stay in the know!"
    bodyCopy={<RichText markup="<p>Sign up for exclusive news, stories and updates about everything Comic Relief.</p>" />}
    privacyCopy={<RichText markup='<p>By agreeing to subscribe to our emails and clicking the button to sign up, you are consenting to the terms of our <a href="/privacy-notice">Privacy Policy</a>. You can unsubscribe at any time.</p>' />}
    successCopy={<RichText markup="<p>Thanks! Your first email will be with you shortly.</p>" />}
    ctaText="Sign up"
    formContext={formMethods}
    onSubmit={handleSubscribe}
  />
</FormProvider>
```

## Text-only widget (no image), standard colours

```js
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RichText from '../../Atoms/RichText/RichText';
import EmailBanner from './EmailBanner';
import { buildEsuValidationSchema } from '../shared/emailSignup/emailSignupConfig';

const validationSchema = buildEsuValidationSchema({});
const formMethods = useForm({
  mode: 'onBlur',
  resolver: yupResolver(validationSchema)
});

const handleSubscribe = (data) => {
  console.log(data);
};

<FormProvider {...formMethods}>
  <EmailBanner
    emailWidgetIsTextOnly
    pageBackgroundColour="grey_light"
    componentBackgroundColour="white"
    paddingAbove="2rem"
    paddingBelow="2rem"
    orientation="right"
    title="Stay in the know!"
    bodyCopy={<RichText markup="<p>Sign up for exclusive news, stories and updates about everything Comic Relief.</p>" />}
    privacyCopy={<RichText markup='<p>By agreeing to subscribe to our emails and clicking the button to sign up, you are consenting to the terms of our <a href="/privacy-notice">Privacy Policy</a>. You can unsubscribe at any time.</p>' />}
    successCopy={<RichText markup="<p>Thanks! Your first email will be with you shortly.</p>" />}
    ctaText="Sign up"
    formContext={formMethods}
    onSubmit={handleSubscribe}
  />
</FormProvider>
```
