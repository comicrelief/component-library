import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import VideoBanner from './VideoBanner';
import placeholder from '../../../styleguide/assets/poster.png';

it('renders correctly', () => {
  const src =
    'https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4';

  const tree = renderWithTheme(
    <VideoBanner placeholder={placeholder} video={src} autoPlay />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      width: 100%;
      background-image: url(mock.asset);
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      object-fit: contain;
    }

    <video
      autoPlay={true}
      className="c0"
      loop={false}
      muted={true}
      placeholder="mock.asset"
      poster="data:image/gif,AAAA"
    >
      <source
        src="https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4"
        type="video/mp4"
      />
      Your browser does not support video.
    </video>
  `);
});
