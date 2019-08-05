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
  /* ${leftCopyPosition => css`
    align-items: ${leftCopyPosition};
  `}
  ${rightCopyPosition => css`
    align-items: ${rightCopyPosition};
  `} */
  padding: ${spacing('xl')};
  background: ${({ theme, leftBgColor, rightBgColor }) =>
    leftBgColor ? theme.color(leftBgColor) : theme.color(rightBgColor)};
`;

const DoubleCopy = ({
  leftCopy,
  rightCopy,
  leftTextAlign,
  rightTextAlign,
  leftCopyPosition,
  rightCopyPosition,
  leftBgColor,
  rightBgColor
}) => {
  return (
    <Section>
      <CopyWrapper
        leftBgColor={leftBgColor}
        leftCopyPosition={leftCopyPosition}
      >
        <RichText align={leftTextAlign} markup={leftCopy} />
      </CopyWrapper>
      <CopyWrapper
        rightBgColor={rightBgColor}
        rightCopyPosition={rightCopyPosition}
      >
        <RichText align={rightTextAlign} markup={rightCopy} />
      </CopyWrapper>
    </Section>
  );
};

DoubleCopy.propTypes = {
  leftCopy: PropTypes.string,
  rightCopy: PropTypes.string,
  leftTextAlign: PropTypes.string,
  rightTextAlign: PropTypes.string,
  leftCopyPosition: PropTypes.string,
  rightCopyPosition: PropTypes.string,
  leftBgColor: PropTypes.string,
  rightBgColor: PropTypes.string
};

DoubleCopy.defaultProps = {
  leftTextAlign: 'left',
  rightTextAlign: 'right',
  leftCopy: '',
  rightCopy: '',
  leftBgColor: '',
  rightBgColor: 'yellow',
  leftCopyPosition: '',
  rightCopyPosition: 'center'
};

export default DoubleCopy;
