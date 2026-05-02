import React from 'react';
import QuoteSlice from './QuoteSlice';
import { defaultData } from '../../../styleguide/data/data';

export default function QuoteSliceExample() {
  return (
    <>
      <h3>Empty slice</h3>
      <QuoteSlice />

      <h3>Basic props</h3>
      <QuoteSlice
        heading="Up to 30 characters. Lorem ipsum dolor sit amet."
        body="Body text"
        imageS={defaultData.pictures.small}
        imageM={defaultData.pictures.medium}
        imageL={defaultData.pictures.large}
        ctaUrl="http://www.google.com"
        ctaLabel="An external link"
      />

      <h3>Responsive heading size (longer text)</h3>
      <QuoteSlice
        heading="Mid-length quotes over 30 characters will slowly scale down. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        body="Body text"
        imageS={defaultData.pictures.small}
        imageM={defaultData.pictures.medium}
        imageL={defaultData.pictures.large}
        ctaUrl="http://www.google.com"
        ctaLabel="An external link"
      />

      <h3>Alternative props (no image)</h3>
      <QuoteSlice
        heading="Longer quotes of up to 500 characters will all appear at the smallest size. Lorem ipsum dolor sit amet."
        body={`Line 1,\nLine 2`}
        textColour="black"
        pageBackgroundColour="red"
        ctaUrl="/test-url"
        ctaLabel="A link"
      />
    </>
  );
}
