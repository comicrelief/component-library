import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import PartnerLink from './PartnerLink';
import Picture from '../../Atoms/Picture/Picture';
import { defaultData } from '../../../styleguide/data/data';
it('renders correctly', () => {
  const tree = renderWithTheme(
    <PartnerLink link="https://www.comicrelief.com">
      <Picture
        alt="test Image"
        imageLow={defaultData.imageLow}
        images={defaultData.images}
      />
    </PartnerLink>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c4 {
      font-size: 0.875rem;
      line-height: 0.875rem;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      text-transform: inherit;
      color: #FFFFFF;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: normal;
      -webkit-letter-spacing: 0;
      -moz-letter-spacing: 0;
      -ms-letter-spacing: 0;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c2 {
      display: block;
      width: 100%;
      height: auto;
      position: relative;
    }

    .c3 {
      width: 100%;
      height: auto;
      display: block;
      object-fit: none;
    }

    .c0 {
      position: relative;
      display: inline;
      color: #000000;
      font-weight: normal;
    }

    .c0:hover,
    .c0:focus {
      color: #000000;
      -webkit-text-decoration: none;
      text-decoration: none;
    }

    .c6 {
      border: 0;
      -webkit-clip: rect(0 0 0 0);
      clip: rect(0 0 0 0);
      -webkit-clip-path: inset(50%);
      clip-path: inset(50%);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
      height: auto;
    }

    .c1 {
      display: block;
      position: relative;
      padding: 0;
      border: none;
    }

    .c1:hover,
    .c1:focus {
      border: none;
    }

    .c1:hover .c5,
    .c1:focus .c5 {
      overflow: inherit;
      -webkit-clip-path: none;
      clip-path: none;
      margin: 0;
      text-align: center;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      -webkit-clip: auto;
      clip: auto;
      top: 50%;
      left: 0;
      width: 100%;
      z-index: 2;
    }

    .c1:hover::after,
    .c1:focus::after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #E52630;
    }

    @media (min-width:740px) {
      .c4 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width:1024px) {
      .c4 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (min-width:740px) {
      .c6 {
        font-size: 1.125rem;
      }
    }

    <a
      className="c0 c1"
      color="red"
      href="https://www.comicrelief.com"
      target="_self"
      type="standard"
    >
      <div
        className="c2 lazyload"
        height="auto"
        width="100%"
      >
        <img
          alt="test Image"
          className="c3 lazyload"
          data-lowsrc="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=100&h=50&q=100"
          data-sizes="auto"
          data-src={null}
          data-srcset="//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w"
          height="auto"
          src={null}
          srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          width="100%"
        />
      </div>
      <span
        className="c4 c5 c6"
        color="white"
        size="xxs"
      >
        Find out more
      </span>
    </a>
  `);
});
