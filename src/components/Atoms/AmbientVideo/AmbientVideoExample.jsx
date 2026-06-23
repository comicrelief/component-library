import React from 'react';
import styled from 'styled-components';
import AmbientVideo from './AmbientVideo';

import { defaultData } from '../../../data/data';
import video480_30sec from './big-buck-bunny-480p-30sec.mp4';
import video480 from './thetestdatacom_480p_example.mp4';
import video1080 from './big-buck-bunny-1080p-30sec.mp4';

const ExampleContainer = styled.div`
  margin: 0 0 35px;
  border: 1px solid lightgrey;
`;

const ExampleWrapper = styled.div`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || '600px'};
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || '16 / 9'};
  overflow: hidden;
`;

export default function AmbientVideoExample() {
  return (
    <>
      <h3>A muted, full-width ambient video component using the HTML5 video element. Ideal for background or decorative video.</h3>

      <ExampleContainer>
        <h3>Default (loop, no controls)</h3>
        <ExampleWrapper>
          <AmbientVideo src={video480_30sec} poster={defaultData.image} />
        </ExampleWrapper>
      </ExampleContainer>

      <ExampleContainer>
        <h3>With full controls</h3>
        <ExampleWrapper>
          <AmbientVideo src={video480_30sec} poster={defaultData.image} showFullControls showPlayPause={false} />
        </ExampleWrapper>
      </ExampleContainer>

      <ExampleContainer>
        <h3>With play/pause button (hover to reveal)</h3>
        <ExampleWrapper>
          <AmbientVideo src={video480_30sec} poster={defaultData.image} showPlayPause />
        </ExampleWrapper>
      </ExampleContainer>

      <ExampleContainer>
        <h3>Play once (no loop)</h3>
        <ExampleWrapper>
          <AmbientVideo src={video480_30sec} poster={defaultData.image} loop={false} />
        </ExampleWrapper>
      </ExampleContainer>

      <ExampleContainer>
        <h3>Responsive: 1080p above M breakpoint (740px), 480p below. Resize the browser to see the switch</h3>
        <ExampleWrapper $maxWidth="800px">
          <AmbientVideo src={video1080} srcMobile={video480} poster={defaultData.image} />
        </ExampleWrapper>
      </ExampleContainer>
    </>
  );
}
