import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../../Atoms/Text/Text';
import CloseCross from '../assets/close.svg';

const closeDuration = 0.6;

const fadeClose = keyframes`
  0% {
    opacity: 1;
    max-height: 350px;
  }
  100% {
    opacity: 0;
    max-height: 0px;
    display: none;
    margin-top: -16px;
  }
`;

const fadeOpen = keyframes`
  0% {
    opacity: 0;
    max-height: 0px;
    display: none;
    margin-top: -16px;
  }
  100% {
    opacity: 1;
    max-height: 350px;
  }
`;

const StyledPopUp = styled.div`
  display: grid;
  overflow: hidden;
  max-height: 350px;
  opacity: 1;
  animation: 0.4s ${props => props.fadeOpen} ease;
  ${props => props.isClosed && css`
    animation: ${closeDuration}s ${props.fadeClose} ease forwards;
  `}
  background-color: ${({ theme }) => theme.color('blue_light')};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
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
  background-color: transparent;
  border: 0;
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: 3px;
  :active,
  :focus,
  :hover {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color('grey')};
  }

  img {
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }
`;

const PopUpComponent = ({ popUpText, setPopOpen }) => {
  const [isClosed, setIsClosed] = useState(false);

  // Only update centralised state - which renders
  // this component - once the closing animation is complete
  const handleCloser = () => {
    setIsClosed(true);
    setTimeout(() => {
      setPopOpen(false);
    }, closeDuration * 1000);
  };

  return (
    <StyledPopUp isClosed={isClosed} fadeOpen={fadeOpen} fadeClose={fadeClose}>
      <Button onClick={() => handleCloser()} aria-label="Close">
        <img src={CloseCross} alt="Close cross icon" />
      </Button>
      <TextWrapper>
        <Text>{ popUpText }</Text>
      </TextWrapper>
    </StyledPopUp>
  );
};

PopUpComponent.propTypes = {
  popUpText: PropTypes.string.isRequired,
  setPopOpen: PropTypes.func.isRequired
};

export default PopUpComponent;
