```js
<Label label="Wrapping a basic text input">
  <input type="text" name="field-wrapper-test" style={{maxWidth: '300px'}} />
</Label>
```

```js
import styled from 'styled-components';

const StyledInput = styled.input`
  max-width: 300px;
  font-size: 1.5rem;
  height: 2.5rem;
  border-radius: 5px;
  border-width: 1px;
`;

<Label label="Wrapping a styled input" optional>
  <StyledInput type="text" name="field-wrapper-test-1" />
</Label>
```
