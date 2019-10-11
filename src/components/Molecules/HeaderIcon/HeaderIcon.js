import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import HeaderIcons from './assets/HeaderIcons';
import EmailSignUp from '../EmailSignUp/EmailSignUp';
import RichText from '../../Atoms/RichText/RichText';
import spacing from '../../../theme/shared/spacing';

const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  display: inline-block;
  margin: 5px;
`;

const EsuWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 100;
  top: 0;
  left: 0;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const CloseButton = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 25%;
  width: 30px;
  height: 30px;
  margin: ${spacing('xl')} 10px 10px;
`;

const HeaderESU = styled(EmailSignUp)`
  margin-top: ${spacing('xl')};
  width: 50%;
`;

/* HeaderIcon component */
const HeaderIcon = ({ link, campaign, iconType, title, ...restProps }) => {
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
          title="to-do"
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
            id="closey"
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
