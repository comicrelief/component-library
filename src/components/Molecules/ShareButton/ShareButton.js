import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import PopUpHelper from '../../../utils/PopUpHelper';

/* To move */
import Facebook from './assets/fb--share.svg';
import Twitter from './assets/twitter--share.svg';

/* To move */
const shareIcons = {
  Facebook,
  Twitter
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

  // Encore URL so we can happily pass it as a parameter, fragments and all
  const currentUrl = encodeURIComponent(window.location.href);

  const shareURLs = {
    Twitter: 'http://www.twitter.com/intent/tweet?url=',
    Facebook: 'https://www.facebook.com/sharer/sharer.php?u='
  };

  const shareUrl = shareURLs[typeOfShare] + currentUrl;

  console.log('shareUrl', shareUrl);

  // Use our helper function for pop-up position issues on dual-screen setups
  PopUpHelper(shareUrl, 550, 420);
};

/* Share Button component to handle FB and Twitter sharing */
const ShareButton = ({ ...restProps }) => {
  return (
    <Wrapper>
      <StyledParagraph>Share with:</StyledParagraph>
      <StyledList>
        {Object.keys(shareIcons).map(brand => {
          return (
            <StyledItem key={`share-button--${brand}`}>
              <Icon
                icon={shareIcons[brand]}
                href="#"
                title={`Share on ${brand}`}
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

ShareButton.propTypes = {
  /** Campaign, used to get social media accounts' links */
  campaign: PropTypes.string.isRequired
};

ShareButton.defaultProps = {};

export default ShareButton;
