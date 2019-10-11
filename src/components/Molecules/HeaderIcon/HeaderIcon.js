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
} from './HeaderIcon.style';

/* HeaderIcon component */
const HeaderIcon = ({ link, campaign, iconType, title }) => {
  const [isESUOpen, setIsESUOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /* Allow our ESU modal stuff to happen */
  const handleESUClick = (e, typeOfIcon) => {
    if (typeOfIcon === 'Email' || typeOfIcon === 'Close') {
      e.preventDefault();
      // Toggle our 'opened' stateß
      setIsESUOpen(!isESUOpen);
    }
  };

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

      {/* Render the ESU itself */}
      {iconType === 'Email' && isESUOpen ? (
        <EsuWrapper>
          <HeaderESU
            title="Stay in the know!"
            topCopy={<RichText markup={'<p>Top copy</p> '} />}
            successCopy={<RichText markup={'<p>Success copy</p> '} />}
            isSuccess={isSuccess}
            errorMsg=""
            privacyCopy={<RichText markup={'<p>Privacy copy</p> '} />}
            subscribe={() => setIsSuccess(!isSuccess)}
          />
          <CloseButton
            onClick={e => handleESUClick(e, 'Close')}
            icon={HeaderIcons.Close}
            title="Close email sign-up"
            brand={campaign}
            target="_self"
            role="button"
            href="#"
          />
        </EsuWrapper>
      ) : null}
    </>
  );
};

HeaderIcon.propTypes = {
  link: PropTypes.string,
  campaign: PropTypes.string,
  iconType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

HeaderIcon.defaultProps = {
  link: null,
  campaign: 'comicrelief'
};

export default HeaderIcon;
