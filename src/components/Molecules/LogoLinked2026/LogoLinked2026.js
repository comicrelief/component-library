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
  ${({ animateRotate }) => animateRotate && css`
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
  campaign = 'Comic Relief',
  title = 'Go to Comic Relief homepage',
  url = '/',
  animateRotate = false,
  sizeSm,
  sizeMd
}) => (
  <>
    <LogoLink
      data-testid="LogoLink"
      href="/"
      title="Go to Comic Relief homepage"
      animateRotate={animateRotate}
    >
      <LogoNav2026
        data-testid="LogoNav2026"
        rotate
        sizeSm="150px"
        sizeMd="180px"
      />
      <TitleLabel data-testid="TitleLabel">{item.title}</TitleLabel>
    </LogoLink>
  </>
);

LogoLinkedNav2026.propTypes = {
  campaign: PropTypes.string,
  animateRotate: PropTypes.bool,
  title: PropTypes.string,
  url: PropTypes.string,
  sizeSm: PropTypes.string,
  sizeMd: PropTypes.string
};

export default LogoLinkedNav2026;
