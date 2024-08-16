import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from '../../Atoms/Logo/Logo';

const TitleLabel = styled.span`
  line-height: 0; 
  font-size: 0;
  color: transparent; 
`;

const Logos = ({ campaign = 'Comic Relief' }) => {
  if (campaign === 'Sport Relief Gameon') {
    return (
      <>
        <a href="/" title="Go to Comic Relief homepage">
          <Logo rotate sizeSm="50px" sizeMd="60px" campaign="Comic Relief" title="Go to Comic Relief homepage" />
          <TitleLabel>Go to Comic Relief homepage</TitleLabel>
        </a>
        <a href="/sportrelief/" title="Go to Sport Relief homepage">
          <Logo sizeSm="100px" sizeMd="120px" campaign="Sport Relief Gameon" title="Go to Sport Relief homepage" />
          <TitleLabel>Go to Sport Relief homepage</TitleLabel>
        </a>
      </>
    );
  }

  if (campaign === 'Sport Relief') {
    return (
      <a href="/sportrelief" title="Go to Sport Relief homepage">
        <Logo rotate={false} campaign="Sport Relief" title="Sport Relief in homepage" />
        <TitleLabel>Go to Sport Relief homepage</TitleLabel>
      </a>
    );
  }

  if (campaign === 'Pride') {
    return (
      <a href="/" title="Go to Comic Relief homepage">
        <Logo rotate={false} campaign="Pride" title="Go to Comic Relief homepage" />
        <TitleLabel>Go to Comic Relief homepage</TitleLabel>
      </a>
    );
  }

  return (
    <a href="/" title="Go to Comic Relief homepage">
      <Logo rotate={false} campaign="Comic Relief" title="Go to Comic Relief homepage" />
      <TitleLabel>Go to Comic Relief homepage</TitleLabel>
    </a>
  );
};

Logos.propTypes = {
  campaign: PropTypes.string
};

export default Logos;
