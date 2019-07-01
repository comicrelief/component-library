import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../../Atoms/Link/Link';

export const Inner = styled.footer`
  background-color: black;

  ul li a {
    color: white;
  }
`;

const Footer = ({ items, ...rest }) => {
  return (
    <Inner items {...rest}>
      <ul className="parent-menu">
        {items.menuGroup.map(thisGroup => (
          <li key={thisGroup.url}>
            <Link className="parent-item" href={thisGroup.url} inline>
              {thisGroup.title}
            </Link>
            {thisGroup.links ? (
              <ul>
                {thisGroup.links.map(childLink => (
                  <li key={childLink.url}>
                    <Link href={childLink.url} inline>
                      {childLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </Inner>
  );
};

Footer.propTypes = {
  items: PropTypes.objectOf(PropTypes.shape)
};

Footer.defaultProps = {
  items: {}
};

export default Footer;
