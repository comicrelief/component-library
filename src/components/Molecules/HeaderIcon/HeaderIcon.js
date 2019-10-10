import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import HeaderIcons from './assets/HeaderIcons';
import EmailSignUp from '../EmailSignUp/EmailSignUp';

const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  display: inline-block;
  margin: 5px;
`;

const EsuWrapper = styled.div`
  position: static;
  width: 100%;
  height: 100%;
  background-color: red;
`;

/* HeaderIcon component */

const HeaderIcon = ({ link, campaign, iconType, title, ...restProps }) => {
  const [isESUOpen, setIsESUOpen] = useState(false);

  /* Allow our ESU modal stuff to happen */
  const handleClick = (e, typeOfIcon) => {
    if (typeOfIcon === 'Email') {
      e.preventDefault();
      // Toggle our 'opened' state
      setIsESUOpen(!isESUOpen);
      console.log('ESU clicked', isESUOpen);
    }
  };

  return (
    <>
      <IconWrapper>
        <Icon
          onClick={e => handleClick(e, iconType)}
          icon={HeaderIcons[iconType]}
          title={title}
          brand={campaign}
          target="_blank"
          role="button"
          href={link}
          {...restProps}
        />
      </IconWrapper>

      {iconType === 'Email' && isESUOpen ? (
        <EsuWrapper>i am the esu </EsuWrapper>
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
