import * as yup from 'yup';

const prefix = 'testprefix-';

// Faking a prop value; "are required fields required?" .. doesn't affect optional fields
const fakeOptions = {
  [`${prefix}permissionEmail`]: {
    yes: true, // sets associated field/s to required
    no: false // sets associated field/s to not required
  },
  [`${prefix}permissionPost`]: {
    yes: true,
    no: false
  },
  [`${prefix}permissionPhone`]: {
    yes: true,
    no: false
  },
  [`${prefix}permissionSMS`]: {
    yes: true,
    no: false
  }
};

const initialValues = {
  [`${prefix}email`]: '',
  [`${prefix}mobile`]: '',
  [`${prefix}phone`]: '',
  [`${prefix}address1`]: '',
  [`${prefix}address2`]: '',
  [`${prefix}address3`]: '',
  [`${prefix}town`]: '',
  [`${prefix}country`]: '',
  [`${prefix}postcode`]: '',
  [`${prefix}permissionEmail`]: [],
  [`${prefix}permissionPost`]: [],
  [`${prefix}permissionPhone`]: [],
  [`${prefix}permissionSMS`]: []
};

const validationSchema = yup.object({
  /* 'Required' attributes needs to be set on checkbox status to ensure validation makes sense */
  [`${prefix}email`]: yup.string().max(50, 'Too long').email('Please enter a valid email address')
    .when(`${prefix}permissionEmail`, {
      is: val => (fakeOptions[`${prefix}permissionEmail`][val]),
      then: yup.string().required('Please enter your mobile number')
    }),

  // TO-DO / PROBLEM: we need to be able to set 'required' based on a prop too

  [`${prefix}mobile`]: yup.string().max(11, 'Too long').when(`${prefix}permissionSMS`, {
    is: val => (fakeOptions[`${prefix}permissionSMS`][val]),
    then: yup.string().required('Please enter your mobile number')
  }),

  [`${prefix}phone`]: yup.string().max(11, 'Too long').when(`${prefix}permissionPhone`, {
    is: val => (fakeOptions[`${prefix}permissionPhone`][val]),
    then: yup.string().required('Please enter your phone number')
  }),

  [`${prefix}address1`]: yup.string().max(11, 'Too long').when(`${prefix}permissionPost`, {
    is: val => (fakeOptions[`${prefix}permissionPost`][val]),
    then: yup.string().required('This field is required')
  }),

  [`${prefix}town`]: yup.string().max(50, 'Too long').when(`${prefix}permissionPost`, {
    is: val => (fakeOptions[`${prefix}permissionPost`][val]),
    then: yup.string().required('This field is required')
  }),

  [`${prefix}postcode`]: yup.string().max(50, 'Too long').when(`${prefix}permissionPost`, {
    is: val => (fakeOptions[`${prefix}permissionPost`][val]),
    then: yup.string().required('This field is required')
  }),

  [`${prefix}country`]: yup.string().max(50, 'Too long').when(`${prefix}permissionPost`, {
    is: val => (fakeOptions[`${prefix}permissionPost`][val]),
    then: yup.string().required('This field is required')
  }),

  /*  Non-required fields */
  [`${prefix}address2`]: yup.string().max(50, 'Too long'),
  [`${prefix}address3`]: yup.string().max(50, 'Too long')
});

export { prefix, initialValues, validationSchema };
