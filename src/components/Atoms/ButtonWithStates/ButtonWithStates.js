import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScaleLoader from 'react-spinners/ScaleLoader';
import spacing from '../../../theme/shared/spacing';
import Button from '../Button/Button';

const ButtonWithDisabledState = styled(Button)`
  &:disabled {
    cursor: not-allowed;
    opacity: 0.75;
  }
`;

const LoaderContainer = styled.div`${({ withMargin }) => (withMargin ? `
  margin-top: ${spacing('xsm')};
  margin-left: ${spacing('md')};
` : '')}`;

// A button with loading and disabled states.
const ButtonWithStates = React.forwardRef(({
  children, loadingText, loading, disabled, ...rest
}, ref) => {
  const [loaderColour, setLoaderColour] = useState(null);

  // Can't see a simpler way to get the button's text colour, without reading the value
  //  via JavaScript.
  //  (e.g. the `theme.buttonColours` helper returns a CSS string split into an array -
  //  don't really want to be parsing that.)
  //  (And can't use inherit because ScaleLoader's color prop is actually setting its
  //  background color.)
  const getLoaderColour = useCallback(node => {
    if (node && typeof window.getComputedStyle === 'function') {
      const textColour = window.getComputedStyle(node).color;
      if (textColour) {
        setLoaderColour(textColour);
      }
    }
  }, []);

  return (
    <ButtonWithDisabledState ref={ref} disabled={disabled} {...rest}>
      {loading ? loadingText : children}
      <LoaderContainer ref={getLoaderColour} withMargin={loading}>
        <ScaleLoader height={16} width={2} loading={loading} color={loaderColour} />
      </LoaderContainer>
    </ButtonWithDisabledState>
  );
});

ButtonWithStates.propTypes = {
  children: PropTypes.node.isRequired,
  loadingText: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool
};

ButtonWithStates.defaultProps = {
  loading: false,
  disabled: false,
  loadingText: 'Loading'
};

export default ButtonWithStates;
