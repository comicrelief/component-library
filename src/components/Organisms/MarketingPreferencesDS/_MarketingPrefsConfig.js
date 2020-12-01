import * as yup from 'yup';

const initialValues = {
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

const buildValidationSchema = overrideOptions => {
  const defaultOptions = {
    mp_permissionEmail: { yes: true, no: false },
    mp_permissionPost: { yes: true, no: false },
    mp_permissionPhone: { yes: true, no: false },
    mp_permissionSMS: { yes: true, no: false }
  };

  // Override with any custom options
  const updatedOptions = {
    ...defaultOptions,
    ...overrideOptions
  };

  const validationSchema = yup.object({
    /* 'Required' attributes needs to be set on checkbox status to ensure validation makes sense */
    mp_email: yup.string().max(50, 'Too long').email('Please enter a valid email address')
      .when('mp_permissionEmail', {
        is: val => (updatedOptions.mp_permissionEmail[val]),
        then: yup.string().required('Please enter your mobile number')
      }),

    mp_mobile: yup.string().max(11, 'Too long').when('mp_permissionSMS', {
      is: val => (updatedOptions.mp_permissionSMS[val]),
      then: yup.string().required('Please enter your mobile number')
    }),

    mp_phone: yup.string().max(11, 'Too long').when('mp_permissionPhone', {
      is: val => (updatedOptions.mp_permissionPhone[val]),
      then: yup.string().required('Please enter your phone number')
    }),

    mp_address1: yup.string().max(11, 'Too long').when('mp_permissionPost', {
      is: val => (updatedOptions.mp_permissionPost[val]),
      then: yup.string().required('This field is required')
    }),

    mp_town: yup.string().max(50, 'Too long').when('mp_permissionPost', {
      is: val => (updatedOptions.mp_permissionPost[val]),
      then: yup.string().required('This field is required')
    }),

    mp_postcode: yup.string().max(50, 'Too long').when('mp_permissionPost', {
      is: val => (updatedOptions.mp_permissionPost[val]),
      then: yup.string().required('This field is required')
    }),

    mp_country: yup.string().max(50, 'Too long').when('mp_permissionPost', {
      is: val => (updatedOptions.mp_permissionPost[val]),
      then: yup.string().required('This field is required')
    }),

    /*  Non-required fields */
    mp_address2: yup.string().max(50, 'Too long'),
    mp_address3: yup.string().max(50, 'Too long')
  });

  return validationSchema;
};

export { initialValues, buildValidationSchema };
