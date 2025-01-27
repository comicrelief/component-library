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
    <Checkbox
        name="sport"
        value="Tennis"
        label="Tennis (with wacky styling to test props)"
        checkboxBg="red"
        checkboxBorder="green"
        checkboxBgChecked="green"
        checkboxBorderChecked="red"
    />
    <Checkbox name="sport" value="Basketball" label="Basketball" />
    <Checkbox name="sport" value="Cycling" label="Cycling" />
    <Checkbox name="sport" value="Football" label="Football" />
    <br/>
    <p>A checkbox with a long label containing links</p>
    <Checkbox name="node_label" value="node_label">
      <LongLabel />
    </Checkbox>
</>
```
