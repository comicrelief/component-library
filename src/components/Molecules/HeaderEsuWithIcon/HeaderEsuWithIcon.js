import React, { useState, useEffect, useRef } from 'react';
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
  const [hasParentRef, setHasParentRef] = useState(false);
  const thisRef = useRef(null);

  /* Dynamically retrieve ID that Gatsby has already baked into the page, need to null check for initial render */
  const getID = refWithID => {
    const thisID = refWithID !== null ? refWithID.getAttribute('id') : null;
    return thisID;
  };

  useEffect(() => {
    if (isClicked) {
      if (isESUOpen && !isSuccess) {
        thisRef.current.querySelector('input').focus();
      } else {
        thisRef.current.querySelector('a').focus();
      }
    }
  }, [isClicked, isESUOpen, isSuccess]);

  /* Waiting on a usable ref from render before setting our flag used in other functions */
  useEffect(() => {
    setHasParentRef(true);
  }, [thisRef]);

  /* Allow our ESU modal stuff to happen */
  const handleESUOpen = e => {
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
      />
    );
  };

  /* Break out Close button render into own function */
  const renderCloseButton = () => {
    return (
      <CloseButton
        onClick={e => handleESUOpen(e, getID(thisRef.current))}
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
    <IconWrapper onKeyDown={e => handleEscClose(e)} ref={thisRef}>
      {hasParentRef ? (
        <Icon
          onClick={e => handleESUOpen(e)}
          icon={HeaderIcons.email.icon}
          title={HeaderIcons.email.title}
          brand={campaign}
          target="self"
          role="button"
          href="#"
          tabIndex="0"
        />
      ) : null}

      {isESUOpen && hasParentRef ? (
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
