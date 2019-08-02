import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RichText from '../../Atoms/RichText/RichText';
import spacing from '../../../theme/shared/spacings';

const Section = styled.section`
  width: 100%;
  @media ${({ theme }) => theme.breakpoint('small')} {
    display: flex;
  }
`;
const CopyWrapper = styled.div`
  padding: ${spacing('xl')};
`;

const DoubleCopy = ({ leftCopy, rightCopy, leftCopyAlign, rightCopyAlign }) => {
  return (
    <Section>
      <CopyWrapper>
        <RichText align={leftCopyAlign} markup={leftCopy} />
      </CopyWrapper>
      <CopyWrapper>
        <RichText align={rightCopyAlign} markup={rightCopy} />
      </CopyWrapper>
    </Section>
  );
};

DoubleCopy.propTypes = {
  leftCopy: PropTypes.string,
  rightCopy: PropTypes.string,
  leftCopyAlign: PropTypes.string,
  rightCopyAlign: PropTypes.string
};

DoubleCopy.defaultProps = {
  leftCopyAlign: 'left',
  rightCopyAlign: 'right',
  leftCopy: '',
  rightCopy: ''
};
export default DoubleCopy;
