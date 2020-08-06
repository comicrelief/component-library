import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import Text from '../../Atoms/Text/Text';

const Container = styled.div`
  position: relative;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  padding: calc(${spacing('md')} + ${spacing('m')}) calc(${spacing('m')} * 2);
`;

const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: -10px;
  right: calc(${spacing('m')} * 2);
`;

const Title = styled(Text)`
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin: 0 0 ${spacing('md')};
`;

const Copy = styled.div`
  margin: ${spacing('l')} 0 ${spacing('m')};
  ${({ isOpen }) => (isOpen ? 'display: block;' : 'display: none;')}
`;

const Accordion = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Title tag="h6" family="Anton" weight="normal">{title}</Title>
      <Copy isOpen={isOpen}>{children}</Copy>
      <Icon onClick={handleOpen}>⬆</Icon>
    </Container>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Accordion;
