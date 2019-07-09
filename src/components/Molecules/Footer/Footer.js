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
      {/* Nav menu */}
      <ul className="parent-menu">
        {/* Each menugroup */}
        {items.menuGroup.map(thisGroup => (
          <div key={thisGroup.id}>
            {/* If it contains links */}
            {thisGroup.links ? (
              <li key={thisGroup.id}>
                <Link
                  className="parent-item"
                  href={
                    thisGroup.links.length > 1
                      ? '#fakeButton'
                      : thisGroup.links[0].url
                  }
                  inline
                >
                  {thisGroup.title}
                </Link>

                <ul>
                  {thisGroup.links.map(childLink => (
                    <li key={childLink.url}>
                      <Link href={childLink.url} inline>
                        {childLink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : null}
          </div>
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
