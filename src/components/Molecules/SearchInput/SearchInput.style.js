import styled from 'styled-components';

import Input from '../../Atoms/Input/Input';
import spacing from '../../../theme/shared/spacing';
import searchIcon from './assets/search.svg';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

const InnerWrapper = styled.div`
  margin: ${spacing('md')} auto;
  padding: 0 calc((4 * ${spacing('xsm')}));
`;

const Form = styled.form`
  display: flex;
  flex-wrap: no-wrap;
  margin: ${spacing('xl')} auto;
  padding-bottom: ${spacing('md')};
  width: 100%;
  border-bottom: 4px solid ${({ theme }) => theme.color('red')};
  overflow: hidden;
`;

const SearchWrapper = styled.div`
  width: 90%;
  margin: ${spacing('none')};
  margin-left: ${spacing('md')};
  margin-right: ${spacing('sm')};
`;

const SearchField = styled(Input)`
  margin: ${spacing('none')};
  padding: ${spacing('none')};
  font-size: ${({ theme }) => theme.fontSize('md')};
  max-width: 100%;
  border: 0;
  outline: ${({ theme }) => theme.color('red')};
  :focus {
    border: 0;
  }
  @media ${({ theme }) => theme.breakpoint('small')} {
    height: 100px;
    font-size: ${({ theme }) => theme.fontSize('xxl')};
  }
`;

const ActionWrapper = styled(SearchWrapper)`
  margin: ${spacing('none')};
  width: 60px;
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: 70px;
  }
`;

const ActionButton = styled(SearchField)`
  text-indent: -9999px;
  background-color: ${({ theme }) => theme.color('grey_medium')};
  mask: url(${searchIcon}) no-repeat right center;
  mask-size: 85%;
  appearance: none;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.color('deep_violet')};
  }
  @media ${({ theme }) => theme.breakpoint('small')} {
    mask-size: 100%;
  }
`;

export {
  Wrapper,
  InnerWrapper,
  Form,
  SearchWrapper,
  SearchField,
  ActionWrapper,
  ActionButton
};
