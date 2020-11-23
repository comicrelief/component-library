```js
<FieldWrapper label="Wrapping a basic text input">
  <input type="text" name="field-wrapper-test" style={{maxWidth: '300px'}} />
</FieldWrapper>
```

```js
import styled from 'styled-components';

const StyledInput = styled.input`
  max-width: 300px;
  font-size: 1.5rem;
  height: 2.5rem;
  border-radius: 5px;
  border-width: 1px;
  box-shadow: none;
`;

<FieldWrapper label="Wrapping a styled input">
  <StyledInput type="text" name="field-wrapper-test-1" />
</FieldWrapper>
```

```js
<FieldWrapper label="With error message" errorMsg="This is an error">
  <input type="text" name="field-wrapper-test-2" style={{maxWidth: '300px'}} />
</FieldWrapper>
```
