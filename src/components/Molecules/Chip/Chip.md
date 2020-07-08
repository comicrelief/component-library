# Chip

```js
const [checked, setChecked] = React.useState(false);
const handleToggle = e => {
  setChecked(!checked);
};

<Chip
  category="Gender Justice"
  handleToggle={handleToggle}
  checked={checked}
/>;
```
