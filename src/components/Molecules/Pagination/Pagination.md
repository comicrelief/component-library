### Minimalist

```js
<Pagination
  maxPages={6}
  totalPages={6}
  currentPage={2}
  createURL={value => `example.com/page/${value}`}
  onSelect={(event, value) => {
    event.preventDefault();
    console.log(value);
  }}
  showFirst={false}
  showPrevious={false}
  showNext={false}
  showLast={false}
/>

<Pagination
  maxPages={6}
  totalPages={6}
  currentPage={4}
  createURL={value => `example.com/page/${value}`}
  onSelect={(event, value) => {
    event.preventDefault();
    console.log(value);
  }}
  showFirst={false}
  showPrevious={false}
  showNext={false}
  showLast={false}
  selectedBackgroundColor="black"
/>
```

### Full size

```js
<Pagination
  maxPages={5}
  totalPages={10}
  currentPage={1}
  createURL={value => `example.com/page/${value}`}
  onSelect={(event, value) => {
    event.preventDefault();
    console.log(value);
  }}
  showFirst={true}
  showPrevious={true}
  showNext={true}
  showLast={true}
  showMore={true}
/>

<Pagination
  maxPages={5}
  totalPages={10}
  currentPage={3}
  createURL={value => `example.com/page/${value}`}
  onSelect={(event, value) => {
    event.preventDefault();
    console.log(value);
  }}
  showFirst={true}
  showPrevious={true}
  showNext={true}
  showLast={true}
  showMore={true}
  selectedBackgroundColor="purple"
/>

<Pagination
  maxPages={5}
  totalPages={10}
  currentPage={5}
  createURL={value => `example.com/page/${value}`}
  onSelect={(event, value) => {
    event.preventDefault();
    console.log(value);
  }}
  showFirst={true}
  showPrevious={true}
  showNext={true}
  showLast={true}
  showMore={true}
  selectedBackgroundColor="blue"
/>

<Pagination
  maxPages={5}
  totalPages={10}
  currentPage={10}
  createURL={value => `example.com/page/${value}`}
  onSelect={(event, value) => {
    event.preventDefault();
    console.log(value);
  }}
  showFirst={true}
  showPrevious={true}
  showNext={true}
  showLast={true}
  showMore={true}
  selectedBackgroundColor="green"
/>
```

### Custom style

```js
<Pagination
  maxPages={5}
  totalPages={10}
  currentPage={5}
  createURL={value => `example.com/page/${value}`}
  onSelect={(event, value) => {
    event.preventDefault();
    console.log(value);
  }}
  showFirst={true}
  showPrevious={true}
  showNext={true}
  showLast={true}
  showMore={true}
  color="red"
  backgroundColor="yellow"
  selectedColor="yellow"
  selectedBackgroundColor="teal"
  disabledColor="white"
  disabledBackgroundColor="grey_light"
  colorOnHover="yellow"
  backgroundColorOnHover="teal"
/>
```

### Custom labels

```js
<Pagination
  maxPages={5}
  totalPages={20}
  currentPage={10}
  createURL={value => `example.com/page/${value}`}
  onSelect={(event, value) => {
    event.preventDefault();
    console.log(value);
  }}
  showFirst={true}
  showPrevious={true}
  showNext={true}
  showLast={true}
  showMore={true}
  previousLabel="Previous"
  nextLabel="Next"
  firstLabel="First"
  lastLabel="Last"
  moreLabel="More"
  getPageLabel={value => `Page ${value}`}
/>
```
