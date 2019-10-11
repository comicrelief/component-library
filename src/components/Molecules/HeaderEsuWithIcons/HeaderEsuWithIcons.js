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
} from './HeaderEsuWithIcons.style';

// Faux Contentful copy for now
const fauxEsuCopy = {
  title: 'Title (plain text)',
  topCopy: <RichText markup={'<p>topCopy</p> '} />,
  successCopy: <RichText markup={'<p>successCopy</p> '} />,
  privacyCopy: <RichText markup={'<p>privacyCopy</p> '} />,
  errorMsg: ''
};

/* HeaderEsuWithIcons component */
const HeaderEsuWithIcons = ({ link, campaign, iconType, title }) => {
  const [isESUOpen, setIsESUOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // TODO: need to figure out how to handle validation here
  const [isErroring, setIsErroring] = useState('');

  /* Allow our ESU modal stuff to happen */
  const handleESUClick = (e, typeOfIcon) => {
    if (typeOfIcon === 'email' || typeOfIcon === 'close') {
      e.preventDefault();
      // Toggle our 'opened' state
      setIsESUOpen(!isESUOpen);
    }
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
        onClick={e => handleESUClick(e, 'close')}
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
    <>
      <IconWrapper>
        <Icon
          onClick={e => handleESUClick(e, iconType)}
          icon={HeaderIcons[iconType].icon}
          title={title}
          brand={campaign}
          target="_blank"
          role="button"
          href={link}
        />
      </IconWrapper>

      {/* Render the ESU itself if our ESU button is present */}
      {iconType === 'email' && isESUOpen ? (
        <EsuWrapper>
          {renderESU()}
          {renderCloseButton()}
        </EsuWrapper>
      ) : null}
    </>
  );
};

HeaderEsuWithIcons.propTypes = {
  link: PropTypes.string,
  campaign: PropTypes.string,
  iconType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

HeaderEsuWithIcons.defaultProps = {
  link: null,
  campaign: 'comicrelief'
};

export default HeaderEsuWithIcons;
