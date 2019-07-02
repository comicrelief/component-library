```js
<div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link color="black" href="#anchor" target="self" inline={false}>
      Link as button
    </Link>
  </div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link color="red" href="/test" target="self">
      Link as button
    </Link>
  </div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link color="grey" href="/test" target="blank">
      Link as button
    </Link>
  </div>
</div>
```

Inline link

```js
<Link href="#anchor" inline={true}>
  Link
</Link>
```
