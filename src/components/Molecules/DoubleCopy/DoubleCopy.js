import React from 'react';
// import PropTypes from 'prop-types';
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

const DoubleCopy = () => {
  return (
    <Section>
      <CopyWrapper>
        <RichText
          align="center"
          markup={
            ' <h1 class="text--title">Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in.</p>'
          }
        />
      </CopyWrapper>
      <CopyWrapper>
        <RichText
          align="center"
          markup={
            ' <h1 class="text--title">Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in.</p>'
          }
        />
      </CopyWrapper>
    </Section>
  );
};

DoubleCopy.propTypes = {};

export default DoubleCopy;

// align=
// {'center'}
// markup=
// {
//   ' <div> <h1 class="text--title">Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in.</p> </div>'
// }
