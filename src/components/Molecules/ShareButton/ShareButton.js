import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import PopUpHelper from '../../../utils/ShareButton/SharePopUpHelper';
import ShareUrlHelper from '../../../utils/ShareButton/ShareUrlHelper';
import ShareIcons from './assets/ShareIcons';

import {
  Wrapper,
  StyledParagraph,
  StyledList,
  StyledItem
} from './ShareButton.style';

const handleShare = (e, typeOfShare) => {
  e.preventDefault();

  // Pass the current page's URL and the type of share to our helper function
  const shareUrl = ShareUrlHelper(window.location.href, typeOfShare);

  // Use our helper function for pop-up position issues on dual-screen setups
  PopUpHelper(shareUrl, 550, 420);
};

/* Share Button component to handle FB and Twitter sharing */
const ShareButton = ({ campaign, ...restProps }) => {
  return (
    <Wrapper>
      <StyledParagraph>Share with:</StyledParagraph>
      <StyledList>
        {Object.keys(ShareIcons).map(shareType => {
          return (
            <StyledItem key={`share-button--${shareType}`}>
              <Icon
                onClick={e => handleShare(e, shareType)}
                icon={ShareIcons[shareType]}
                title={`Share on ${shareType}`}
                brand={campaign}
                target="_blank"
                role="button"
                href="#"
                {...restProps}
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
  campaign: PropTypes.string
};

ShareButton.defaultProps = {
  campaign: 'comicrelief'
};

export default ShareButton;
