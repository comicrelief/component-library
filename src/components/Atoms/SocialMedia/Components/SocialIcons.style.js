import styled from 'styled-components';
import SocialIcons from './SocialIcons';

const StyledSocialIcons = styled(SocialIcons)`
  &.icons {
    display: inline-block;
    list-style-type: none;
  }
  li {
    float: left;
    padding: 10px;
  }
`;

export default StyledSocialIcons;
