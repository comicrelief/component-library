import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import Picture from './Picture';
import { defaultData } from '../../../styleguide/data/data';
it('renders correctly', () => {
  const tree = renderWithTheme(
    <Picture
      images={defaultData.images}
      image={defaultData.image}
      alt="Test images"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      display: block;
      width: 100%;
      height: auto;
      position: relative;
    }

    .c1 {
      width: 100%;
      height: auto;
      display: block;
      object-fit: none;
    }

    @supports not ((object-fit:cover) or (object-fit:none) or (object-fit:contain)) {
      .c0 {
        background-image: url(http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg);
        background-size: cover;
        background-position: center;
      }
    }

    <div
      className="c0 lazyload"
      height="auto"
      width="100%"
    >
      <img
        alt="Test images"
        className="c1 lazyload"
        data-lowsrc={null}
        data-sizes="auto"
        data-src="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
        data-srcset="//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w"
        height="auto"
        src="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        width="100%"
      />
    </div>
  `);
});

it('renders correctly with custom props', () => {
  const tree = renderWithTheme(
    <Picture
      images={defaultData.images}
      image={defaultData.image}
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
      position: relative;
    }

    .c1 {
      width: 200px;
      height: 100px;
      display: block;
      object-fit: cover;
    }

    @supports not ((object-fit:cover) or (object-fit:none) or (object-fit:contain)) {
      .c0 {
        background-image: url(http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg);
        background-size: cover;
        background-position: center;
      }
    }

    @supports not ((object-fit:cover) or (object-fit:contain)) {
      .c1 {
        visibility: hidden;
      }
    }

    <div
      className="c0 lazyload"
      height="100px"
      width="200px"
    >
      <img
        alt="Test images"
        className="c1 lazyload"
        data-lowsrc={null}
        data-sizes="auto"
        data-src="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
        data-srcset="//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w"
        height="100px"
        src="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
        srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        width="200px"
      />
    </div>
  `);
});
