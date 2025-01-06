import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from '../../Atoms/Logo/Logo';

const TitleLabel = styled.span`
  line-height: 0; 
  font-size: 0;
  color: transparent; 
`;

const LogoLink = styled.a`
  img {
    transition: transform 0.35s cubic-bezier(0.41, 1.64, 0.41, 0.8);
  }

  &:hover,
  &:focus {
    img {
      // TODO: confirm this isn't too much
      transform: rotate(-14deg);
    }
  }
`;

const Logos = ({ campaign = 'Comic Relief' }) => {
  if (campaign === 'Sport Relief Gameon') {
    return (
      <>
        <LogoLink href="/" title="Go to Comic Relief homepage">
          <Logo rotate sizeSm="50px" sizeMd="60px" campaign="Comic Relief" title="Go to Comic Relief homepage" />
          <TitleLabel>Go to Comic Relief homepage</TitleLabel>
        </LogoLink>
        <LogoLink href="/sportrelief/" title="Go to Sport Relief homepage">
          <Logo sizeSm="100px" sizeMd="120px" campaign="Sport Relief Gameon" title="Go to Sport Relief homepage" />
          <TitleLabel>Go to Sport Relief homepage</TitleLabel>
        </LogoLink>
      </>
    );
  }

  if (campaign === 'Sport Relief') {
    return (
      <LogoLink href="/sportrelief" title="Go to Sport Relief homepage">
        <Logo rotate={false} campaign="Sport Relief" title="Sport Relief in homepage" />
        <TitleLabel>Go to Sport Relief homepage</TitleLabel>
      </LogoLink>
    );
  }

  if (campaign === 'Pride') {
    return (
      <LogoLink href="/" title="Go to Comic Relief homepage">
        <Logo rotate={false} campaign="Pride" title="Go to Comic Relief homepage" />
        <TitleLabel>Go to Comic Relief homepage</TitleLabel>
      </LogoLink>
    );
  }

  return (
    <LogoLink href="/" title="Go to Comic Relief homepage">
      <Logo rotate={false} campaign="Comic Relief" title="Go to Comic Relief homepage" />
      <TitleLabel>Go to Comic Relief homepage</TitleLabel>
    </LogoLink>
  );
};

Logos.propTypes = {
  campaign: PropTypes.string
};

export default Logos;
