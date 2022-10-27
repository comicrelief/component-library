import * as yup from 'yup';

const FIELDS = {
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  EMAIL: 'email',
  AGE: 'age'
};

const validationSchema = yup.object({
  [FIELDS.FIRST_NAME]: yup
    .string()
    .required('Please enter your first name')
    .matches(
      /^[A-Za-z][A-Za-z' -]*$/,
      "This field only accepts letters and ' - and must start with a letter"
    )
    .max(25, 'Your first name must be between 1 and 25 characters'),
  [FIELDS.LAST_NAME]: yup
    .string()
    .required('Please enter your last name')
    .matches(
      /^[A-Za-z][A-Za-z' -]*$/,
      "This field only accepts letters and ' - and must start with a letter"
    )
    .max(50, 'Your first name must be between 1 and 50 characters'),
  [FIELDS.EMAIL]: yup
    .string()
    .required('Please enter your email address')
    .email('Please enter a valid email address')
    .max(100, 'Your email address must be between 1 and 100 characters long')
});

export { FIELDS, validationSchema };
