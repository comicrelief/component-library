import styled from 'styled-components';

import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import zIndex from '../../../theme/shared/zIndex';

const CookieWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 20px;
  background: ${({ theme }) => theme.color('deep_violet')};
  flex-direction: column;
  ${zIndex('high')};
`;

const CookieText = styled(Text)`
  margin: 0;
  &:first-of-type {
    margin-bottom: 10px;
  }
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: 75%;
    margin: 0 auto;
    &:first-of-type {
      margin-bottom: 15px;
    }
  }
`;

const AcceptCookieBtn = styled(Link)`
  color: ${({ theme }) => theme.color('black')};
  padding: 8px 20px;
  display: block;
  margin-bottom: 10px;
  @media ${({ theme }) => theme.breakpoint('small')} {
    margin: 0 6px 0 0;
    display: inline-block;
  }
`;

const LinkStyle = styled(Link)`
  color: ${({ theme }) => theme.color('white')};
  padding: 0 3px 1px;
  border-bottom: 2px solid;
`;

export { CookieWrapper, CookieText, AcceptCookieBtn, LinkStyle };
