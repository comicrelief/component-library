import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import zIndex from '../../../theme/shared/zIndex';
import spacing from '../../../theme/shared/spacing';
import crLogo from './assets/cr-logo.svg';

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  margin-right: ${spacing('md')};
`;

const LogoWrapper = styled.div`
  display: inline-block;
  ${zIndex('high')}
  width: ${props => props.sizeSm};
  transform: ${props => (props.rotate ? 'rotate(-14deg)' : 'inherit')};
  vertical-align: bottom; // height fix
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    width: ${props => props.sizeMd};
  }
`;

const LogoNav2026 = ({
  rotate = false,
  sizeSm = '51px',
  sizeMd = '70px',
  campaign = 'Comic Relief'
}) => (
  <LogoWrapper
    data-testid="LogoWrapper"
    rotate={rotate ? 1 : 0}
    sizeSm={sizeSm}
    sizeMd={sizeMd}
    campaign={campaign}
  >
    <Image
      data-testid="Image"
      src={crLogo}
      alt="Comic Relief logo"
    />
  </LogoWrapper>
);

LogoNav2026.propTypes = {
  rotate: PropTypes.bool,
  sizeSm: PropTypes.string,
  sizeMd: PropTypes.string,
  campaign: PropTypes.string
};

export default LogoNav2026;
