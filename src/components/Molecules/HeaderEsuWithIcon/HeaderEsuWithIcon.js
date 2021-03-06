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

/* HeaderEsuWithIcon component */
const HeaderEsuWithIcon = ({
  title,
  topCopy,
  successCopy,
  privacyCopy,
  buttonColor,
  subscribe,
  validate,
  isSuccess,
  errorMsg,
  isESUOpen: isESUOpenInitial
}) => {
  // Pre-interaction flag
  const [isClicked, setisClicked] = useState(false);
  const [isESUOpen, setIsESUOpen] = useState(isESUOpenInitial);
  const thisRef = useRef(null);

  useEffect(() => {
    if (isClicked) {
      if (isESUOpen && !isSuccess) {
        thisRef.current.querySelector('input').focus();
      } else {
        thisRef.current.querySelector('a').focus();
      }
    }
  }, [isClicked, isESUOpen, isSuccess]);

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
  const renderESU = () => (
    <HeaderESU
      title={title}
      topCopy={topCopy}
      successCopy={successCopy}
      privacyCopy={privacyCopy}
      isSuccess={isSuccess}
      subscribe={subscribe}
      validate={validate}
      errorMsg={errorMsg}
      buttonColor={buttonColor}
      aria-modal="true"
    />
  );

  /* Break out Close button render into own function */
  const renderCloseButton = () => (
    <CloseButton
      onClick={e => handleESUOpen(e)}
      icon={HeaderIcons.close.icon}
      title={HeaderIcons.close.title}
      brand={HeaderIcons.close.title}
      target="self"
      role="button"
      href="#"
      tabIndex="0"
    />
  );

  /* Main render */
  return (
    <IconWrapper
      onKeyDown={e => handleEscClose(e)}
      ref={thisRef}
      data-test="header-esu"
    >
      <Icon
        onClick={e => handleESUOpen(e)}
        icon={HeaderIcons.email.icon}
        title={HeaderIcons.email.title}
        brand={HeaderIcons.email.title}
        target="self"
        role="button"
        href="#"
        tabIndex="0"
      />

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
  isESUOpen: PropTypes.bool,
  title: PropTypes.node.isRequired,
  topCopy: PropTypes.node.isRequired,
  privacyCopy: PropTypes.node.isRequired,
  successCopy: PropTypes.node.isRequired,
  buttonColor: PropTypes.string,
  subscribe: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired
};

HeaderEsuWithIcon.defaultProps = {
  isESUOpen: false,
  buttonColor: 'red'
};

export default HeaderEsuWithIcon;
