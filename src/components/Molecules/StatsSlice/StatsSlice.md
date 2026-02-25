# Stats Slice

### Empty stats

```js
<StatsSlice  />
```

### Basic stats

```js
<StatsSlice stats={[{
    value: "123,456,789.02",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
}]}  />
```

### Multiple stats

```js
<StatsSlice stats={[{
    value: "£1234.56",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
},
{
    value: "456 people",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
},
{
    value: "over $800bn",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem."
}]}  />
```
