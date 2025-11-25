import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import LogoNav2026 from '../../Atoms/LogoNav2026/LogoNav2026';

const TitleLabel = styled.span`
  line-height: 0;
  font-size: 0;
  color: transparent;
`;

const LogoLink = styled.a`
  ${({ animate }) => animate && css`
    img {
      transition: transform 0.35s cubic-bezier(0.41, 1.64, 0.41, 0.8);
    }
    &:hover,
    &:focus {
      img {
        transform: rotate(-14deg);
      }
    }
  `}
`;

const LogoLinkedNav2026 = ({
  animate = false,
  sizeSm,
  sizeMd
}) => (
  <>
    <LogoLink
      data-testid="LogoLink"
      href="https://www.comicrelief.com/"
      title="Go to Comic Relief homepage"
      animate={animate}
    >
      <LogoNav2026
        data-testid="LogoNav2026"
        rotate
        sizeSm={sizeSm}
        sizeMd={sizeMd}
      />
      <TitleLabel data-testid="TitleLabel">Go to Comic Relief homepage</TitleLabel>
    </LogoLink>
  </>
);

LogoLinkedNav2026.propTypes = {
  animate: PropTypes.bool,
  sizeSm: PropTypes.string,
  sizeMd: PropTypes.string
};

export default LogoLinkedNav2026;
