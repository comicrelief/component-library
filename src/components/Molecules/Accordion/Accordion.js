import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import { Chevron } from '../../Atoms/Icons/index';

const Container = styled.div`
  position: relative;
  border-radius: 1rem;
  background: ${({ theme }) => theme.color('white')};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  padding: ${spacing('l')} ${spacing('xxl')} ${spacing('l')} ${spacing('xl')};
`;

const ChevAnima = keyframes`
 0% { margin-top: 0rem; }
 50% { margin-top: 0.2rem; }
 100% { margin-top: 0rem; }
`;

const Button = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.color('red')};
  position: absolute;
  bottom: -1rem;
  right: calc(${spacing('m')} * 2);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.color('red')};
  transition: bottom 0.1s linear;
  &:focus,
  &:hover {
    outline: none;
    border: 2px solid ${({ theme }) => theme.color('red_dark')};
    > div {
      animation-name: ${ChevAnima};
      animation-duration: 0.4s;
    }
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Copy = styled.div`
  overflow: hidden;
  visibility: none;
  transition: all 0.2s cubic-bezier(0.21, 1.7, 0.83, 0.68) 0s;
  ${({ isOpen }) => (isOpen && css`
    visibility: visible;
    margin-top: ${spacing('l')};
    transition: all 0.2s cubic-bezier(0.21, 1.7, 0.83, 0.68) 0s;
  `)}
`;

const Accordion = ({ children, title }) => {
  const [height, setHeight] = useState('auto');
  const [isOpen, setIsOpen] = useState(false);
  const stageCanvasRef = useRef(null);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (stageCanvasRef.current) {
      setHeight(stageCanvasRef.current.getBoundingClientRect().height);
    }
  }, [height]);

  return (
    <Container>
      {title}
      <Copy style={{ height: isOpen ? 'auto' : '0' }} ref={stageCanvasRef} isOpen={isOpen}>{children}</Copy>
      <Button onClick={handleOpen} aria-expanded={isOpen ? 'true' : 'false'}>
        <Icon>
          <Chevron direction={isOpen ? 'up' : 'down'} />
        </Icon>
      </Button>
    </Container>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired
};

export default Accordion;
