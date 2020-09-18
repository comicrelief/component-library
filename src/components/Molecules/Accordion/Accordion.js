import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import { Chevron } from '../../Atoms/Icons/index';

const Container = styled.div`
  position: relative;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  border-radius: 1rem;
  background: ${({ theme }) => theme.color("white")};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  padding: ${spacing('l')} ${spacing('xxl')} ${spacing('l')} ${spacing('xl')};
`;

const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: -1rem;
  right: calc(${spacing('m')} * 2);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: ${({ theme }) => theme.color("red")};
`;

const Copy = styled.div`
  max-height: 0px;
  overflow: hidden;
  transition: all 0.5s linear;
  ${({ isOpen }) => (isOpen && css`
    max-height: 100px;
    margin-top: ${spacing('l')};
    transition: all 0.5s linear;
  `)}
`;

const Accordion = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      {title}
      <Copy isOpen={isOpen}>{children}</Copy>
      <Icon tabindex="0" onClick={handleOpen} role="button" aria-expanded={isOpen ? 'true' : 'false'}>
        <Chevron direction={isOpen ? 'up' : 'down'} />
      </Icon>
    </Container>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired
};

export default Accordion;
