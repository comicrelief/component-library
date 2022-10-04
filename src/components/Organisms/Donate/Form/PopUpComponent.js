/* eslint-disable */ 
import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../../../Atoms/Text/Text';
import spacing from '../../../../theme/shared/spacing';
import { media } from '../../../../theme/shared/size';
import PropTypes from 'prop-types';
import CloseCross from '../assets/close.svg';

const StyledPopUp = styled.div`
  display: ${props => props.isPop ? "grid" : "none"};
  gap: ${spacing('sm')};
  background-color: ${({ theme }) => theme.color('white')};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  ${media('small')} {
    width: 450px;
    margin-right: auto;
    margin-left: auto;
  }
`;

const TextWrapper = styled.div`
  margin: 0 32px 32px;
`;

const Button = styled.button`
  justify-self: end;
  background: transparent;
  border: 0;
  cursor: pointer;
  :active,
  :focus,
  :hover {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color('grey')};
  }
  margin: 17px 17px 0;
  /* This sets the size of the svg close.svg icon */
  width: 20px;
`;

const PopUpComponent = ({ PopUpText }) => {
  const [isPop, setIsPop] = useState(true);

  return (
    <StyledPopUp isPop={isPop}>
      <Button onClick={() => setIsPop(false)} aria-label="Close">
        <img src={CloseCross} alt="Close cross icon"/>
      </Button>
      <TextWrapper>
        <Text>{ PopUpText }</Text>
      </TextWrapper>
    </StyledPopUp>
  )
};

PopUpComponent.propTypes = {
  PopUpText: PropTypes.string.isRequired
};

export default PopUpComponent;
