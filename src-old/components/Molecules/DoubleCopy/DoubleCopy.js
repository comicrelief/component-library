import React from 'react';
import PropTypes from 'prop-types';

import { Section, CopyWrapper } from './DoubleCopy.style';

const DoubleCopy = ({ leftCopy, rightCopy }) => (
  <Section>
    <CopyWrapper>{leftCopy}</CopyWrapper>
    <CopyWrapper>{rightCopy}</CopyWrapper>
  </Section>
);

DoubleCopy.propTypes = {
  /** Copy left  */
  leftCopy: PropTypes.node.isRequired,
  /** Copy right  */
  rightCopy: PropTypes.node.isRequired
};

export default DoubleCopy;
