import styled from 'styled-components';
import zIndex from '../../../theme/shared/zIndex';
import spacing from '../../../theme/shared/spacing';

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  display: block;
  height: auto;
  margin-right: ${spacing('md')};
`;

const LogoWrapper = styled.div`
  display: inline-block;
  ${zIndex('high')}
  width: ${props => props.$sizeSm};
  transform: ${props => (props.$rotate ? 'rotate(-14deg)' : 'inherit')};
  vertical-align: bottom; // height fix
  
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    // width: ${props => props.$sizeMd};
  }

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    width: ${props => props.$sizeLg};
  }
`;

export { Image, LogoWrapper };
