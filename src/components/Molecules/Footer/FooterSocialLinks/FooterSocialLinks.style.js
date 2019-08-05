import styled from 'styled-components';
import spacing from '../../../../theme/shared/spacings';

const S = styled(Link)`
  color: ${({ theme }) => theme.color('white')};
  padding: 0 ${spacing('xsm')} 1px;
  border-bottom: 2px solid;
`;

export { CookieWrapper, CookieText, AcceptCookieBtn, LinkStyle };
