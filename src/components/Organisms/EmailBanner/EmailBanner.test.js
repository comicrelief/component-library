import React from 'react';
import 'jest-styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import EmailBanner from './EmailBanner';
import RichText from '../../Atoms/RichText/RichText';
import { buildEsuValidationSchema } from '../shared/emailSignup/emailSignupConfig';

const defaultData = require('../../../styleguide/data/data').defaultData;

const EmailBannerWithFormContext = (props) => {
  const validationSchema = buildEsuValidationSchema({});
  const formMethods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema)
  });

  return (
    <FormProvider {...formMethods}>
      <EmailBanner {...props} formContext={formMethods} />
    </FormProvider>
  );
};

it('Image banner renders correctly', () => {
  const imageL = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };
  const imageM = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };
  const imageS = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };

  const tree = renderWithTheme(
    <EmailBannerWithFormContext
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
      onSubmit={() => {}}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Image banner left orientation renders correctly', () => {
  const imageL = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };
  const imageM = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };
  const imageS = {
    images: defaultData.pictures.images,
    imageLow: defaultData.pictures.imageLow,
    alt: 'Background image'
  };

  const tree = renderWithTheme(
    <EmailBannerWithFormContext
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
      onSubmit={() => {}}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Text-only email widget renders correctly', () => {
  const tree = renderWithTheme(
    <EmailBannerWithFormContext
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
      onSubmit={() => {}}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
