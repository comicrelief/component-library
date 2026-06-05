## Disabled and loading

```js
import ButtonWithStates from './ButtonWithStates';

<ButtonWithStates
  type="submit"
  loading
  disabled
>
  Enter prize draw
</ButtonWithStates>
```

## Optional prop `children`

`children` is an optional prop, this example demonstrates the button will not error without any provided.

```js
import ButtonWithStates from './ButtonWithStates';

<ButtonWithStates type="submit" loading loadingText="Submitting…" />
```
