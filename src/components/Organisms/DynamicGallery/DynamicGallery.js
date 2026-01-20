import React from 'react';
import styled from 'styled-components';
import Text from '../../Atoms/Text/Text';

const Container = styled.div`
  
`;

const DynamicGallery = ({ ...rest }) => (
  <Container {...rest}>
    <Text>Dynamic Gallery</Text>
  </Container>
);

DynamicGallery.propTypes = {

};

export default DynamicGallery;
