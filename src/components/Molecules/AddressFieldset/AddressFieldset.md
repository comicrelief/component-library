# AddressFieldset

## In a form

```jsx
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {
  AddressFieldset,
  DEFAULT_INITIAL_VALUES,
  AddressFieldsetValidationRules
} from './AddressFieldset';

<Formik
  initialValues={DEFAULT_INITIAL_VALUES}
  validationSchema={Yup.object().shape(AddressFieldsetValidationRules)}
  onSubmit={values => {
    alert(JSON.stringify(values, null, 2));
  }}
>
  {formikProps => {
    return (
      <Form>
        <AddressFieldset formikProps={formikProps} />
        <button type="submit">Submit</button>
      </Form>
    );
  }}
</Formik>;
```

## As part of a larger form with other fields

```jsx
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Input from '../../Atoms/Input/Input';

import {
  AddressFieldset,
  DEFAULT_INITIAL_VALUES,
  DEFAULT_LABEL_MAP,
  AddressFieldsetValidationRules
} from './AddressFieldset';

const initialValues = { ...DEFAULT_INITIAL_VALUES, another: '' };
const validationSchema = Yup.object().shape({
  ...AddressFieldsetValidationRules,
  another: Yup.string().required('Required field!')
});
const labelMap = { ...DEFAULT_LABEL_MAP, name: 'Organisation name' };

<Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={values => {
    alert(JSON.stringify(values, null, 2));
  }}
>
  {formikProps => {
    const { touched, errors } = formikProps;
    return (
      <Form>
        <AddressFieldset formikProps={formikProps} labelMap={labelMap} />
        <fieldset>
          <Field
            as={Input}
            id="another-field"
            label="Non-address field"
            name="another"
            type="text"
            errorMsg={touched.another && errors.another}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </Form>
    );
  }}
</Formik>;
```
