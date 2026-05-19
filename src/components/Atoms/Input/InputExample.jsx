import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Text from '../Text/Text';

const ItalicText = styled(Text).attrs({ weight: 'normal' })`
  font-style: italic;
`;

export default function InputExample() {
  return (
    <>
      <h4>Input required with label and hint</h4>
      <Input
        name="fullname"
        placeholder="This is the hint text"
        type="text"
        label="Label"
        id="input-example-1"
        showLabel={true}
      />

      <h4>Input with error message</h4>
      <Input
        name="fullname2"
        placeholder="This is the hint text"
        type="text"
        label="Label"
        errorMsg="This is an error message"
        id="input-example-2"
      />

      <h4>Simple input (optional)</h4>
      <Input
        name="fullname3"
        placeholder=""
        type="text"
        label="Label"
        errorMsg=""
        id="input-example-3"
        showLabel={true}
        optional={true}
      />

      <h4>Simple input (required)</h4>
      <Input
        name="fullname4"
        placeholder=""
        type="text"
        label="Label"
        errorMsg=""
        id="input-example-4"
        showLabel={true}
        optional={false}
      />

      <h4>Input Label with markup</h4>
      <Input
        name="fullname5"
        placeholder=""
        type="text"
        label="<b>Markup label <i>italic</i></b>"
        errorMsg=""
        id="input-example-5"
        showLabel={true}
      />

      <h4>Input label as React element</h4>
      <Input
        name="email"
        placeholder=""
        type="text"
        label={<>Email <ItalicText>(please check it's correct)</ItalicText></>}
        errorMsg=""
        id="input-example-6"
        showLabel={true}
      />

      <h4>Input with prefix</h4>
      <p>(This example also ensures there are two decimal places onBlur)</p>
      <Input
        name="price"
        type="number"
        label="label"
        errorMsg=""
        id="price"
        showLabel={true}
        prefix="£"
        placeholder="0.00"
        onBlur={event => {
          const price = event.target.value;
          if (typeof Number(price) === 'number') {
            event.target.value = Number(price).toFixed(2);
          }
        }}
      />

      <h4>Input with responsive max width</h4>
      <Input
        name="responsive-width"
        placeholder="I'm responsive"
        type="text"
        label="Responsive Width Input at M and L breakpoints"
        id="input-example-7"
        maxPxWidthMediumBreakpoint={150}
        maxPxWidthLargeBreakpoint={250}
      />

      <h4>Input with dark label</h4>
      <Input
        name="dark-label"
        placeholder="£0.00"
        type="text"
        label="The label text can be made black rather than the default grey"
        id="input-example-8"
      />

      <h4>Input with Description:</h4>
      <Input
        name="input-with-description"
        placeholder="I have a description"
        type="text"
        label="My Great Input"
        id="input-example-9"
        description={<Text>Here's a description with some <b>formatting</b></Text>}
      />
    </>
  );
}
