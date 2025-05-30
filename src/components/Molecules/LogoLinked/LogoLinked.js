import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Logo from '../../Atoms/Logo/Logo';

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

const LogoLinked = ({
  campaign = 'Comic Relief', title = 'Go to Comic Relief homepage', url = '/', animateRotate = false, sizeSm, sizeMd
}) => {
  if (campaign === 'Sport Relief Gameon') {
    return (
      <>
        <LogoLink href={url} title="Go to Comic Relief homepage" animateRotate={animateRotate}>
          <Logo rotate sizeSm="50px" sizeMd="60px" campaign="Comic Relief" title="Go to Comic Relief homepage" />
          <TitleLabel>Go to Comic Relief homepage</TitleLabel>
        </LogoLink>
        <LogoLink href="/sportrelief/" title="Go to Sport Relief homepage" animateRotate={animateRotate}>
          <Logo sizeSm="100px" sizeMd="120px" campaign="Sport Relief Gameon" title="Go to Sport Relief homepage" />
          <TitleLabel>Go to Sport Relief homepage</TitleLabel>
        </LogoLink>
      </>
    );
  }

  if (campaign === 'Sport Relief') {
    return (
      <LogoLink href={url} title="Go to Sport Relief homepage" animateRotate={animateRotate}>
        <Logo rotate={false} campaign="Sport Relief" title="Sport Relief in homepage" />
        <TitleLabel>Go to Sport Relief homepage</TitleLabel>
      </LogoLink>
    );
  }

  if (campaign === 'Pride') {
    return (
      <LogoLink href={url} title="Go to Comic Relief homepage" animateRotate={animateRotate}>
        <Logo rotate={false} campaign="Pride" title="Go to Comic Relief homepage" sizeSm={sizeSm} sizeMd={sizeMd} />
        <TitleLabel>Go to Comic Relief homepage</TitleLabel>
      </LogoLink>
    );
  }

  return (
    <LogoLink href={url} title={title} animateRotate={animateRotate}>
      <Logo rotate={false} campaign="Comic Relief" title={title} sizeSm={sizeSm} sizeMd={sizeMd} />
      <TitleLabel>{title}</TitleLabel>
    </LogoLink>
  );
};

LogoLinked.propTypes = {
  campaign: PropTypes.string,
  animateRotate: PropTypes.bool,
  title: PropTypes.string,
  url: PropTypes.string,
  sizeSm: PropTypes.string,
  sizeMd: PropTypes.string
};

export default LogoLinked;
