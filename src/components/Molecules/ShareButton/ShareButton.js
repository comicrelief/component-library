import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SocialIcons from '../../Atoms/SocialIcons/SocialIcons';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import PopUpHelper from './PopUpHelper';

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

const shareFunctionality = typeOfShare => {
  let shareUrl = '';

  if (typeOfShare === 'twitter') {
    shareUrl = 'http://www.twitter.com/share?url=http://www.google.com';
  } else {
    shareUrl =
      'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fgithub.com&quote=GitHub';
  }
  return shareUrl;
};

const handleShare = (e, typeOfShare) => {
  e.preventDefault();

  console.log('handleShare:', e.currentTarget.href, typeOfShare);

  const popUpWidth = 600;
  const popUpHeight = 300;

  const shareUrl = shareFunctionality(typeOfShare);

  PopUpHelper(shareUrl, 'some title', popUpWidth, popUpHeight);
};

/* Share Button component to handle FB and Twitter sharing */
const ShareButton = ({ ...restProps }) => {
  return (
    <Wrapper>
      <StyledParagraph>Share with:</StyledParagraph>
      <StyledList>
        {Object.keys(socialIcons).map(brand => {
          return (
            <StyledItem>
              <Icon
                key={`share-button--${brand}`}
                icon={socialIcons[brand]}
                href={shareFunctionality(brand)}
                title="the title"
                brand="comicrelief"
                onClick={e => handleShare(e, brand)}
                role="button"
                {...restProps}
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
