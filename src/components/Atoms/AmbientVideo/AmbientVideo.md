# AmbientVideo

A muted, full-width ambient video component using the HTML5 video element. Ideal for background or decorative video.

Default (loop, no controls).

```js
const video480 = require('./big-buck-bunny-480p-30sec.mp4');

<div style={{ width: '100%', maxWidth: '600px', aspectRatio: '16/9', overflow: 'hidden' }}>
  <AmbientVideo src={video480} />
</div>
```

With controls.

```js
const video480 = require('./big-buck-bunny-480p-30sec.mp4');

<div style={{ width: '100%', maxWidth: '600px', aspectRatio: '16/9', overflow: 'hidden' }}>
  <AmbientVideo src={video480} showControls />
</div>
```

Play once (no loop).

```js
const video480 = require('./big-buck-bunny-480p-30sec.mp4');

<div style={{ width: '100%', maxWidth: '600px', aspectRatio: '16/9', overflow: 'hidden' }}>
  <AmbientVideo src={video480} loop={false} />
</div>
```

1080p video.

```js
const video1080 = require('./big-buck-bunny-1080p-30sec.mp4');

<div style={{ width: '100%', maxWidth: '600px', aspectRatio: '16/9', overflow: 'hidden' }}>
  <AmbientVideo src={video1080} />
</div>
```

Responsive: 1080p above M breakpoint (740px), 480p below. Resize the browser to see the switch.

```js
const video480 = require('./Jellyfish_720_10s_2MB.mp4');
const video1080 = require('./big-buck-bunny-1080p-30sec.mp4');

<div style={{ width: '100%', maxWidth: '800px', aspectRatio: '16/9', overflow: 'hidden' }}>
  <AmbientVideo src={video1080} srcMobile={video480} />
</div>
```
