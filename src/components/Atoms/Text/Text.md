```js
<div>
  <Text tag="h3" size="s">
    Heading 3
  </Text>
  <Text tag="p" colour="black">
    My paragraph
  </Text>
  <Text tag="h3" size="m">
    Heading 3 size 3
  </Text>
  <Text tag="p" size="xl" color="red">
    My paragraph small and yellow
  </Text>
</div>
```

Sport Relief

```js
const { ThemeProvider } = require('../../../index');
const { srTheme } = require('../../../index');

<ThemeProvider theme={srTheme}>
  <div>
    <Text tag="h3" size="s">
      Heading 3
    </Text>
    <Text tag="p" colour="black">
      My paragraph
    </Text>
    <Text tag="h3" size="m">
      Heading 3 size 3
    </Text>
    <Text tag="p" size="xl" color="red">
      My paragraph small and yellow
    </Text>
  </div>
</ThemeProvider>
```
