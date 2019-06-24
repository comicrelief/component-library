import React from 'react';
import 'jest-styled-components';
import { renderWithTheme } from '../../../hoc/shallowWithTheme';
import Picture from './Picture';
import images from './data/images';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Picture images={images} alt="Test images" />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      width: 100%;
      display: block;
      height: 100%;
      object-fit: cover;
    }

    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet="https://www.comicrelief.com/sites/default/files/styles/50_width_image_lg_2x_/public/2019-04/join-us_v2_16-10%402x.jpg"
      />
      <source
        media="(min-width: 1024px)"
        srcSet="https://www.comicrelief.com/sites/default/files/styles/100_width_image_md/public/2019-05/vicar-of-dibley_news-article%402x.jpg"
      />
      <source
        srcSet="https://www.comicrelief.com/sites/default/files/styles/cw_small_370x290/public/2019-06/tanzania_news-article%402x.jpg"
      />
      <img
        alt="Test images"
        className="c0"
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      />
    </picture>
  `);
});
