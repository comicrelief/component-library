import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import PictureOrVideo from './PictureOrVideo';

const defaultData = require('../../../styleguide/data/data').defaultData;

it('renders Picture with flat props correctly', () => {
  const tree = renderWithTheme(
    <PictureOrVideo
      images={defaultData.images}
      imageLow={defaultData.imageLow}
      image={defaultData.image}
      alt="Image alt text"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders Picture with image object correctly', () => {
  const imageObj = {
    images: defaultData.images,
    imageLow: defaultData.imageLow,
    image: defaultData.image,
    alt: 'Background image'
  };

  const tree = renderWithTheme(
    <PictureOrVideo image={imageObj} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders AmbientVideo when video props are provided correctly', () => {
  const tree = renderWithTheme(
    <PictureOrVideo
      images={defaultData.images}
      imageLow={defaultData.imageLow}
      videoDesktop="https://example.com/video-desktop.mp4"
      videoMobile="https://example.com/video-mobile.mp4"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders with asBackground correctly', () => {
  const tree = renderWithTheme(
    <PictureOrVideo
      images={defaultData.images}
      imageLow={defaultData.imageLow}
      image={defaultData.image}
      alt="Background image"
      asBackground
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
