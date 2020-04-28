import styled from 'styled-components';

import Input from '../../Atoms/Input/Input';
import { media } from '../../../theme/shared/size';
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
  width: 100%;
  border-bottom: 4px solid ${({ theme }) => theme.color('red')};
  overflow: hidden;
  ${media('small')} {
    padding-bottom: ${spacing('sm')};
  }
`;

const SearchWrapper = styled.div`
  width: 90%;
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

const ActionWrapper = styled(SearchWrapper)`
  margin: ${spacing('none')};
  width: 60px;
  ${media('small')} {
    width: 70px;
  }
`;

const ActionButton = styled(SearchField)`
  height: 76px;
  text-indent: -9999px;
  background-color: ${({ theme }) => theme.color('grey_for_forms')};
  mask: url(${searchIcon}) no-repeat right center;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    background: url(${searchIcon}) no-repeat right center;
  }
  mask-size: 50%;
  width: 100%;
  appearance: none;
  ${media('small')} {
    mask-size: 100%;
    width: 100%;
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
