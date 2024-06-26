import styled from 'styled-components';

import Input from '../../Atoms/Input/Input';
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
  input {
    padding: 13px 0;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize('md')};
    max-width: 100%;
    border: 0;
    outline: ${({ theme }) => theme.color('red')};
    background: none;
    :focus {
      border: 0;
    }
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      height: 100px;
      font-size: ${({ theme }) => theme.fontSize('xxl')};
    }
  }
`;

export {
  Wrapper, InnerWrapper, SearchBox, SearchWrapper, SearchField
};
