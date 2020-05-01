import styled from 'styled-components';

import Input from '../../Atoms/Input/Input';
import { media } from '../../../theme/shared/size';
import spacing from '../../../theme/shared/spacing';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

const InnerWrapper = styled.div`
  margin: ${spacing('md')} auto;
  padding: 0 calc((4 * ${spacing('xsm')}));
`;

const SearchBox = styled.div`
  margin: ${spacing('xl')} auto;
  width: 100%;
  border-bottom: 4px solid ${({ theme }) => theme.color('red')};
  overflow: hidden;
`;

const SearchWrapper = styled.div`
  width: 100%;
  padding: 0 ${spacing('sm')};
`;

const SearchField = styled(Input)`
  padding: 13px 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize('md')};
  max-width: 100%;
  border: 0;
  outline: ${({ theme }) => theme.color('red')};
  :focus {
    border: 0;
  }
  ${media('small')} {
    height: 100px;
    font-size: ${({ theme }) => theme.fontSize('xxl')};
  }
`;

export { Wrapper, InnerWrapper, SearchBox, SearchWrapper, SearchField };
