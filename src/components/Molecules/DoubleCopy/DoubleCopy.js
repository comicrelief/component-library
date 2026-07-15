import React from 'react';
import PropTypes from 'prop-types';

import { Section, CopyWrapper } from './DoubleCopy.style';

const DoubleCopy = ({ leftCopy, rightCopy }) => (
  <Section data-testid="DoubleCopySection">
    <CopyWrapper data-testid="DoubleCopyLeftWrapper">{leftCopy}</CopyWrapper>
    <CopyWrapper data-testid="DoubleCopyRightWrapper">{rightCopy}</CopyWrapper>
  </Section>
);

DoubleCopy.propTypes = {
  /** Copy left  */
  leftCopy: PropTypes.node.isRequired,
  /** Copy right  */
  rightCopy: PropTypes.node.isRequired
};

export default DoubleCopy;
