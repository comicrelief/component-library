import React from 'react';
import styled from 'styled-components';
import AmbientVideo from './AmbientVideo';
import { defaultData } from '../../../data/data';
import video480 from './big-buck-bunny-480p-30sec.mp4';
import video1080 from './big-buck-bunny-1080p-30sec.mp4';
import videoMobile from './thetestdatacom_480p_example.mp4';

const ExampleContainer = styled.div`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || '600px'};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || '16 / 9'};
  overflow: hidden;
`;

export default function AmbientVideoExample() {
  return (
    <>
      <h3>A muted, full-width ambient video component using the HTML5 video element. Ideal for background or decorative video.</h3>

      <h3>Default (loop, no controls)</h3>
      <ExampleContainer>
        <AmbientVideo src={video480} poster={defaultData.image} />
      </ExampleContainer>

      <h3>With full controls</h3>
      <ExampleContainer>
        <AmbientVideo src={video480} poster={defaultData.image} showFullControls showPlayPause={false} />
      </ExampleContainer>

      <h3>With play/pause button (hover to reveal)</h3>
      <ExampleContainer>
        <AmbientVideo src={video480} poster={defaultData.image} showPlayPause />
      </ExampleContainer>

      <h3>Play once (no loop)</h3>
      <ExampleContainer>
        <AmbientVideo src={video480} poster={defaultData.image} loop={false} />
      </ExampleContainer>

      <h3>Responsive: 1080p above M breakpoint (740px), 480p below. Resize the browser to see the switch</h3>
      <ExampleContainer $maxWidth="800px">
        <AmbientVideo src={video1080} srcMobile={videoMobile} poster={defaultData.image} />
      </ExampleContainer>
    </>
  );
}
