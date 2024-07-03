# Card
```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<div style={{backgroundColor: 'lightblue', padding: '10px'}}>
    <Card
      imageLow={defaultData.image}
      images={defaultData.images}
      backgroundColor="blue"
      height="auto"
      rowTextColor="purple"
      columnTextColor="black"
    >
      <Text tag="h3" size="xl">
        Title
      </Text>
      <Text tag="p">
        Your donations make a very real difference to people in the UK and around the world, whether you donate through Red Nose Day, Sport Relief or to Comic Relief at any other time of year.
      </Text>
    </Card>
</div>
```

### Card - row layout on small breakpoint only
```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<div style={{backgroundColor: 'lightblue', padding: '10px'}}>
    <Card
      imageLow={defaultData.image}
      images={defaultData.images}
      backgroundColor="red"
      height="auto"
      smallBreakpointRowLayout={true}
      mediumBreakpointRowLayout={false}
      rowTextColor="purple"
      columnTextColor="black"
    >
      <Text tag="h3" size="xl">
        Title
      </Text>
      <Text tag="p">
        Your donations make a very real difference to people in the UK and around the world, whether you donate through Red Nose Day, Sport Relief or to Comic Relief at any other time of year. Here are some of the many stories that show how people are changing their lives with your support.
      </Text>
    </Card>
</div>
```

### Card - row layout on medium breakpoint only
```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<div style={{backgroundColor: 'lightblue', padding: '10px'}}>
    <Card
      imageLow={defaultData.image}
      images={defaultData.images}
      backgroundColor="orange"
      height="auto"
      smallBreakpointRowLayout={false}
      mediumBreakpointRowLayout={true}
      rowTextColor="purple"
      columnTextColor="black"
    >
      <Text tag="h3" size="xl">
        Title
      </Text>
      <Text tag="p">
        Your donations make a very real difference to people in the UK and around the world, whether you donate through Red Nose Day, Sport Relief or to Comic Relief at any other time of year. Here are some of the many stories that show how people are changing their lives with your support.
      </Text>
    </Card>
</div>
```

### Card - row layout on small and medium breakpoints
```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<div style={{backgroundColor: 'lightblue', padding: '10px'}}>
    <Card
      imageLow={defaultData.image}
      images={defaultData.images}
      backgroundColor="purple"
      height="auto"
      smallBreakpointRowLayout={true}
      mediumBreakpointRowLayout={true}
      rowTextColor="purple"
      columnTextColor="black"
    >
      <Text tag="h3" size="xl">
        Title
      </Text>
      <Text tag="p">
        Your donations make a very real difference to people in the UK and around the world, whether you donate through Red Nose Day, Sport Relief or to Comic Relief at any other time of year. Here are some of the many stories that show how people are changing their lives with your support.
      </Text>
    </Card>
</div>
```

### Card no body

```js
const defaultData = require('../../../styleguide/data/data').defaultData;

<div style={{backgroundColor: 'lightblue', padding: '10px'}}>
    <Card
      imageLow={defaultData.image}
      images={defaultData.image}
    />
</div>
```
