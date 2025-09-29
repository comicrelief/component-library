import React from 'react';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

const defaultCopyTop = (
  <div>
    <Text tag="h3" size="m" family="Montserrat" weight="600" color="black">
      Stay up to date with Comic Relief?
    </Text>
    <Text tag="p" size="md" color="black">
      We’d like to send you updates on the work we’re funding and how
      your support makes a difference in the UK and around the world.
    </Text>
    <Text tag="p" size="md" color="black">
      Please tick the relevant boxes below if you would like to hear from us.
    </Text>
  </div>
);

const defaultCopyBottom = (
  <Text tag="p" size="xs" color="black">
    Update your preferences at any time by visiting our
    {' '}
    <Link
      type="standard"
      href="https://www.comicrelief.com/update-your-preferences"
      target="blank"
    >
      preferences centre
    </Link>
    . Your details will be kept safe, see our
    {' '}
    <Link type="standard" href="https://www.comicrelief.com/privacy-policy" target="blank">
      privacy policy
    </Link>
    {' '}
    for more information.
  </Text>
);

export { defaultCopyTop, defaultCopyBottom };
