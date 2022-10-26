import React from 'react';
import PropTypes from 'prop-types';
// import Select from '../../Atoms/Select/Select';
// import Text from '../../Atoms/Text/Text';
import {
  ESUWrapper,
  TopCopyWrapper,
  FormInner,
  PrivacyCopyWrapper,
  InputField,
  ButtonWrapper,
  Title
} from './EmailSignUp.style';
import { Button } from '../Membership/Membership.style';
import Text from '../../Atoms/Text/Text';
import { buildEsuValidationSchema, FIELDS } from './_EmailSignUpConfig';

const EmailSignUp = ({
  title,
  topCopy,
  isSchools,
  schoolsCopy,
  successCopy,
  privacyCopy,
  buttonColor,
  backgroundColor,
  formContext,
  ...rest
}) => (
  <ESUWrapper backgroundColor={backgroundColor} {...rest}>
    <Title tag="h2" size="xxl" weight="400" family="Anton" uppercase>
      {title}
    </Title>
    <TopCopyWrapper>
      <Text>{topCopy}</Text>
    </TopCopyWrapper>
    <FormInner>
      <InputField
        fieldName={FIELDS.FIRST_NAME}
        id="first-name"
        type="text"
        label="First Name"
        placeholder="Lenny"
        formContext={formContext}
      />
      <InputField
        fieldName={FIELDS.LAST_NAME}
        id="last-name"
        type="text"
        label="Last Name"
        placeholder="Henry"
        formContext={formContext}
      />
      <InputField
        fieldName={FIELDS.EMAIL}
        id="email"
        type="email"
        label="Email Address"
        placeholder="lenny@comicrelief.com"
        formContext={formContext}
      />
      <ButtonWrapper>
        <Button
          as="input"
          type="submit"
          data-test={isSchools ? 'subscribe-button-school' : 'subscribe-button'}
          color={buttonColor}
          value=" Subscribe"
        />
      </ButtonWrapper>
    </FormInner>
    <PrivacyCopyWrapper>
      <Text>{privacyCopy}</Text>
    </PrivacyCopyWrapper>
  </ESUWrapper>
);

EmailSignUp.propTypes = {
  title: PropTypes.string.isRequired,
  topCopy: PropTypes.node.isRequired,
  successCopy: PropTypes.node.isRequired,
  isSchools: PropTypes.bool,
  errorMsg: PropTypes.string.isRequired,
  privacyCopy: PropTypes.node.isRequired,
  schoolsCopy: PropTypes.node,
  backgroundColor: PropTypes.string,
  buttonColor: PropTypes.string,
  formContext: PropTypes.shape()
};

EmailSignUp.defaultProps = {
  backgroundColor: 'deep_violet_dark',
  buttonColor: 'red',
  isSchools: false,
  schoolsCopy: '',
  formContext: null
};

export { EmailSignUp, buildEsuValidationSchema, FIELDS };
