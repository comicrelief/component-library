Limit is 365 days

```js
import Text from '../../Atoms/Text/Text';
const intro = <Text tag="h2" size="xl">Hello</Text>;
const end = <Text tag="h2" size="xl">Bye</Text>;

<Countdown endDate="Jan 16, 2026 10:30:00" endMessage={end} introMessage={intro}/>
```