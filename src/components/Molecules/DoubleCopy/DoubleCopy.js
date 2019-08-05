import React from 'react';
import PropTypes from 'prop-types';

import RichText from '../../Atoms/RichText/RichText';
import { Section, CopyWrapper } from './DoubleCopy.style';

const DoubleCopy = ({
  leftCopy,
  rightCopy,
  leftCopyAlign,
  rightCopyAlign,
  leftCopyAlignItem,
  rightCopyAlignItem,
  leftBgColor,
  rightBgColor
}) => {
  return (
    <Section>
      <CopyWrapper bgColor={leftBgColor} position={leftCopyAlignItem}>
        <RichText align={leftCopyAlign} markup={leftCopy} />
      </CopyWrapper>
      <CopyWrapper bgColor={rightBgColor} position={rightCopyAlignItem}>
        <RichText align={rightCopyAlign} markup={rightCopy} />
      </CopyWrapper>
    </Section>
  );
};

DoubleCopy.propTypes = {
  /** Copy box */
  leftCopy: PropTypes.string,
  /** Copy box */
  rightCopy: PropTypes.string,
  /** Copy text align */
  leftCopyAlign: PropTypes.oneOf(['left', 'center', 'right']),
  /** Copy text align */
  rightCopyAlign: PropTypes.oneOf(['left', 'center', 'right']),
  /** Copy align item   */
  leftCopyAlignItem: PropTypes.oneOf(['top', 'center', 'bottom']),
  /** Copy align item   */
  rightCopyAlignItem: PropTypes.oneOf(['top', 'center', 'bottom']),
  /** Copy background color */
  leftBgColor: PropTypes.string,
  /** Copy background color */
  rightBgColor: PropTypes.string
};

DoubleCopy.defaultProps = {
  leftCopyAlign: 'left',
  rightCopyAlign: 'right',
  leftCopy: '',
  rightCopy: '',
  leftBgColor: 'red',
  rightBgColor: 'green',
  leftCopyAlignItem: 'center',
  rightCopyAlignItem: 'center'
};

export default DoubleCopy;
