import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import { screen } from '../../../theme/shared/size';

const Wrapper = styled.div`
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
`;

const Container = styled.div`
  text-align: center;
  padding: calc(${spacing('m')} * 2) ${spacing('m')};
  margin: 0 auto;
  max-width: ${screen.large};

  @media ${({ theme }) => theme.allBreakpoints('tablet')} {
    padding: ${spacing('xl')} ${spacing('l')};
  }

  @media ${({ theme }) => theme.allBreakpoints('large')} {
    padding: ${spacing('xl')} ${spacing('xl')};
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
