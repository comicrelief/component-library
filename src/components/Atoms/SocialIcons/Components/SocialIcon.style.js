import styled from 'styled-components';
import SocialIcon from './SocialIcon';

const StyledSocialIcon = styled(SocialIcon)`
  &.social-icon {
    display: inline-block;
    padding: 16px 30px;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    border-radius: 30px;
    cursor: point;
    background: ${({ theme }) => theme.color('red')};
    color: ${({ theme }) => theme.color('white')};
    :hover {
      background: ${({ theme }) => theme.color('teal')};
    }
  }
`;

export default StyledSocialIcon;
