import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import Postcode from 'postcode';

import Input from '../../Atoms/Input/Input';

const DEFAULT_LABEL_MAP = {
  name: 'Name',
  line1: 'Address line 1',
  line2: 'Address line 2',
  line3: 'Address line 3',
  town: 'Town',
  postcode: 'Postcode'
};
const POSTCODE_INVALID_MESSAGE = 'Please provide a valid postcode';
const getRequiredFieldMsg = label => `${label} is required`;
const defaultIfUndefined = (value, defaultValue) =>
  value === undefined ? defaultValue : value;

/**
 * Todo:
 *  - I think it needs to be possible for a parent component to trigger submission and validation itself?
 *   (Via it's own submit button)
 *   (Or perhaps it just doesn't make sense to have this generic address form component at all?)
 *  - Proper styling
 *  - Responsiveness
 *  - Accessibility
 *  - Tests
 *  - ??
 */
const AddressForm = ({
  name,
  line1,
  line2,
  line3,
  town,
  postcode,
  labelMap,
  requiredFields,
  onValidSubmission,
  ...formikProps
}) => {
  const onSubmit = (values, { setSubmitting }) => {
    onValidSubmission(values);
    setSubmitting(false);
  };

  const validator = values => {
    const errors = {};

    requiredFields.forEach(requiredField => {
      if (!values[requiredField]) {
        errors[requiredField] = getRequiredFieldMsg(labelMap[requiredField]);
      }
    });

    if (values.postcode && Postcode.isValid(values.postcode) === false) {
      errors.postcode = POSTCODE_INVALID_MESSAGE;
    }

    return errors;
  };

  const {
    validateOnChange,
    validateOnBlur,
    enableReinitialize,
    ...otherFormikProps
  } = formikProps;

  return (
    <Formik
      initialValues={{ name, line1, line2, line3, town, postcode }}
      onSubmit={onSubmit}
      validate={validator}
      // Validate on submit only (but can override these defaults with formikProps}
      validateOnChange={defaultIfUndefined(validateOnChange, false)}
      validateOnBlur={defaultIfUndefined(validateOnBlur, false)}
      // If true, the form will re-initialize if passed-in props change (i.e. initial values)
      enableReinitialize={defaultIfUndefined(enableReinitialize, true)}
      {...otherFormikProps}
    >
      {({ isSubmitting, errors }) => {
        const defaults = { errors, labelMap };
        return (
          <Form>
            <AddressInput fieldName="name" {...defaults} />
            <AddressInput fieldName="line1" {...defaults} />
            <AddressInput fieldName="line2" {...defaults} />
            <AddressInput fieldName="line3" {...defaults} />
            <AddressInput fieldName="town" {...defaults} />
            <AddressInput fieldName="postcode" {...defaults} />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

const AddressInput = ({ fieldName, errors, labelMap }) => (
  <Field
    as={Input}
    id={fieldName}
    type="text"
    name={fieldName}
    label={labelMap[fieldName]}
    errorMsg={errors[fieldName]}
  />
);

AddressInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  labelMap: PropTypes.objectOf(PropTypes.string).isRequired
};

AddressForm.propTypes = {
  name: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string,
  town: PropTypes.string,
  postcode: PropTypes.string,
  labelMap: PropTypes.objectOf(PropTypes.string),
  requiredFields: PropTypes.arrayOf(PropTypes.string),
  onValidSubmission: PropTypes.func.isRequired
};

AddressForm.defaultProps = {
  name: '',
  line1: '',
  line2: '',
  line3: '',
  town: '',
  postcode: '',
  labelMap: DEFAULT_LABEL_MAP,
  requiredFields: ['name', 'line1', 'town', 'postcode']
};

export default AddressForm;
