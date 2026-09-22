import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Atoms/Logos/Logo';
import { TitleLabel, LogoLink } from './LogoLinked.style';

const LogoLinked = ({
  sizeSm, sizeMd,
  campaign = 'Comic Relief',
  title = 'Go to Comic Relief homepage',
  url = '/',
  animateRotate = false,
  animatePulse = false,
  newTab = false
}) => {
  if (campaign === 'Sport Relief') {
    return (
      <LogoLink
        href={url}
        title="Go to Sport Relief homepage"
        target={newTab ? '_blank' : '_self'}
        animateRotate={animateRotate}
      >
        <Logo
          rotate={false}
          campaign="Sport Relief"
          title="Sport Relief in homepage"
        />
        <TitleLabel>Go to Sport Relief homepage</TitleLabel>
      </LogoLink>
    );
  }

  if (campaign === 'Pride') {
    return (
      <LogoLink
        href={url}
        title="Go to Comic Relief homepage"
        target={newTab ? '_blank' : '_self'}
        animateRotate={animateRotate}
      >
        <Logo
          rotate={false}
          campaign="Pride"
          title="Go to Comic Relief homepage"
          sizeSm={sizeSm}
          sizeMd={sizeMd}
        />
        <TitleLabel>Go to Comic Relief homepage</TitleLabel>
      </LogoLink>
    );
  }

  // Our 'modern' alt, as used within the CRcom header nav (lives purely within that codebase):
  if (campaign === 'Comic Relief wide') {
    return (
      <LogoLink
        href={url}
        title="Go to Comic Relief homepage"
        target={newTab ? '_blank' : '_self'}
        animatePulse={animatePulse}
      >
        <Logo
          rotate={false}
          campaign="Comic Relief wide"
          title="Go to Comic Relief homepage"
          sizeSm={sizeSm}
          sizeMd={sizeMd}
        />
        <TitleLabel>Go to Comic Relief homepage</TitleLabel>
      </LogoLink>
    );
  }

  return (
    <LogoLink
      href={url}
      title={title}
      target={newTab ? '_blank' : '_self'}
      animateRotate={animateRotate}
    >
      <Logo
        rotate={false}
        campaign="Comic Relief"
        title={title}
        sizeSm={sizeSm}
        sizeMd={sizeMd}
      />
      <TitleLabel>{title}</TitleLabel>
    </LogoLink>
  );
};

LogoLinked.propTypes = {
  campaign: PropTypes.string,
  animateRotate: PropTypes.bool,
  animatePulse: PropTypes.bool,
  title: PropTypes.string,
  url: PropTypes.string,
  sizeSm: PropTypes.string,
  sizeMd: PropTypes.string,
  newTab: PropTypes.bool
};

export default LogoLinked;
