/* eslint-disable max-len */
import * as yup from 'yup';
import 'yup-phone';
import { merge } from 'lodash';

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
    mp_permissionEmail: [],
    mp_permissionPost: [],
    mp_permissionPhone: [],
    mp_permissionSMS: []
  };

  // Override with any custom options supplied
  const updatedValues = merge(defaultValues, overrideValues);
  return updatedValues;
};

const buildValidationSchema = overrideOptions => {
  const defaultOptions = {
    mp_permissionEmail: {
      // As per Formik's validation demands, sets the fields 'required' attribute for each checkbox option (yes & no),
      // also stopping it being rendered and included in the validation:
      yes: true,
      no: false,
      // Allows us to remove the option completely (checkboxes, input fields; the lot) from both render AND validation:
      disableOption: false
    },
    mp_permissionSMS: {
      yes: true,
      no: false,
      disableOption: false
    },
    mp_permissionPost: {
      yes: true,
      no: false,
      disableOption: false
    },
    mp_permissionPhone: {
      yes: true,
      no: false,
      disableOption: false
    }
  };

  // Override with any custom options supplied
  const validationOptions = merge(defaultOptions, overrideOptions);

  const validationSchema = yup.object({

    mp_email: yup.string().when('mp_permissionEmail', {
      is: val => (!(validationOptions.mp_permissionEmail.disableOption || validationOptions.mp_permissionEmail.hideInput) && val[0] !== null),
      then: yup.string().email('Please enter a valid email address')
      // Set the 'required' attribute based on the associated config
        .when('mp_permissionEmail', {
          is: val => (validationOptions.mp_permissionEmail[val] && val[0] !== null),
          then: yup.string().required('Please enter your email address')
        })
    }),

    mp_mobile: yup.string()
    // Set 'required' Formik state based on config, show error if true
      .when('mp_permissionSMS', {
        is: val => (validationOptions.mp_permissionSMS[val]),
        then: yup.string().required('Please enter your mobile number')
      })
    // yup-phone is too keen to validate all the time (regardless of Formik settings), so ensure checkbox checked and 'required' config
      .when('mp_permissionSMS', {
        is: val => (!(validationOptions.mp_permissionSMS.disableOption)
                  && val[0] !== undefined && validationOptions.mp_permissionSMS[val]),
        then: yup.string().phone('GB', false, 'Please enter a valid mobile number')
      }),

    mp_phone: yup.string()
      // Set 'required' Formik state based on config, show error if true
      .when('mp_permissionPhone', {
        is: val => (validationOptions.mp_permissionPhone[val]),
        then: yup.string().required('Please enter your phone number')
      })
      // yup-phone is too keen to validate all the time (regardless of Formik settings), so ensure checkbox checked and 'required' config
      .when('mp_permissionPhone', {
        is: val => (!(validationOptions.mp_permissionPhone.disableOption)
          && val[0] !== undefined && validationOptions.mp_permissionPhone[val]),
        then: yup.string().phone('GB', false, 'Please enter a valid phone number')
      }),

    mp_address1: yup.string().when('mp_permissionPost', {
      is: () => (!(validationOptions.mp_permissionPost.disableOption)),
      then: yup.string().max(50, 'Please enter a maximum of 50 characters')
        .when('mp_permissionPost', {
          is: val => (validationOptions.mp_permissionPost[val]),
          then: yup.string().required('Please enter the first line of your address')
        })
    }),

    mp_town: yup.string().when('mp_permissionPost', {
      is: () => (!(validationOptions.mp_permissionPost.disableOption)),
      then: yup.string().max(50, 'Please enter a maximum of 50 characters')
        .when('mp_permissionPost', {
          is: val => (validationOptions.mp_permissionPost[val]),
          then: yup.string().required('Please enter your town')
        })
    }),

    // TO-DO: valid postcode check
    mp_postcode: yup.string().when('mp_permissionPost', {
      is: () => (!(validationOptions.mp_permissionPost.disableOption)),
      then: yup.string().max(8, 'Please enter a maximum of 8 characters')
        .when('mp_permissionPost', {
          is: val => (validationOptions.mp_permissionPost[val]),
          then: yup.string().required('Please enter your postcode')
        })
    }),

    mp_country: yup.string().when('mp_permissionPost', {
      is: () => (!(validationOptions.mp_permissionPost.disableOption)),
      then: yup.string().max(20, 'Please enter a maximum of 20 characters')
        .when('mp_permissionPost', {
          is: val => (validationOptions.mp_permissionPost[val]),
          then: yup.string().required('Please enter your country')
        })
    }),

    /*  Non-required fields */
    mp_address2: yup.string().max(50, 'Please enter a maximum of 50 characters'),
    mp_address3: yup.string().max(50, 'Please enter a maximum of 50 characters')
  });

  return {
    validationSchema,
    validationOptions
  };
};

export { setInitialValues, buildValidationSchema };
