import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Picture from './Picture';
import images from './data/pictures';

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

    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet="src/components/Atoms/Picture/assets/picture-3.jpg"
      />
      <source
        media="(min-width: 1024px)"
        srcSet="src/components/Atoms/Picture/assets/picture-2.jpg"
      />
      <source
        srcSet="src/components/Atoms/Picture/assets/picture-1.jpg"
      />
      <img
        alt="Test images"
        className="c0"
        height="auto"
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        width="100%"
      />
    </picture>
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

        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="src/components/Atoms/Picture/assets/picture-3.jpg"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="src/components/Atoms/Picture/assets/picture-2.jpg"
          />
          <source
            srcSet="src/components/Atoms/Picture/assets/picture-1.jpg"
          />
          <img
            alt="Test images"
            className="c0"
            height="100px"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            width="200px"
          />
        </picture>
    `);
});
