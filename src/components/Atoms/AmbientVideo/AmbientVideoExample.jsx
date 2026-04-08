import React from 'react';
import AmbientVideo from './AmbientVideo';
import { defaultData } from '../../../styleguide/data/data';
import video480 from './big-buck-bunny-480p-30sec.mp4';
import video1080 from './big-buck-bunny-1080p-30sec.mp4';
import videoMobile from './thetestdatacom_480p_example.mp4';

export default function AmbientVideoExample() {
  return (
    <>
      <h3>Default (loop, no controls)</h3>
      <div style={{ width: '100%', maxWidth: '600px', aspectRatio: '16/9', overflow: 'hidden' }}>
        <AmbientVideo src={video480} poster={defaultData.image} />
      </div>

      <h3>With full controls</h3>
      <div style={{ width: '100%', maxWidth: '600px', aspectRatio: '16/9', overflow: 'hidden' }}>
        <AmbientVideo src={video480} poster={defaultData.image} showFullControls showPlayPause={false} />
      </div>

      <h3>With play/pause button (hover to reveal)</h3>
      <div style={{ width: '100%', maxWidth: '600px', aspectRatio: '16/9', overflow: 'hidden' }}>
        <AmbientVideo src={video480} poster={defaultData.image} showPlayPause />
      </div>

      <h3>Play once (no loop)</h3>
      <div style={{ width: '100%', maxWidth: '600px', aspectRatio: '16/9', overflow: 'hidden' }}>
        <AmbientVideo src={video480} poster={defaultData.image} loop={false} />
      </div>

      <h3>Responsive: 1080p above M breakpoint (740px), 480p below</h3>
      <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '16/9', overflow: 'hidden' }}>
        <AmbientVideo src={video1080} srcMobile={videoMobile} poster={defaultData.image} />
      </div>
    </>
  );
}
