import React from 'react';
import Accordion from './Accordion';
import Text from '../../Atoms/Text/Text';

export default function AccordionExample() {
  return (
    <>
      <Accordion
        title={<Text family="Anton" size="l" uppercase>I am the title</Text>}
      >
        <Text tag="p" size="s">
          Name, surname, email and billing address We need these to process your payment,
          create a receipt and send it to you. Establishment information We use this information
          to understand which institutions raise money for us.
        </Text>
      </Accordion>

      <Accordion
        contentBottomPadding="100px"
        title={<Text family="Anton" size="l" uppercase>I am the title</Text>}
      >
        <Text tag="p" size="s">Customised bottom padding here!</Text>
        <Text tag="p" size="s">
          <a href="https://www.google.com">A plain anchor link, made to resemble a Link component</a>.
        </Text>
      </Accordion>
    </>
  );
}
