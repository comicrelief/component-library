import React from 'react';
import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';
import media from '../../../theme/shared/breakpoint';

const LabelGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  width: auto;
  height: 48px;
  border-radius: 2rem;
  background-color: #d5d5d5;
  margin: ${spacing('sm')} ${spacing('sm')} 0 0;
  padding: 4px;
  padding-right: 1rem;
  flex: 0 0 auto;
  position: relative;
  ${media('small')} {
    margin: ${spacing('md')} ${spacing('md')} 0 0;
  }
`;

const Overlay = styled.span`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  border-radius: 2rem;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  ${zIndex('low')};
  :hover {
    background: ${({ theme }) => theme.color('grey_medium')};
  }
`;

const CheckInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize('sm')};
  display: block;
  box-sizing: border-box;
  opacity: 0;
  position: absolute;
  left: 0px;
  width: 40px;
  height: 40px;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.color('grey_for_forms')};
  + span {
    background-size: 24px;
    margin-right: ${spacing('md')};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color('grey')};
    float: left;
    ${zIndex('medium')};
  }
  :checked ~ span {
    background-size: 24px;
    background-color: ${({ theme }) => theme.color('purple')};
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

const Chips = categories => {
  return (
    <LabelGroup>
      {categories.categories.map(category => (
        <CheckLabel key={category.id}>
          <CheckInput
            onChange={() => console.log('function')}
            type="checkbox"
            checked={category.checked}
            value={category.fieldValue}
          />
          <span />
          <Overlay />
          {category.fieldValue}
        </CheckLabel>
      ))}
    </LabelGroup>
  );
};

export default Chips;
