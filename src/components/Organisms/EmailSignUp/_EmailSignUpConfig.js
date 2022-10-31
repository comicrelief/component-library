import { merge } from 'lodash';
import * as yup from 'yup';

/**
 * ESU_FIELDS
 *
 * Exposes an enum to consumer of the component, to accurately access the underlying field names.
 * can be used in conjunction with RHF or buildEsuValidationSchema
 * to customise form validation or behaviour, as the fields are handled within the CL
 * we just make this read-only to prevent any external changes of this object.
 */
const ESU_FIELDS = Object.freeze({
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  EMAIL: 'email'
});

/**
 * buildEsuValidationSchema
 *
 * Exposes a function that can be passed a partial or complete yup schema
 * to extend or override the default buildEsuValidationSchema
 *
 * @param overrides {Object} - A yup schema object (or an empty object)
 */
const buildEsuValidationSchema = overrides => {
  const defaultSchema = yup.object({
    [ESU_FIELDS.FIRST_NAME]: yup
      .string()
      .required('Please enter your first name')
      .matches(
        /^[A-Za-z][A-Za-z' -]*$/,
        "This field only accepts letters and ' - and must start with a letter"
      )
      .max(25, 'Your first name must be between 1 and 25 characters'),
    [ESU_FIELDS.LAST_NAME]: yup
      .string()
      .required('Please enter your last name')
      .matches(
        /^[A-Za-z][A-Za-z' -]*$/,
        "This field only accepts letters and ' - and must start with a letter"
      )
      .max(50, 'Your first name must be between 1 and 50 characters'),
    [ESU_FIELDS.EMAIL]: yup
      .string()
      .required('Please enter your email address')
      .email('Please enter a valid email address')
      .max(100, 'Your email address must be between 1 and 100 characters long')
  });

  return merge(defaultSchema, overrides);
};

export { ESU_FIELDS, buildEsuValidationSchema };
