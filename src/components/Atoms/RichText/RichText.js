import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DOMPurify from 'dompurify';

export const Inner = styled.div`
  text-align: ${props => props.align};
`;

const RichText = ({ align, markup, ...rest }) => {
  const sanitisedMarkup = DOMPurify.sanitize(markup);

  return (
    <Inner
      align={align}
      dangerouslySetInnerHTML={{ __html: sanitisedMarkup }}
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
