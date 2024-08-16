import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import Accordion from './Accordion';
import Text from '../../Atoms/Text/Text';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Accordion
      title={(
        <Text tag="h2" font="Anton" size="l">
          I am the title
        </Text>
      )}
    >
      <Text tag="p">Name, surname, email and billing address We need these to process your payment, create a receipt and send it to you. Establishment information We use this information to understand which institutions (e.g. schools, companies) raise money for us. Your details will be kept safe and never shared with other organisations; see our Privacy Policy for more information</Text>
    </Accordion>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
