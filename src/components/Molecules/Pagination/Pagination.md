# Pagination

Minimalist.

```js
<Pagination
  maxPages={5}
  totalPages={5}
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
```

Full size.

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
```

Custom labels.

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
