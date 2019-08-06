import React from 'react';
import PropTypes from 'prop-types';

import RichText from '../../Atoms/RichText/RichText';
import { Section, CopyWrapper } from './DoubleCopy.style';

const DoubleCopy = ({ leftCopy, rightCopy }) => {
  return (
    <Section>
      <CopyWrapper>
        <RichText markup={leftCopy} />
      </CopyWrapper>
      <CopyWrapper>
        <RichText markup={rightCopy} />
      </CopyWrapper>
    </Section>
  );
};

DoubleCopy.propTypes = {
  /** Copy left box */
  leftCopy: PropTypes.string,
  /** Copy right box */
  rightCopy: PropTypes.string
};

DoubleCopy.defaultProps = {
  leftCopy: '',
  rightCopy: ''
};

export default DoubleCopy;
