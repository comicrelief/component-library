import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getLinks from './Utils/Links';
import icons from './Utils/Icons';
import Icon from './Icon/Icon';
import spacing from '../../../theme/shared/spacing';

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0 auto ${spacing('l')};
  justify-content: center;
  padding: 0;
  align-items: center;

  @media ${({ theme }) => theme.breakpoint('small')} {
    margin-bottom: ${spacing('xl')};
    justify-content: start;
  }
`;

const StyledItem = styled.li`
  width: 80px;
  padding: 10px;
`;

/** Social media icons with customizable style linked to campaign social media accounts */
const SocialIcons = ({ campaign, ...restProps }) => {
  const links = getLinks(campaign);

  return (
    <StyledList>
      {Object.keys(icons).map(brand => (
        <StyledItem key={brand}>
          <Icon
            icon={icons[brand]}
            href={links[brand].url}
            title={links[brand].title}
            brand={brand}
            {...restProps}
          />
        </StyledItem>
      ))}
    </StyledList>
  );
};

SocialIcons.propTypes = {
  /** Campaign, used to get social media accounts' links */
  campaign: PropTypes.string.isRequired,
  /** Social media account link target */
  target: PropTypes.string
};

SocialIcons.defaultProps = {
  target: 'blank'
};

export default SocialIcons;
