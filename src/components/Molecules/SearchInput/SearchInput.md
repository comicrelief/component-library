# Search input

```js
initialState = { search: '' };
<SearchInput
  onChangeInput={e => {
    e.preventDefault();
    setState({ search: e.target.value });
    console.log(state.search);
  }}
  value={state.search}
  placeholder="Search..."
/>;
```
