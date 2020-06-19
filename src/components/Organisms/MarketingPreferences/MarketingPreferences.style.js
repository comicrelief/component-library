import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import { media } from '../../../theme/shared/size';
import checkBoxIcon from './assets/checkbox-white-tick.png';

const CopyWrapper = styled.div`
  margin: ${spacing('l')} 0;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${media('small')} {
    flex-direction: row;
  }
`;

const Body = styled.div`
  ${media('small')} {
    width: 50%;
  }
`;

const Field = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color('grey_medium')};
  margin-bottom: ${spacing('l')};
  label {
    margin-bottom: ${spacing('md')};
  }
`;

const CheckContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing('l')};
  font-size: ${({ theme }) => theme.fontSize('md')};
  font-family: ${({ theme }) => theme.fontFamilies(theme.font.regular)};
  ${media('small')} {
    width: 50%;
    justify-content: flex-end;
    margin-bottom: ${spacing('m')};
  }
`;

const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  ${media('small')} {
    margin-left: ${spacing('l')};
  }
`;

const CheckInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize('sm')};
  display: block;
  box-sizing: border-box;
  opacity: 0;
  position: absolute;
  left: 0px;
  width: 30px;
  height: 30px;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.color('grey_for_forms')};
  + span {
    margin-right: 5px;
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.color('white')};
    border: 1px solid ${({ theme }) => theme.color('grey_for_forms')};
    float: left;
  }
  :checked + span {
    background: url(${checkBoxIcon}) no-repeat center;
    background-color: ${({ theme }) => theme.color('purple')};
    background-size: contain;
  }
  :focus + span {
    border-color: ${({ theme }) => theme.color('grey_for_forms')};
    border-width: 3px;
  }
  :focus + span {
    border-color: ${({ theme }) => theme.color('grey_for_forms')};
    border-width: 3px;
  }
`;

export {
  CopyWrapper,
  Head,
  Body,
  Field,
  CheckLabel,
  CheckInput,
  CheckContainer
};
