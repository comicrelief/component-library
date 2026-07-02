import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import Text from '../../Atoms/Text/Text';

const Wrapper = styled.div`
  margin: 50px 0;
`;

export default function AccordionExample() {
  return (
    <>
      <Wrapper>
        <Accordion
          title={
            <Text family="Anton" size="l" uppercase>
              I am the title
            </Text>}
        >
          <Text tag="p" size="s">
            Name, surname, email and billing address We need these to process your payment,
            create a receipt and send it to you. Establishment information We use this information
            to understand which institutions raise money for us.
          </Text>
        </Accordion>
      </Wrapper>

      <Wrapper>
        <Accordion
          contentBottomPadding="100px"
          title={<Text family="Anton" size="l" uppercase>I am the title</Text>}
        >
          <Text tag="p" size="s">Customised bottom padding here!</Text>
          <Text tag="p" size="s">
            <a href="https://www.google.com">A plain anchor link, made to resemble a Link component</a>.
          </Text>
        </Accordion>
      </Wrapper>

      <Wrapper>
        <Accordion
          contentBottomPadding="100px"
          title={
            <Text textTag="p" weight="700">
              I am a title with an overridden text type and weight, to 'p' 700 which is the new donate preference
            </Text>
          }
          >

          <Text tag="p" size="s">lorem ipsum</Text>
        </Accordion>
      </Wrapper>
    </>
  );
}
