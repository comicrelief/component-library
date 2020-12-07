Limit is 99 days

```js
import Text from '../../Atoms/Text/Text';
const intro = <Text tag="h2" size="xl">Hello</Text>;
const end = <Text tag="h2" size="xl">Bye</Text>;

<Countdown endDate="Jan 22, 2021 24:00:00" endMessage={end} introMessage={intro}/>
```