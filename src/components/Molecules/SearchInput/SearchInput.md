# Search input

initialState = { search: '' };

```js
<SearchInput
  onChangeInput={e => {
    e.preventDefault();
    setState({ search: e.target.value });
    console.log(state.search);
  }}
  value={state.search}
/>
```
