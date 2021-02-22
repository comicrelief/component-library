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
      // As per react-hook-form's validation requirements, sets the fields 'required' attribute for each checkbox option (yes & no),
      // also stopping it being rendered and included in the validation.
      // As the ERP currently needs values to provide an opt-out, will set these to all default to 'required' if option is chosen.
      yes: true,
      no: true,
      // Allows us to remove the option completely (checkboxes, input fields; the lot) from both render AND validation:
      disableOption: false
    },
    mp_permissionSMS: {
      yes: true,
      no: true,
      disableOption: false
    },
    mp_permissionPhone: {
      yes: true,
      no: true,
      disableOption: false
    },
    mp_permissionPost: {
      yes: true,
      no: true,
      disableOption: false
    }
  };

  // Override with any custom options supplied
  const mpValidationOptions = merge(defaultOptions, overrideOptions);

  const mpValidationSchema = yup.object({
    mp_email: yup.string().when('mp_permissionEmail', {
      is: () => (!(mpValidationOptions.mp_permissionEmail.disableOption || mpValidationOptions.mp_permissionEmail.hideInput)),
      then: yup.string().email('Please enter a valid email address')
      // Set the 'required' attribute based on the associated config
        .when('mp_permissionEmail', {
          is: val => (mpValidationOptions.mp_permissionEmail[val]),
          then: yup.string().required('Please enter your email address')
        })
    }),

    mp_mobile: yup.string()
      // Set 'required' rule based on config, show error if true
      .when('mp_permissionSMS', {
        is: val => (mpValidationOptions.mp_permissionSMS[val]),
        then: yup.string().required('Please enter your mobile number')
      })
      .when('mp_permissionSMS', {
        is: val => (!(mpValidationOptions.mp_permissionSMS.disableOption) && mpValidationOptions.mp_permissionSMS[val]),
        then: yup.string().phone('GB', false, 'Please enter a valid mobile number')
      }),

    mp_phone: yup.string()
      // Set 'required' rule based on config, show error if true
      .when('mp_permissionPhone', {
        is: val => (mpValidationOptions.mp_permissionPhone[val]),
        then: yup.string().required('Please enter your phone number')
      })
      .when('mp_permissionPhone', {
        is: val => (!(mpValidationOptions.mp_permissionPhone.disableOption) && mpValidationOptions.mp_permissionPhone[val]),
        then: yup.string().phone('GB', false, 'Please enter a valid phone number')
      }),

    mp_address1: yup.string().when('mp_permissionPost', {
      is: () => (!(mpValidationOptions.mp_permissionPost.disableOption)),
      then: yup.string().max(50, 'Please enter a maximum of 50 characters')
        .when('mp_permissionPost', {
          is: val => (mpValidationOptions.mp_permissionPost[val]),
          then: yup.string().required('Please enter the first line of your address')
        })
    }),

    mp_town: yup.string().when('mp_permissionPost', {
      is: () => (!(mpValidationOptions.mp_permissionPost.disableOption)),
      then: yup.string().max(50, 'Please enter a maximum of 50 characters')
        .when('mp_permissionPost', {
          is: val => (mpValidationOptions.mp_permissionPost[val]),
          then: yup.string().required('Please enter your town')
        })
    }),

    mp_postcode: yup.string().when('mp_permissionPost', {
      is: val => (!(mpValidationOptions.mp_permissionPost.disableOption) && val[0] !== undefined && mpValidationOptions.mp_permissionPost[val]),
      then: yup.string().matches(/^[a-zA-Z]{1,2}\d[a-zA-Z\d]?\s*\d[a-zA-Z]{2}$/, 'Please enter a valid postcode')
        .when('mp_permissionPost', {
          is: val => (mpValidationOptions.mp_permissionPost[val]),
          then: yup.string().required('Please enter your postcode')
        })
    }),

    mp_country: yup.string().when('mp_permissionPost', {
      is: () => (!(mpValidationOptions.mp_permissionPost.disableOption)),
      then: yup.string().max(20, 'Please enter a maximum of 20 characters')
        .when('mp_permissionPost', {
          is: val => (mpValidationOptions.mp_permissionPost[val]),
          then: yup.string().required('Please enter your country')
        })
    }),

    /*  Non-required fields */
    mp_address2: yup.string().max(50, 'Please enter a maximum of 50 characters'),
    mp_address3: yup.string().max(50, 'Please enter a maximum of 50 characters')
  });

  return {
    mpValidationSchema,
    mpValidationOptions
  };
};

export { setInitialValues, buildValidationSchema };
