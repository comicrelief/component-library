import 'jest-styled-components';
import React from 'react';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import DynamicGallery from './DynamicGallery';

it('renders an empty Dynamic Gallery with no options set', () => {
  const galleryEl = renderWithTheme(<DynamicGallery />).toJSON();
  expect(galleryEl).toMatchSnapshot();
});

it('handle a Dynamic Gallery with mocked gallery nodes', () => {
  const nodes = [
    {
      image: 'image1.jpg',
      title: 'Image 1',
      caption: 'Caption 1',
      body: 'Body 1'
    },
    {
      image: 'image2.jpg',
      title: 'Image 2',
      caption: 'Caption 2',
      body: 'Body 2'
    },
    {
      image: 'image3.jpg',
      title: 'Image 3',
      caption: 'Caption 3',
      body: 'Body 3'  
    }
  ]
  const galleryEl = renderWithTheme(<DynamicGallery nodes={nodes} />).toJSON();
  expect(galleryEl).toMatchSnapshot();
});
