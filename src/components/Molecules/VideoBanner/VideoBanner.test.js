import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import VideoBanner from './VideoBanner';

it('renders correctly', () => {
  const src =
    'https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4';

  const tree = renderWithTheme(<VideoBanner video={src} autoPlay />).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      width: 100%;
      background-size: 100%;
      object-fit: contain;
      overflow: hidden;
    }

    <video
      autoPlay={true}
      className="c0"
      loop={false}
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
