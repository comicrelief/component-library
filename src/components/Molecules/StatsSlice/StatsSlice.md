# Stats Slice

### Empty stats

```js
<div style={{ paddingTop: "100vh" }}>
<StatsSlice  />
</div>
```

### Basic stats

```js
<StatsSlice nodes={[{
    title: "123",
    stat: "123,456,789.02",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
}]}  />
```

### Multiple stats

```js
<StatsSlice nodes={[{
    title: "123",
    stat: "£1234.56",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
},
{
    title: "456",
    stat: "over 456 lives were saved",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
},
{
    title: "789",
    stat: "456,789,123 people who",
    body: "Ut enim ad minima veniam, quis nostrum exercitationem."
},
{
    title: "asd",
    stat: "456 people",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
},
{
    title: "xcv",
    stat: "$800bn",
    body: "Ut enim ad minima veniam, quis nostrum exercitationem."
}]}  />
```


### No animation

```js
<StatsSlice ease="none" nodes={[{
    title: "123",
    stat: "£1234.56",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."
}]}  />
```
