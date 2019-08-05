import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import RichText from '../../Atoms/RichText/RichText';
import spacing from '../../../theme/shared/spacings';

const Section = styled.section`
  width: 100%;
  @media ${({ theme }) => theme.breakpoint('small')} {
    display: flex;
  }
`;

const CopyWrapper = styled.div`
  display: flex;
  padding: ${spacing('xl')};
  background: ${({ theme, bgColor }) => theme.color(bgColor)};
  color: ${({ theme }) => theme.color('deep_violet')};

  ${({ position }) =>
    (position === 'top' &&
      css`
        align-items: flex-start;
      `) ||
    (position === 'center' &&
      css`
        align-items: center;
      `) ||
    (position === 'bottom' &&
      css`
        align-items: flex-end;
      `)}
  p {
    font-size: ${({ theme }) => theme.fontSize('m')};
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSize('xxl')};
  }
`;

const DoubleCopy = ({
  /** Copy block */
  leftCopy,
  rightCopy,
  /** Text align */
  leftCopyAlign,
  rightCopyAlign,
  /** Position on the Y axis */
  leftCopyAlignItem,
  rightCopyAlignItem,
  /** Background color */
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
  rightCopy: PropTypes.string,
  /** Copy text align */
  leftCopyAlign: PropTypes.oneOf(['left', 'center', 'right']),
  rightCopyAlign: PropTypes.oneOf(['left', 'center', 'right']),
  /** Copy align item   */
  leftCopyAlignItem: PropTypes.oneOf(['top', 'center', 'bottom']),
  rightCopyAlignItem: PropTypes.oneOf(['top', 'center', 'bottom']),
  /** Copy background color */
  leftBgColor: PropTypes.string,
  rightBgColor: PropTypes.string
};

DoubleCopy.defaultProps = {
  leftCopyAlign: 'left',
  rightCopyAlign: 'right',
  leftCopy: '',
  rightCopy: '',
  leftBgColor: 'purple',
  rightBgColor: 'yellow',
  leftCopyAlignItem: 'center',
  rightCopyAlignItem: 'bottom'
};

export default DoubleCopy;
