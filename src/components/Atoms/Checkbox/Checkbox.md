# CheckBox Field

```js
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

const LongLabel = () => (
  <div>
    <Text tag="p">
      I agree to the
      {' '}
      <Link target="blank" href="https://comicrelief.com/terms-of-use/">terms and conditions</Link>
      {' '}
      and
      {' '}
      <Link target="blank" href="https://comicrelief.com/privacy-notice/">privacy policy.</Link>
    </Text>
    <Text tag="p">
      For more information, please view our fundraising
      <Link target="blank" href="https://comicrelief.com/code-of-conduct/">code of conduct.</Link>
    </Text>
  </div>
);

<>
    <p>List of checkboxes</p>
    <Checkbox id="sport1" name="sport1" value="Tennis" label="Tennis" />
    <Checkbox id="sport2" name="sport2" value="Basketball" label="Basketball" />
    <Checkbox id="sport3" name="sport3" value="Cycling" label="Cycling" />
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
    />
    <br/>
    <p>A checkbox with a long label containing links</p>
    <Checkbox id="node_label" name="node_label" value="node_label">
      <LongLabel />
    </Checkbox>
</>
```
