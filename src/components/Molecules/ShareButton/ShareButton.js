import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SocialIcons from '../../Atoms/SocialIcons/SocialIcons';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import PopUpHelper from '../../../utils/PopUpHelper';

/* To move */
import facebook from './assets/fb--share.svg';
import twitter from './assets/twitter--share.svg';

/* To move */
const socialIcons = {
  facebook,
  twitter
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledParagraph = styled.p`
  width: auto;
  margin: 0 15px 0 0;
`;

const StyledList = styled.ul`
  width: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledItem = styled.li`
  width: 40px;
  height: 40px;
  display: inline-block;
  margin: 4px;
`;

const handleShare = (e, typeOfShare) => {
  e.preventDefault();

  const currentUrl = window.location.href;
  let shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;

  if (typeOfShare === 'twitter') {
    shareUrl = `http://www.twitter.com/share?url=${currentUrl}`;
  }

  /* Use helper function for pop-up position related issues on dual-screen setups */
  PopUpHelper(shareUrl, 600, 300);
};

/* Share Button component to handle FB and Twitter sharing */
const ShareButton = ({ ...restProps }) => {
  return (
    <Wrapper>
      <StyledParagraph>Share with:</StyledParagraph>
      <StyledList>
        {Object.keys(socialIcons).map(brand => {
          return (
            <StyledItem key={`share-button--${brand}`}>
              <Icon
                icon={socialIcons[brand]}
                href="#"
                title="the title"
                brand="comicrelief"
                target="_blank"
                role="button"
                {...restProps}
                onClick={e => handleShare(e, brand)}
              />
            </StyledItem>
          );
        })}
      </StyledList>
    </Wrapper>
  );
};

SocialIcons.propTypes = {
  /** Campaign, used to get social media accounts' links */
  campaign: PropTypes.string.isRequired
};

SocialIcons.defaultProps = {};

export default ShareButton;
