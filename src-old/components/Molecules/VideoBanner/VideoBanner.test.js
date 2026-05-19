import React from "react";
import "jest-styled-components";

import renderWithTheme from "../../../../tests/hoc/shallowWithTheme";
import VideoBanner from "./VideoBanner";
import poster from "../../../styleguide/assets/VideoBannerPosterImage.png";

it("renders correctly", () => {
  const src =
    "https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4";

  const tree = renderWithTheme(
    <VideoBanner poster={poster} video={src} />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      width: 100%;
      height: 100%;
    }

    <video
      className="c0"
      controls={false}
      loop={false}
      muted={true}
      playsInline={true}
      poster="mock.asset"
      src="https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4"
    >
      Your browser does not support video.
    </video>
  `);
});
