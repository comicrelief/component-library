import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import HeaderIcons from './assets/HeaderIcons';

import {
  IconWrapper,
  EsuWrapper,
  CloseButton,
  HeaderESU
} from './HeaderEsuWithIcon.style';

// Quick way to produce unique IDs per page
let esuCount = 0;

/* HeaderEsuWithIcon component */
const HeaderEsuWithIcon = ({
  campaign,
  title,
  topCopy,
  successCopy,
  privacyCopy,
  buttonColor,
  subscribe,
  isSuccess,
  errorMsg,
  isESUOpen: isESUOpenInitial
}) => {
  // Pre-interaction flag
  const [isClicked, setisClicked] = useState(false);
  const [isESUOpen, setIsESUOpen] = useState(isESUOpenInitial);
  const [thisEsuID] = useState(`header-esu--${(esuCount += 1)}`);

  useEffect(() => {
    if (isClicked) {
      const thisESU = document.getElementById(thisEsuID);
      if (isESUOpen && !isSuccess) {
        thisESU.querySelector('input').focus();
      } else {
        thisESU.querySelector('a').focus();
      }
    }
  }, [isClicked, isESUOpen, isSuccess, thisEsuID]);

  /* Allow our ESU modal stuff to happen */
  const handleESUClick = e => {
    e.preventDefault();

    // Update flag
    setisClicked(true);

    // Toggle our 'opened' state
    setIsESUOpen(!isESUOpen);
  };

  const handleEscClose = e => {
    // Close the modal if this is the ESC key
    if (e.keyCode === 27) {
      setIsESUOpen(false);
    }
  };

  /* Break out ESU render into own function */
  const renderESU = () => {
    return (
      <HeaderESU
        title={title}
        topCopy={topCopy}
        successCopy={successCopy}
        privacyCopy={privacyCopy}
        isSuccess={isSuccess}
        subscribe={subscribe}
        errorMsg={errorMsg}
        buttonColor={buttonColor}
        aria-modal="true"
        id={thisEsuID}
      />
    );
  };

  /* Break out Close button render into own function */
  const renderCloseButton = () => {
    return (
      <CloseButton
        onClick={e => handleESUClick(e)}
        icon={HeaderIcons.close.icon}
        title="Close email sign-up"
        brand={campaign}
        target="self"
        role="button"
        href="#"
        tabIndex="0"
      />
    );
  };

  /* Main render */
  return (
    <IconWrapper id={thisEsuID} onKeyDown={e => handleEscClose(e)}>
      <Icon
        onClick={e => handleESUClick(e)}
        icon={HeaderIcons.email.icon}
        title={HeaderIcons.email.title}
        brand={campaign}
        target="self"
        role="button"
        href="#"
        tabIndex="0"
      />

      {/* Render the ESU itself */}
      {isESUOpen ? (
        <EsuWrapper>
          {renderESU()}
          {renderCloseButton()}
        </EsuWrapper>
      ) : null}
    </IconWrapper>
  );
};

HeaderEsuWithIcon.propTypes = {
  campaign: PropTypes.string,
  isESUOpen: PropTypes.bool,
  title: PropTypes.node.isRequired,
  topCopy: PropTypes.node.isRequired,
  privacyCopy: PropTypes.node.isRequired,
  successCopy: PropTypes.node.isRequired,
  buttonColor: PropTypes.string,
  subscribe: PropTypes.func.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired
};

HeaderEsuWithIcon.defaultProps = {
  campaign: 'comicrelief',
  isESUOpen: false,
  buttonColor: 'red'
};

export default HeaderEsuWithIcon;
