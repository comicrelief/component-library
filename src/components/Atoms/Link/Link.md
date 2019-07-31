```js
<div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link
      color="white"
      href="#anchor"
      target="self"
      inline={false}
      wrapper={true}
    >
      <a href="#">Link as button</a>
    </Link>
  </div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link color="white" href="/test" target="self">
      Link as button
    </Link>
  </div>
  <div style={{ display: 'block', marginBottom: '10px' }}>
    <Link color="white" href="/test" target="blank">
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
