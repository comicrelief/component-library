import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';

const Wrapper = styled.div`
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
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

const Banner = ({ children, backgroundColor }) => (
  <Wrapper backgroundColor={backgroundColor}>
    <Container>
      { children }
    </Container>
  </Wrapper>
);

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string
};

Banner.defaultProps = {
  backgroundColor: 'grey_dark'
};

export default Banner;
