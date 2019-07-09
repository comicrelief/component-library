import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Picture from './Picture';
import images from '../../../styleguide/data/data';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Picture images={images} alt="Test images" />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      display: block;
      width: 100%;
      height: auto;
      object-fit: none;
    }

    <img
      alt="Test images"
      className="lazyload c0"
      data-sizes="auto"
      data-srcset={
        Object {
          "ctaText": "Find out how",
          "image": "//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w",
          "images": "//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,
    //images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,
    //images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,
    //images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,
    //images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w",
          "pictures": Object {
            "large": "picture-3.jpg",
            "medium": "picture-2.jpg",
            "small": "picture-1.jpg",
          },
          "text": "When you donate to Comic Relief or Sport Relief, you’re supporting vulnerable people and communities in the UK and internationally.",
          "title": "What your money does",
        }
      }
      height="auto"
      src="image3.jpg"
      srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      width="100%"
    />
  `);
});

it('renders correctly with custom props', () => {
  const tree = renderWithTheme(
    <Picture
      images={images}
      objectFit="cover"
      width="200px"
      height="100px"
      alt="Test images"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      display: block;
      width: 200px;
      height: 100px;
      object-fit: cover;
    }

    <img
      alt="Test images"
      className="lazyload c0"
      data-sizes="auto"
      data-srcset={
        Object {
          "ctaText": "Find out how",
          "image": "//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w",
          "images": "//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,
    //images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,
    //images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,
    //images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,
    //images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w",
          "pictures": Object {
            "large": "picture-3.jpg",
            "medium": "picture-2.jpg",
            "small": "picture-1.jpg",
          },
          "text": "When you donate to Comic Relief or Sport Relief, you’re supporting vulnerable people and communities in the UK and internationally.",
          "title": "What your money does",
        }
      }
      height="100px"
      src="image3.jpg"
      srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      width="200px"
    />
  `);
});
