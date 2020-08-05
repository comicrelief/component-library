import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
`;

const Accordion = ({ children, title }) => (
  <Container>
    <h1>{title}</h1>
    {children}
  </Container>
);

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Accordion;
