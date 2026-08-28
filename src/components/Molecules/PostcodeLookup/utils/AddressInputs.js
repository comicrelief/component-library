import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../Atoms/Input/Input';
import spacing from '../../../../theme/shared/spacing';

const Wrapper = styled.div`
  margin-top: ${spacing('md')};
`;

const FieldWrapper = styled.div`
  margin-bottom: ${spacing('md')};
`;

export default function AddressInputs({ addressFields }) {
  return (
    <Wrapper>
      <FieldWrapper>
        <Input
          id="address-line1"
          name="line1"
          label="Address line 1"
          type="text"
          value={addressFields.line1 || ''}
          placeholder="Address line 1"
          showLabel
          optional={false}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Input
          id="address-line2"
          name="line2"
          label="Address line 2"
          type="text"
          value={addressFields.line2 || ''}
          placeholder="Address line 2"
          showLabel
          optional
        />
      </FieldWrapper>
      <FieldWrapper>
        <Input
          id="address-line3"
          name="line3"
          label="Address line 3"
          type="text"
          value={addressFields.line3 || ''}
          placeholder="Address line 3"
          showLabel
          optional
        />
      </FieldWrapper>
      <FieldWrapper>
        <Input
          id="address-posttown"
          name="posttown"
          label="Town/City"
          type="text"
          value={addressFields.posttown || ''}
          placeholder="Town/City"
          showLabel
          optional={false}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Input
          id="address-postcode"
          name="postcode"
          label="Postcode"
          type="text"
          value={addressFields.postcode || ''}
          placeholder="Postcode"
          showLabel
          optional={false}
        />
      </FieldWrapper>
    </Wrapper>
  );
}

AddressInputs.propTypes = {
  addressFields: PropTypes.shape({
    postcode: PropTypes.string,
    line1: PropTypes.string,
    line2: PropTypes.string,
    line3: PropTypes.string,
    posttown: PropTypes.string
  }).isRequired
};
