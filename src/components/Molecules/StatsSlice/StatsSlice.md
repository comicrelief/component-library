# Stats Slice

### Empty stats

```js
<StatsSlice  />
```

### Basic stats

```js
<StatsSlice stats={[{
    value: 1234567890,
    description: "We raised a lot of cash"
}]}  />
```

### Multiple stats

```js
<StatsSlice stats={[{
    value: "£1234.56",
    description: "We raised a lot of cash"
},
{
    value: "456 people",
    description: "We raised a lot of cash"
},
{
    value: "over $800bn",
    description: "We raised a lot of cash"
}]}  />
```
