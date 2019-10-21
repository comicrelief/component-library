import React, { useState } from 'react';
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
  campaign,
  title,
  topCopy,
  successCopy,
  privacyCopy,
  buttonColor,
  isESUOpen: isESUOpenInitial
}) => {
  const [isESUOpen, setIsESUOpen] = useState(isESUOpenInitial);
  const [isSuccess, setIsSuccess] = useState(false);

  // TODO: need to figure out how to handle validation here
  /* eslint-disable-next-line no-unused-vars */
  const [isErroring, setIsErroring] = useState('');

  /* Allow our ESU modal stuff to happen */
  const handleESUClick = e => {
    e.preventDefault();
    // Toggle our 'opened' state
    setIsESUOpen(!isESUOpen);
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
        subscribe={() => setIsSuccess(!isSuccess)}
        errorMsg={isErroring}
        buttonColor={buttonColor}
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
        target="_self"
        role="button"
        href="#"
      />
    );
  };

  /* Main render */
  return (
    <IconWrapper>
      <Icon
        onClick={e => handleESUClick(e)}
        icon={HeaderIcons.email.icon}
        title={HeaderIcons.email.title}
        brand={campaign}
        target="_blank"
        role="button"
        href="#"
      />

      {/* Render the ESU itself if our ESU button is present */}
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
  buttonColor: PropTypes.string
};

HeaderEsuWithIcon.defaultProps = {
  campaign: 'comicrelief',
  isESUOpen: false,
  buttonColor: 'red'
};

export default HeaderEsuWithIcon;
