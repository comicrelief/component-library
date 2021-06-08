# SingleMessageDs

## Image align left and CTA are clickable and links user through to full conten

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const Title = styled(Text)`
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin: ${spacing('md')} 0;
  @media ${({ theme }) => theme.breakpoint('small')} {
    margin-bottom: ${spacing('m')};
  }
`;
<div
    style={{
      display: 'flex',
      padding: '4rem 0',
      background: '#E1E2E3',
      justifyContent: 'space-around',
    }}>
    <SingleMessageDs
      imageLeft={true}
      link='/home'
      linkLabel='Check out'
      backgroundColor='white'
      imageLow={data.image}
      images={data.images}
      imageAltText='Happy man going to work'
      subtitle="Subtitle"
      height='100%'
      hasVideo={true}
    >
      <Title tag="h4" color="grey_dark" size="xl" family="Anton" weight="normal">
        Heading Line 1 Heading Line 2
      </Title>
      <Text tag='p'>
        Whatever you’ve got planned, the Sport Relief shop has everything you need
        to get you looking your best while you’re raising some cash. Also
        available in Sainsbury’s stores and online and in selected Argos stores.
      </Text>
    </SingleMessageDs>
</div>;
```

## Image align right  and CTA are clickable and links user through to full content

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const Title = styled(Text)`
  margin: ${spacing('md')} 0;
  @media ${({ theme }) => theme.breakpoint('small')} {
    margin-bottom: ${spacing('m')};
  }
`;
<div
    style={{
      display: 'flex',
      padding: '4rem 0',
      background: '#E1E2E3',
      justifyContent: 'space-around',
    }}>
    <SingleMessageDs
      target='blank'
      link='https://www.comicrelief.com/'
      linkLabel='Check out'
      ctaBgColor="blue_dark"
      backgroundColor='white'
      imageLeft={false}
      imageLow={data.image}
      images={data.images}
      imageAltText='Happy man going to work'
      subtitle="Subtitle"
      height='100%'
    >
      <Title tag="h4" color="grey_dark" size="xl" family="Anton" weight="normal">
        Heading Line 1 Heading Line 2
      </Title>
      <Text tag='p'>
        Whatever you’ve got planned, the Sport Relief shop has everything you need
        to get you looking your best while you’re raising some cash. Also
        available in Sainsbury’s stores and online and in selected Argos stores.
      </Text>
    </SingleMessageDs>
</div>;
```

## Image align with non CTA

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const Title = styled(Text)`
  margin: ${spacing('md')} 0;
  @media ${({ theme }) => theme.breakpoint('small')} {
    margin-bottom: ${spacing('m')};
  }
`;
<div
    style={{
      display: 'flex',
      padding: '4rem 0',
      background: '#E1E2E3',
      justifyContent: 'space-around',
    }}>
    <SingleMessageDs
      linkLabel='Check out'
      ctaBgColor="blue_dark"
      backgroundColor='white'
      imageLeft={true}
      imageLow={data.image}
      images={data.images}
      imageAltText='Happy man going to work'
      subtitle="Subtitle"
      height='100%'
    >
      <Title tag="h4" color="grey_dark" size="xl" family="Anton" weight="normal">
        Heading Line 1 Heading Line 2
      </Title>
      <Text tag='p'>
        Whatever you’ve got planned, the Sport Relief shop has everything you need
        to get you looking your best while you’re raising some cash. Also
        available in Sainsbury’s stores and online and in selected Argos stores.
      </Text>
    </SingleMessageDs>
</div>;
```

## Using the linkIcon prop (to display download icon)

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import Download from '../../Atoms/Icons/Download';

<div>
    <SingleMessageDs
      link="https://assets.ctfassets.net/zsfivwzfgl3t/EsIEuI1teYkbLB7peOtqP/b43a905cffd89115d642fe5a84ff020a/RND21_fundraise_moneybuys_poster.pdf"
      linkLabel='Download this'
      linkIcon={<Download />}
      imageLow={data.image}
      images={data.images}
    >
      <Text tag='p'>
        Some text and stuff.
      </Text>
    </SingleMessageDs>
</div>;
```
