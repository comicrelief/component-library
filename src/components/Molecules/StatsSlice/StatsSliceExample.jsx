import React, { useState } from 'react';
import styled from 'styled-components';
import StatsSlice from './StatsSlice';

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const ANIMATION_NODES = [{
  title: "123",
  stat: "£1234.56",
  body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
}];

export default function StatsSliceExample() {
  const [animKey, setAnimKey] = useState(0);

  return (
    <>
      <Wrapper>
        <h3>Empty stats</h3>
        <p>Renders <code>null</code> when no nodes are provided.</p>
        <StatsSlice />
      </Wrapper>

      <Wrapper>
        <h3>Basic stats</h3>
        <StatsSlice ease="none" nodes={[{
          title: "123",
          stat: "123,456,789.02",
          body: "Short body should still fill 100% width"
        }]}  />
      </Wrapper>

      <Wrapper>
        <h3>Multiple stats</h3>
        <StatsSlice ease="none" nodes={[{
          title: "123",
          stat: "£1234.56",
          body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
        },
        {
          title: "456",
          stat: "over 456 lives were saved",
          body: "Short body should still fill 100% width (on S, M)"
        },
        {
          title: "789",
          stat: "456,789,123 people",
          body: "Ut enim ad minima veniam, quis nostrum exercitationem."
        },
        {
          title: "asd",
          stat: "456 people",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        },
        {
          title: "xcv",
          stat: "$800bn raised",
          body: "Ut enim ad minima veniam, quis nostrum exercitationem."
        }]}  />
      </Wrapper>

      <Wrapper>
        <h3>With animation (cubic)</h3>
        <p>
          The animation is scroll-triggered via IntersectionObserver in production.
          Click Replay to remount and re-run it here.
        </p>
        <button
          type="button"
          onClick={() => setAnimKey(k => k + 1)}
          style={{ marginBottom: '1rem' }}
        >
          Replay
        </button>
        <StatsSlice key={animKey} nodes={ANIMATION_NODES} />
      </Wrapper>
    </>
  );
}
