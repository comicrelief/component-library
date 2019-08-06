import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Inner = styled.div`
  text-align: ${props => props.align};
`;

const RichText = ({ align, markup, ...rest }) => {
  return (
    <Inner
      align={align}
      dangerouslySetInnerHTML={{ __html: markup }}
      {...rest}
    />
  );
};

RichText.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  markup: PropTypes.string
};

RichText.defaultProps = {
  align: 'left',
  markup: ''
};

export default RichText;
