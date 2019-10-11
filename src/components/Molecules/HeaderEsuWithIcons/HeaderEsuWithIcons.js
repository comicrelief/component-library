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
  title: <RichText markup={'<p>title</p> '} />,
  topCopy: <RichText markup={'<p>topCopy</p> '} />,
  successCopy: <RichText markup={'<p>successCopy</p> '} />,
  errorMsg: <RichText markup={'<p>errorMsg</p> '} />,
  privacyCopy: <RichText markup={'<p>privacyCopy</p> '} />
};

/* HeaderEsuWithIcons component */
const HeaderEsuWithIcons = ({ link, campaign, iconType, title }) => {
  const [isESUOpen, setIsESUOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /* Allow our ESU modal stuff to happen */
  const handleESUClick = (e, typeOfIcon) => {
    if (typeOfIcon === 'Email' || typeOfIcon === 'Close') {
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
        errorMsg={fauxEsuCopy.errorMsg}
        privacyCopy={fauxEsuCopy.privacyCopy}
        isSuccess={isSuccess}
        subscribe={() => setIsSuccess(!isSuccess)}
      />
    );
  };

  /* Break out Close button render into own function */
  const renderCloseButton = () => {
    return (
      <CloseButton
        onClick={e => handleESUClick(e, 'Close')}
        icon={HeaderIcons.Close}
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
          icon={HeaderIcons[iconType]}
          title={title}
          brand={campaign}
          target="_blank"
          role="button"
          href={link}
        />
      </IconWrapper>

      {/* Render the ESU itself if our ESU button is present */}
      {iconType === 'Email' && isESUOpen ? (
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
