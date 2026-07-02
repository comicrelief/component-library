import React from 'react';
import Checkbox from './Checkbox';
import Text from '../Text/Text';
import Link from '../Link/Link';
import { ExampleContainer } from '../../../demos/SharedStyles';

const LongLabel = () => (
  <div>
    <Text tag="p" size="s">
      I agree to the
      {' '}
      <Link target="blank" href="https://comicrelief.com/terms-of-use/">terms and conditions</Link>
      {' '}
      and
      {' '}
      <Link target="blank" href="https://comicrelief.com/privacy-notice/">privacy policy.</Link>
    </Text>
    <Text tag="p" size="s">
      For more information, please view our fundraising
      <Link target="blank" href="https://comicrelief.com/code-of-conduct/">code of conduct.</Link>
    </Text>
  </div>
);

export default function CheckboxExample() {
  return (
    <>
      <p>List of checkboxes</p>
      <ExampleContainer>
        <Checkbox id="sport1" name="sport1" value="Tennis" label="Tennis" data-testid="checkbox-tennis" />
      </ExampleContainer>

      <ExampleContainer>
        <Checkbox id="sport2" name="sport2" value="Basketball" label="Basketball" data-testid="checkbox-basketball" />
      </ExampleContainer>

      <ExampleContainer>
        <Checkbox id="sport3" name="sport3" value="Cycling" label="Cycling" data-testid="checkbox-cycling" />
      </ExampleContainer>

      <ExampleContainer>
        <Checkbox
          id="sport4"
          name="sport4"
          value="Football (with wacky styling to test props)"
          label="Football (with wacky styling to test props)"
          labelColour="purple_dark"
          checkboxBg="white"
          checkboxBorder="black"
          checkboxBgChecked="green"
          checkboxBorderChecked="green"
          checkboxBorderFocus="blue"
          data-testid="checkbox-football"
        />
      </ExampleContainer>

      <br />
      <p>A checkbox with a long label containing links</p>
      <ExampleContainer>
        <Checkbox id="node_label" name="node_label" value="node_label" data-testid="checkbox-terms">
          <LongLabel />
        </Checkbox>
      </ExampleContainer>
    </>
  );
}
