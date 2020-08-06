import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import Text from '../../Atoms/Text/Text';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  padding: calc(${spacing('md')} + ${spacing('m')}) calc(${spacing('m')} * 2);
`;

const Title = styled(Text)`
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin: 0 0 ${spacing('md')};
`;

const Accordion = ({ children, title }) => (
  <Container>
    <Title tag="h6" family="Anton" weight="normal">{title}</Title>
    {children}
  </Container>
);

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Accordion;
