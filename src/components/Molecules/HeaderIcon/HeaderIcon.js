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

/* HeaderIcon component */
const HeaderIcon = ({ link, campaign, iconType, ...restProps }) => {
  return (
    <IconWrapper>
      <Icon
        // onClick={e => handleShare(e, shareType, checkedUrl)}
        icon={HeaderIcons[iconType]}
        title="titleeeee"
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
  iconType: PropTypes.string.isRequired
};

HeaderIcon.defaultProps = {
  link: null,
  campaign: 'comicrelief'
};

export default HeaderIcon;
