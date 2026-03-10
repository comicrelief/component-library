import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import StatNodeComponent from './_StatNode';
import {
  InnerWrapper,
  OuterWrapper
} from './StatsSlice.style';

// MARK: stats slice
const StatsSlice = ({
  nodes,
  pageBackgroundColour = 'teal_dark',
  paddingTop = '2rem',
  paddingBottom = '2rem',
  ease = 'cubic',
  characterStagger = 80,
  stringCharacterDuration = '1600ms',
  numberCharacterDuration = '2000ms'
}) => {
  // if no nodes have been provided, don't render anything
  if (isEmpty(nodes)) {
    return null;
  }

  return (
    <OuterWrapper
      backgroundColour={pageBackgroundColour}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <InnerWrapper>
        {nodes?.map((node, index) => {
          const key = index + String(node.title);
          const nodeComponent = (
            <StatNodeComponent
              key={key}
              stat={String(node.stat)}
              characterStagger={characterStagger}
              stringCharacterDuration={stringCharacterDuration}
              numberCharacterDuration={numberCharacterDuration}
              ease={ease}
              body={node.body}
            />
          );
          return nodeComponent;
        })}
      </InnerWrapper>
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
  characterStagger: PropTypes.number,
  stringCharacterDuration: PropTypes.string,
  numberCharacterDuration: PropTypes.string
};

export default StatsSlice;
