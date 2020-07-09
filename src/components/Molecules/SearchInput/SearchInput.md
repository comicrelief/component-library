# Search input

```js
const [search, setSearch] = React.useState('');

<SearchInput
  onChange={e => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  }}
  value={search}
  placeholder="Search..."
/>;
```
