import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import PopUpHelper from '../../../utils/ShareButton/SharePopUpHelper';
import ShareUrlHelper from '../../../utils/ShareButton/ShareUrlHelper';
import ShareIcons from './assets/ShareIcons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledParagraph = styled.p`
  width: auto;
  margin: 0 20px 0 0;
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
