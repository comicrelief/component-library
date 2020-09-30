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
  padding: ${spacing('l')} ${spacing('xl')};
`;

const ChevAnima = keyframes`
 0% { margin-top: 0rem; }
 50% { margin-top: 0.5rem; }
 100% { margin-top: 0rem; }
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  transition: bottom 0.1s linear;
  &:focus,
  &:hover {
    outline: none;
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

const Header = styled.div`
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
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
      <Header>
        <Button onClick={handleOpen} aria-expanded={isOpen ? 'true' : 'false'}>
          {title}
          <Icon>
            <Chevron colour="black" direction={isOpen ? 'up' : 'down'} />
          </Icon>
        </Button>
      </Header>
      <Copy style={{ height: isOpen ? 'auto' : '0' }} ref={stageCanvasRef} isOpen={isOpen}>{children}</Copy>
    </Container>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired
};

export default Accordion;
