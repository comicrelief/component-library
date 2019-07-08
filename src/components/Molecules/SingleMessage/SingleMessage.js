import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: ${({ copyFirst }) =>
      copyFirst === true ? 'row-reverse' : 'row'};
  }
`;

const Copy = styled.div`
  padding: 20px;
  flex: 0 0 50%;
`;

const SingleMessage = ({
  backgroundColor,
  copyFirst,
  imageSet,
  imageAltText,
  children
}) => {
  return (
    <Container backgroundColor={backgroundColor} copyFirst={copyFirst}>
      <Picture
        alt={imageAltText}
        images={imageSet}
        objectFit="cover"
        width="100%"
        height="100%"
      />
      <Copy>{children}</Copy>
    </Container>
  );
};

SingleMessage.propTypes = {
  backgroundColor: PropTypes.string,
  copyFirst: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  imageSet: PropTypes.object,
  imageAltText: PropTypes.string,
  children: PropTypes.node.isRequired
};

SingleMessage.defaultProps = {
  backgroundColor: 'white',
  copyFirst: false,
  imageSet: null,
  imageAltText: ''
};

export default SingleMessage;
