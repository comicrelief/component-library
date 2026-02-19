# Stats Slice

### Empty stats

```js
<StatsSlice  />
```

### Basic stats

```js
<StatsSlice stats={[{
    prefix: "£",
    value: 1234567890,
    suffix: "bn",
    description: "We raised a lot of cash"
}]}  />
```

### Multiple stats

```js
<StatsSlice stats={[{
    prefix: "£",
    value: 1234.56,
    suffix: "bn",
    description: "We raised a lot of cash"
},
{
    prefix: "over ",
    value: 456,
    suffix: "bn",
    description: "We raised a lot of cash"
},
{
    value: 800,
    suffix: " people",
    description: "We raised a lot of cash"
}]}  />
```
