import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import HeaderIcons from './assets/HeaderIcons';
import RichText from '../../Atoms/RichText/RichText';

import {
  IconWrapper,
  EsuWrapper,
  CloseButton,
  HeaderESU
} from './HeaderEsuWithIcon.style';

// Faux Contentful copy for now
const fauxEsuCopy = {
  title: 'Title (plain text)',
  topCopy: (
    <RichText
      markup={
        '<p>topCopy topCopy topCopy topCopy topCopy topCopy topCopy topCopy topCopy topCopy topCopy topCopy </p> '
      }
    />
  ),
  successCopy: (
    <RichText
      markup={
        '<p>successCopy successCopy successCopy successCopy successCopy successCopy successCopy successCopy </p> '
      }
    />
  ),
  privacyCopy: (
    <RichText
      markup={
        '<p>privacyCopy privacyCopy privacyCopy privacyCopy privacyCopy privacyCopy privacyCopy privacyCopy </p> '
      }
    />
  ),
  errorMsg: ''
};

/* HeaderEsuWithIcon component */
const HeaderEsuWithIcon = ({ campaign, title }) => {
  const [isESUOpen, setIsESUOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // TODO: need to figure out how to handle validation here
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
        title={fauxEsuCopy.title}
        topCopy={fauxEsuCopy.topCopy}
        successCopy={fauxEsuCopy.successCopy}
        privacyCopy={fauxEsuCopy.privacyCopy}
        isSuccess={isSuccess}
        subscribe={() => setIsSuccess(!isSuccess)}
        errorMsg={isErroring}
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
        title={title}
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
  title: PropTypes.string.isRequired
};

HeaderEsuWithIcon.defaultProps = {
  campaign: 'comicrelief'
};

export default HeaderEsuWithIcon;
