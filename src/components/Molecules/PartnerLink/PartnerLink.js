import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, MoreInfo, Item } from './PartnerLink.style';

const PartnerLink = ({ children, link, ...rest }) => {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { ...rest })
  );
  return (
    <Wrapper {...rest}>
      <Item href={link} type="standard">
        {childrenWithProps}
        <MoreInfo color="white" size="xxs">
          Find out more
        </MoreInfo>
      </Item>
    </Wrapper>
  );
};

PartnerLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired
};
export default PartnerLink;
