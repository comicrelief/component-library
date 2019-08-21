import styled from 'styled-components';

import Link from '../../Atoms/Link/Link';
import Text from '../../Atoms/Text/Text';
import hideVisually from '../../../theme/shared/hideVisually';
import zIndex from '../../../theme/shared/zIndex';

const Wrapper = styled.li`
  list-style: none;
  width: 46%;
  margin: 2%;
  @media ${({ theme }) => theme.breakpoint('small')} {
    margin: 1%;
    width: 22%;
  }
`;

const MoreInfo = styled(Text)`
  ${hideVisually}
  @media ${({ theme }) => theme.breakpoint('small')} {
    font-size: ${({ theme }) => theme.fontSize('s')};
  }
`;

const Item = styled(Link)`
  position: relative;
  padding: 0;
  border: none;
  :hover,
  :focus {
    border: none;
    ${MoreInfo} {
      overflow: inherit;
      clip-path: none;
      margin: 0;
      text-align: center;
      transform: translateY(-50%);
      clip: auto;
      top: 50%;
      left: 0;
      width: 100%;
      ${zIndex('medium')};
    }
    ::after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.color('red')};
    }
  }
`;

export { Wrapper, MoreInfo, Item };
