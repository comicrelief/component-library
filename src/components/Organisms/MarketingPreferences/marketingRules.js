import * as yup from 'yup';
import Postcode from 'postcode';

const emailValidation = {
  emailAddress: yup.string().required('Your Email is required')
};

const addressValidation = {
  address1: yup.string().required('Address line 1 is required'),
  address2: yup.string().required('Address line 2 is required'),
  address3: yup.string().required('Address line 3 is required'),
  townCity: yup.string().required('Town / City is required'),
  country: yup.string().required('Town is required'),
  postcode: yup
    .string()
    .required('Postcode is required')
    .test(
      'valid-postcode',
      'Please provide a valid postcode',
      v => v && Postcode.isValid(v)
    )
};

const phoneValidation = {
  phone: yup.number().required()
};

const mobileValidation = {
  mobile: yup.number().required()
};

export {
  emailValidation,
  addressValidation,
  phoneValidation,
  mobileValidation
};
