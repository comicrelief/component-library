Limit is 365 days

```js
import Text from '../../Atoms/Text/Text';
const intro = <Text tag="h2" size="xl">Hello</Text>;
const end = <Text tag="h2" size="xl">Bye</Text>;

<Countdown endDate="Dec 31, 2030 23:59:59" endMessage={end} introMessage={intro}/>
```