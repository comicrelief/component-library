import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';

const Wrapper = styled.div`
  background-color: red;
`;

const Container = styled.div`
  padding: calc(${spacing('m')} * 2) ${spacing('m')};
  margin: 0 auto;
  width: calc(100% - (${spacing('m')} * 2));

  @media ${({ theme }) => theme.breakpoint('small')} {
    width: 90%;
    padding: ${spacing('xl')} 5%;
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    padding: ${spacing('xl')} 10%;
    width: 80%;
  }
`;

const Banner = ({ children }) => (
  <Wrapper>
    <Container>
      { children }
    </Container>
  </Wrapper>
);

Banner.propTypes = {
  children: PropTypes.node.isRequired
};

export default Banner;
