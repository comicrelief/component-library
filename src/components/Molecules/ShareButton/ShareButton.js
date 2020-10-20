import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import popUpHelper from '../../../utils/ShareButton/sharePopUpHelper';
import shareUrlHelper from '../../../utils/ShareButton/shareUrlHelper';
import shareTracking from '../../../utils/ShareButton/shareTracking';
import shareIcons from './assets/shareIcons';

import {
  Wrapper,
  Copy,
  ShareButtonList,
  ShareButtonItem
} from './ShareButton.style';

const handleShare = (e, typeOfShare, urlToShare) => {
  e.preventDefault();

  shareTracking(typeOfShare.toLowerCase());

  // Pass the current page's URL and the type of share to our helper function
  const shareUrl = shareUrlHelper(urlToShare, typeOfShare);

  // Use our helper function for pop-up position issues on dual-screen setups
  popUpHelper(shareUrl, 550, 420);
};

/* Share Button component to handle FB and Twitter sharing */
const ShareButton = ({
  campaign, copy, urlToShare, ...restProps
}) => {
  let checkedUrl = '';

  /* Window obj isn't available during server-side rendering AND we don't have
   * access to componentDidMount etc. in functional components, so add this check first */
  if (typeof window === 'undefined') {
    checkedUrl = 'http://www.some-other-domain.com';
  } else {
    // Else, assign the value based on the props passed
    checkedUrl = urlToShare !== null ? urlToShare : window.location.href;
  }

  return (
    <Wrapper>
      <Copy>{copy}</Copy>
      <ShareButtonList>
        {Object.keys(shareIcons).map(shareType => (
          <ShareButtonItem key={`share-button--${shareType}`}>
            <Icon
              onClick={e => handleShare(e, shareType, checkedUrl)}
              icon={shareIcons[shareType]}
              title={`Share on ${shareType}`}
              brand={campaign}
              target="_blank"
              role="button"
              href="#"
              {...restProps}
            />
          </ShareButtonItem>
        ))}
      </ShareButtonList>
    </Wrapper>
  );
};

ShareButton.propTypes = {
  /** Campaign, used to get social media accounts' links */
  campaign: PropTypes.string,
  copy: PropTypes.string,
  urlToShare: PropTypes.string
};

ShareButton.defaultProps = {
  campaign: 'comicrelief',
  copy: 'Share with:',
  urlToShare: null
};

export default ShareButton;
