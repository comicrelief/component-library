import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import StatNodeComponent from './_StatNode';
import {
  InnerWrapper,
  OuterWrapper
} from './StatsSlice.style';
import StatContext from './_utils';

// stagger between characters in milliseconds
const characterStagger = 80;

// MARK: stats slice
const StatsSlice = ({
  nodes,
  pageBackgroundColour = 'teal_dark',
  paddingTop = '2rem',
  paddingBottom = '2rem',
  ease = 'cubic',
  characterDuration = '1600ms'
}) => {
  // calculate the duration for each stat
  // based on the number of characters and the stagger
  const durations = nodes?.map(
    node => String(node.stat).length * characterStagger
  );
  let startDelay = 0;

  // use an intersection observer to delay the animation
  // until the stats slice is visible
  const elRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
      // threshold 0.5 = wait until 50% of the element is visible
    }, { threshold: 0.5 });
    observer.observe(elRef.current);
  }, []);

  return (
    <OuterWrapper
      backgroundColour={pageBackgroundColour}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <StatContext.Provider value={isVisible}>
        <InnerWrapper ref={elRef}>
          {nodes?.map((node, index) => {
            const key = index + String(node.title);
            const duration = durations[index];
            const nodeComponent = (
              <StatNodeComponent
                key={key}
                stat={String(node.stat)}
                duration={duration}
                startDelay={startDelay}
                characterStagger={characterStagger}
                characterDuration={characterDuration}
                ease={ease}
                body={node.body}
              />
            );
            // update the start delay for the next stat
            startDelay += duration;
            return nodeComponent;
          })}
        </InnerWrapper>
      </StatContext.Provider>
    </OuterWrapper>
  );
};
StatsSlice.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      stat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      body: PropTypes.node
    })
  ),
  pageBackgroundColour: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
  ease: PropTypes.string,
  characterDuration: PropTypes.string
};

export default StatsSlice;
