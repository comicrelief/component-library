import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Atoms/Input/Input';
import spacing from '../../../theme/shared/spacing';

const Wrapper = styled.div`
  margin-top: ${spacing('md')};
`;

export default function AddressInputs({ addressFields }) {
  return (
    <Wrapper>
      <Input type="text" name="line1" value={addressFields.line1} placeholder="Address Line 1" />
      <Input type="text" name="line2" value={addressFields.line2} placeholder="Address Line 2" />
      <Input type="text" name="line3" value={addressFields.line3} placeholder="Address Line 3" />
      <Input type="text" name="posttown" value={addressFields.posttown} placeholder="Post Town" />
    </Wrapper>
  );
}

AddressInputs.propTypes = {
  addressFields: PropTypes.shape({
    line1: PropTypes.string,
    line2: PropTypes.string,
    line3: PropTypes.string,
    posttown: PropTypes.string
  }).isRequired
};
