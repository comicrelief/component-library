import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Form from './Form/Form';
import { Header, Wrapper } from './Membership.style';

const Membership = ({ data, title, subTitle }) => {
  return (
    <Wrapper>
      <Header>
        <Text tag="h2" size="l" weight="800">
          {title}
        </Text>
        <Text tag="p">{subTitle}</Text>
      </Header>
      <Form data={data} />
    </Wrapper>
  );
};

Membership.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape),
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

Membership.defaultProps = {
  data: {}
};
export default Membership;
