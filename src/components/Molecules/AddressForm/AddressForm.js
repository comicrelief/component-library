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

/**
 * Todo:
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
  customValidator,
  SubmitButton,

  // Used to provide values, and any errors, to parent component after every validation.
  //  (which happens after every change, unless you alter this behaviour via formikProps.)
  afterValidation,

  // The parent component can control the form's behaviour via the various Formik props such as submitForm,
  //  validateForm, handleSubmit, handleChange, handleBlur.
  // See: https://jaredpalmer.com/formik/docs/api/formik#props-1
  ...formikProps
}) => {
  const validator =
    customValidator ||
    (values => {
      const errors = {};

      requiredFields.forEach(requiredField => {
        if (!values[requiredField]) {
          errors[requiredField] = getRequiredFieldMsg(labelMap[requiredField]);
        }
      });

      if (values.postcode && Postcode.isValid(values.postcode) === false) {
        errors.postcode = POSTCODE_INVALID_MESSAGE;
      }

      afterValidation(values, errors);

      return errors;
    });

  return (
    <Formik
      initialValues={{ name, line1, line2, line3, town, postcode }}
      validate={validator}
      {...formikProps}
    >
      {({ touched, errors, ...otherProps }) => {
        const defaults = { errors, touched, labelMap };
        return (
          <Form>
            <AddressInput fieldName="name" {...defaults} />
            <AddressInput fieldName="line1" {...defaults} />
            <AddressInput fieldName="line2" {...defaults} />
            <AddressInput fieldName="line3" {...defaults} />
            <AddressInput fieldName="town" {...defaults} />
            <AddressInput fieldName="postcode" {...defaults} />
            {SubmitButton && (
              <SubmitButton {...{ touched, errors, ...otherProps }} />
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

const AddressInput = ({ fieldName, errors, touched, labelMap }) => (
  <Field
    as={Input}
    id={fieldName}
    type="text"
    name={fieldName}
    label={labelMap[fieldName]}
    errorMsg={touched[fieldName] && errors[fieldName]}
  />
);

AddressInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
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
  customValidator: PropTypes.func,
  SubmitButton: PropTypes.node,
  afterValidation: PropTypes.func.isRequired
};

AddressForm.defaultProps = {
  name: '',
  line1: '',
  line2: '',
  line3: '',
  town: '',
  postcode: '',
  labelMap: DEFAULT_LABEL_MAP,
  requiredFields: ['name', 'line1', 'town', 'postcode'],
  customValidator: null,
  SubmitButton: null
};

export default AddressForm;
