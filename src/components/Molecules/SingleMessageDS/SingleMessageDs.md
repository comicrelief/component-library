# SingleMessageDs

## Image align left and CTA are clickable and links user through to full conten

```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
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
      imageLow={defaultData.image}
      images={defaultData.images}
      imageAltText='Happy man going to work'
      subtitle="Subtitle"
      height='100%'
      youTubeId='faz0JeBB41M'
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
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
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
      imageLow={defaultData.image}
      images={defaultData.images}
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
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
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
      imageLow={defaultData.image}
      images={defaultData.images}
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
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import Download from '../../Atoms/Icons/Download';

<div>
    <SingleMessageDs
      link="https://assets.ctfassets.net/zsfivwzfgl3t/EsIEuI1teYkbLB7peOtqP/b43a905cffd89115d642fe5a84ff020a/RND21_fundraise_moneybuys_poster.pdf"
      linkLabel='Download this'
      linkIcon={<Download />}
      imageLow={defaultData.image}
      imageLeft={true}
      images={defaultData.images}
    >
      <Text tag='p'>
        Whatever you’ve got planned, the Sport Relief shop has everything you need
        to get you looking your best while you’re raising some cash. Also
        available in Sainsbury’s stores and online and in selected Argos stores.
      </Text>
    </SingleMessageDs>
</div>;
```

## Video with no CTA

```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import Download from '../../Atoms/Icons/Download';

<div>
    <SingleMessageDs
      imageLow={defaultData.image}
      images={defaultData.images}
      youTubeId="faz0JeBB41M"
      imageLeft={true}
    >
      <Text tag='p'>
        Some text and stuff.
      </Text>
    </SingleMessageDs>
</div>;
```

## FocalPoint stuff

```js
const focalPointImages = require('../../../styleguide/data/data').focalPointImages;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';

// These will come directly via the CMS query in the proper CRcom 
// context; I've just hardcoded the actual size values from the example
// image and focal point that focuses on the subject.
const exampleFocalPoint = {
    rawImageWidth: 2000,
    rawImageHeight: 945,
    focalPointX: 1450,
    focalPointY: 350
};

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
      imageLow={focalPointImages.image}
      images={focalPointImages.images}
      imageAltText='Happy man going to work'
      subtitle="Subtitle"
      height='100%'
      youTubeId='faz0JeBB41M'
      focalPoint={exampleFocalPoint}
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