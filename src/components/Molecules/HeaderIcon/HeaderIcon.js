import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import HeaderIcons from './assets/HeaderIcons';

const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  display: inline-block;
  margin: 5px;
`;

/* Allow our ESU modal stuff to happen */
const handleClick = (e, iconType) => {
  if (iconType === 'Email') {
    e.preventDefault();
    console.log('ESU clicked');
  }
};

/* HeaderIcon component */
const HeaderIcon = ({ link, campaign, iconType, title, ...restProps }) => {
  return (
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
