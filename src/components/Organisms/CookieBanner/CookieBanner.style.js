import styled from 'styled-components';

import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import zIndex from '../../../theme/shared/zIndex';
import spacing from '../../../theme/shared/spacing';

const CookieWrapper = styled.div`
  display: flex;
  position: relative;
  padding: ${spacing('md')};
  background: ${({ theme }) => theme.color('deep_violet_dark')};
  flex-direction: column;
  ${zIndex('high')};
`;

const CookieText = styled(Text)`
  line-height: 1.5;
  margin: 0;
  &:first-of-type {
    margin-bottom: ${spacing('sm')};
  }
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: 75%;
    margin: ${spacing('none')} auto;
    &:first-of-type {
      margin-bottom: ${spacing('md')};
    }
  }
`;

const AcceptCookieBtn = styled(Link)`
  padding: ${spacing('sm')} ${spacing('md')};
  display: block;
  margin-bottom: 10px;
  @media ${({ theme }) => theme.breakpoint('small')} {
    margin: 0 ${spacing('xsm')} 0 0;
    display: inline-block;
  }
`;

const LinkStyle = styled(Link)`
  color: ${({ theme }) => theme.color('white')};
  padding: 0 ${spacing('xsm')} 1px;
  border-bottom: 2px solid;
`;

export { CookieWrapper, CookieText, AcceptCookieBtn, LinkStyle };
