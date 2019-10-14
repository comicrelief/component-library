import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import VideoBanner from './VideoBanner';

it('renders correctly', () => {
  const image =
    'https://www.comicrelief.com/sites/default/files/2019-10/Creativists_Logo_Colour_on%20background.png';
  const src =
    'https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4';

  const tree = renderWithTheme(
    <VideoBanner poster={image} video={src} loop autoPlay />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      width: 100%;
      background-image: url();
      background-size: 100% 100%;
      object-fit: contain;
      overflow: hidden;
    }

    <video
      autoPlay={true}
      className="c0"
      loop={true}
      muted={true}
    >
      <source
        src="https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4"
        type="video/mp4"
      />
      Your browser does not support video.
    </video>
  `);
});
