import React from 'react';

import Text from '../../Atoms/Text/Text';
import Form from './Form/Form';
import { Header, Wrapper } from './Membership.style';

const Membership = data => {
  return (
    <Wrapper>
      <Header>
        <Text tag="h2" size="l" weight="800">
          Help someone like Jordan see a better tomorrow
        </Text>
        <Text tag="p">
          Jordan was close to suicide - which is now the biggest killer of men
          under 45 in the UK. Join now and help save lives.
        </Text>
      </Header>
      <Form data={data} />
    </Wrapper>
  );
};

export default Membership;
