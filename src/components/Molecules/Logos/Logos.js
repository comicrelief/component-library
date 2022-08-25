import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Atoms/Logo/Logo';

const Logos = ({ campaign }) => {
  if (campaign === 'Sport Relief Gameon') {
    return (
      <>
        <a href="/" title="Go to Comic Relief homepage">
          <Logo rotate sizeSm="50px" sizeMd="60px" campaign="Comic Relief" />
        </a>
        <a href="/sportrelief/" title="Go to Sport Relief homepage">
          <Logo sizeSm="100px" sizeMd="120px" campaign="Sport Relief Gameon" />
        </a>
      </>
    );
  }

  if (campaign === 'Sport Relief') {
    return (
      <a href="/sportrelief" title="Sport Relief in homepage">
        <Logo rotate={false} campaign="Sport Relief" />
      </a>
    );
  }

  return (
    <a href="/" title="Go to Comic Relief homepage">
      <Logo rotate={false} sizeSm="60px" sizeMd="72px" campaign="Comic Relief" />
    </a>
  );
};

Logos.propTypes = {
  campaign: PropTypes.string
};

Logos.defaultProps = {
  campaign: 'Comic Relief'
};

export default Logos;
