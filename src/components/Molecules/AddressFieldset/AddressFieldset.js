import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import Postcode from 'postcode';
import * as Yup from 'yup';

import Input from '../../Atoms/Input/Input';

/**
 * A simple set of address fields for use in any Formik-powered form.
 *
 * As well as the component, it exports a couple of things that should be added to the <Formik> component's props:
 *  - A set of Yup validation rules to be incorporated in your `validationSchema` prop
 *  - The default initial values to add to the `initialValues` prop
 */
const AddressFieldset = ({ labelMap, formikProps, ...rest }) => {
  const { errors, touched } = formikProps;

  const getFieldProps = fieldName => ({
    as: Input,
    id: fieldName,
    type: 'text',
    name: fieldName,
    label: labelMap[fieldName],
    errorMsg: touched[fieldName] && errors[fieldName]
  });

  return (
    <fieldset {...rest}>
      <Field {...getFieldProps('name')} />
      <Field {...getFieldProps('line1')} />
      <Field {...getFieldProps('line2')} />
      <Field {...getFieldProps('line3')} />
      <Field {...getFieldProps('town')} />
      <Field {...getFieldProps('postcode')} />
    </fieldset>
  );
};

const DEFAULT_INITIAL_VALUES = {
  name: '',
  line1: '',
  line2: '',
  line3: '',
  town: '',
  postcode: ''
};

const DEFAULT_LABEL_MAP = {
  name: 'Name',
  line1: 'Address line 1',
  line2: 'Address line 2',
  line3: 'Address line 3',
  town: 'Town',
  postcode: 'Postcode'
};

/**
 * This object would be passed into Yup.object().shape() to make a validation schema for
 *  Formik's validationSchema prop, for example:
 *
 *  const validationSchema = Yup.object().shape(AddressFieldsetValidationRules);
 *
 * or...
 *
 *  const validationSchema = Yup.object().shape({
 *    ...AddressFieldsetValidationRules,
 *    anotherField: Yup.string().required(),
 *    ...moreValidationRules
 *  });
 *
 * Todo: do we need any more extensive validation? e.g. min/max string lengths?
 */
const AddressFieldsetValidationRules = {
  name: Yup.string().required('This field is required'),
  line1: Yup.string().required('This field is required'),
  line2: Yup.string(),
  line3: Yup.string(),
  town: Yup.string().required('This field is required'),
  postcode: Yup.string()
    .required('This field is required')
    .test(
      'valid-postcode',
      'Please provide a valid postcode',
      v => v && Postcode.isValid(v)
    )
};

AddressFieldset.propTypes = {
  labelMap: PropTypes.objectOf(PropTypes.string),
  formikProps: PropTypes.objectOf(PropTypes.any).isRequired
};

AddressFieldset.defaultProps = {
  labelMap: DEFAULT_LABEL_MAP
};

export {
  AddressFieldset,
  DEFAULT_INITIAL_VALUES,
  DEFAULT_LABEL_MAP,
  AddressFieldsetValidationRules
};
