import * as yup from 'yup';
import { merge } from 'lodash';
import { fix as fixPostcode, isValid } from 'postcode';

const setInitialValues = overrideValues => {
  const defaultValues = {
    mp_email: '',
    mp_mobile: '',
    mp_phone: '',
    mp_address1: '',
    mp_address2: '',
    mp_address3: '',
    mp_town: '',
    mp_country: '',
    mp_postcode: '',
    mp_permissionEmail: false,
    mp_permissionPost: false,
    mp_permissionPhone: false,
    mp_permissionSMS: false
  };

  // Override with any custom options supplied
  const updatedValues = merge(defaultValues, overrideValues);

  return updatedValues;
};

const buildValidationSchema = overrideOptions => {
  const defaultOptions = {
    mp_permissionEmail: {
      /**
        * As per react-hook-form's validation requirements, sets the fields' required attribute
        * for each checkbox option (now only 'Yes' as of 2023), a non-required field isn't rendered
        * or included in the validation. As the backend *currently* needs values to formalise
        * a user's opt-out, we'll set all fields to 'required' by default
        * (once the option is chosen).
        */
      yes: true,
      // Hide the input from user interaction, but keep it in the DOM so we can pass values to it
      hideInput: false,
      // Allows complete removal of the option (checkboxes & fields) from both render & validation.
      disableOption: false

    },
    mp_permissionSMS: {
      yes: true,
      hideInput: false,
      disableOption: false
    },
    mp_permissionPhone: {
      yes: true,
      hideInput: false,
      disableOption: false
    },
    mp_permissionPost: {
      yes: true,
      hideInput: false,
      disableOption: false
    }
  };

  // Override with any custom options supplied
  const mpValidationOptions = merge(defaultOptions, overrideOptions);

  const phoneRegex = /^(((((\+44)|(0044))\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((((\+44)|(0044))\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((((\+44)|(0044))\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\\#(\d{4}|\d{3}))?$/;

  const validatePostcode = (postcode) => {
    const fixed = fixPostcode(postcode || '');
    return isValid(fixed) && fixed;
  };

  const mpValidationFields = {
    mp_email: yup.string()
      .when('mp_permissionEmail', {
        is: val => (!(mpValidationOptions.mp_permissionEmail.disableOption)
      && mpValidationOptions.mp_permissionEmail[val]),
        then: schema => schema.required('Please enter your email address').email('Please enter a valid email address')
      }),

    mp_mobile: yup.string()
      .when('mp_permissionSMS', {
        is: val => (!(mpValidationOptions.mp_permissionSMS.disableOption)
        && mpValidationOptions.mp_permissionSMS[val]),
        then: schema => schema.required('Please enter your mobile number')
          .matches(phoneRegex, 'Please enter a valid UK mobile number')
      }),

    mp_phone: yup.string()
      .when('mp_permissionPhone', {
        is: val => (!(mpValidationOptions.mp_permissionPhone.disableOption)
        && mpValidationOptions.mp_permissionPhone[val]),
        then: schema => schema.required('Please enter your phone number')
          .matches(phoneRegex, 'Please enter a valid UK phone number')
      }),

    mp_address1: yup.string()
      .when('mp_permissionPost', {
        is: val => (!(mpValidationOptions.mp_permissionPost.disableOption)
      && mpValidationOptions.mp_permissionPost[val]),
        then: schema => schema.required('Please enter the first line of your address')
          .matches(/^[a-zA-Z0-9][a-zA-Z0-9'.,/()& -]*$/, 'This field only accepts alphanumeric characters and , . ( ) / & \' - and must start with an alphanumeric character')
          .max(50, 'Please enter a maximum of 50 characters')
      }),

    mp_town: yup.string()
      .when('mp_permissionPost', {
        is: val => (!(mpValidationOptions.mp_permissionPost.disableOption)
        && mpValidationOptions.mp_permissionPost[val]),
        then: schema => schema.required('Please enter your town')
          .matches(/^[a-zA-Z0-9][a-zA-Z0-9'.,/()& -]*$/, 'This field only accepts alphanumeric characters and , . ( ) / & \' - and must start with an alphanumeric character')
          .max(50, 'Please enter a maximum of 50 characters')
      }),

    mp_postcode: yup.string().when('mp_permissionPost', {
      is: val => (!(mpValidationOptions.mp_permissionPost.disableOption)
      && mpValidationOptions.mp_permissionPost[val]),
      then: schema => schema.required('Please enter your postcode').test('postcode-valid', 'Please enter a valid postcode', validatePostcode)
    }),

    mp_country: yup.string().when('mp_permissionPost', {
      is: val => (!(mpValidationOptions.mp_permissionPost.disableOption)
      && mpValidationOptions.mp_permissionPost[val]),
      then: schema => schema.required('Please enter your country')
        .matches(/^[a-zA-Z0-9][a-zA-Z0-9'.,/()& -]*$/, 'This field only accepts alphanumeric characters and , . ( ) / & \' - and must start with an alphanumeric character')
        .max(50, 'Please enter a maximum of 50 characters')
    }),

    /*  Non-required fields */
    mp_address2: yup.string()
      .max(50, 'Please enter a maximum of 50 characters'),

    mp_address3: yup.string()
      .max(50, 'Please enter a maximum of 50 characters')
  };

  const mpValidationSchema = yup.object(mpValidationFields);

  return {
    mpValidationSchema,
    mpValidationOptions,
    // Return the raw fields object too, to make for easier schema-combining:
    mpValidationFields
  };
};

export { setInitialValues, buildValidationSchema };
