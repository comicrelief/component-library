Default Video Banner (autoplay, no loop, no poster re-show)
```js
import poster from '../../../styleguide/assets/VideoBannerPosterImage.png';
const src =
  'https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4';

<VideoBanner poster={poster} video={src} />;
```
Looping Video Banner With Controls (autoplay, loop)
```js
import poster from '../../../styleguide/assets/VideoBannerPosterImage.png';
const src =
  'https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4';

<VideoBanner poster={poster} video={src} loop={true} controls={true} autoPlay={true}
 />;
```

Non-autoplay Video Banner (reshows poster image after playing)
```js
import poster from '../../../styleguide/assets/VideoBannerPosterImage.png';
const src =
  'https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4';

<VideoBanner poster={poster} video={src} showPosterAfterPlaying={true} />;
```
