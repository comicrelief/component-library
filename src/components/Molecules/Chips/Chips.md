# Chips

```js
const group = [
  { fieldValue: 'Gender Justice' },
  { fieldValue: 'How we Fund' },
  { fieldValue: 'Partnerships' },
  { fieldValue: 'Red Shed' },
  { fieldValue: 'Social Tech' },
  { fieldValue: 'Sport for Change' }
];

const newGroup = group.map((cats, index) => ({
  id: index,
  ...cats,
  checked: false
}));

const [categories, setCategories] = React.useState(newGroup);
const [selected, setSelected] = React.useState([]);

const handleToggle = e => {
  const result = categories.map(cat => {
    const newCat = { ...cat };
    if (newCat.fieldValue === e.target.value) {
      newCat.checked = !newCat.checked;
    }
    return newCat;
  });
  setCategories(result);
};

React.useEffect(() => {
  const filtered = categories
    .map(cat => {
      if (cat.checked === true) {
        return cat.fieldValue;
      }
      return null;
    })
    .filter(el => el != null);
  console.log(filtered);
  setSelected(filtered);
}, [categories]);

<Chips
  categories={categories}
  handleToggle={handleToggle}
  selected={selected}
/>;
```
