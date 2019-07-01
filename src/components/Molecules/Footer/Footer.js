import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import data from './data/data';

export const Inner = styled.footer`
  background-color: black;

  ul li a {
    color: white;
  }
`;

const Footer = ({ markup, ...rest }) => {
  const thisData = markup.data;

  return (
    <Inner markup {...rest}>
      <footer role="navigation">
        <ul className="parent-menu">
          {thisData.menuGroup.map(thisGroup => (
            <li key={thisGroup.id}>
              <Link className="parent-item" href={thisGroup.url} inline>
                {thisGroup.title}
              </Link>
              {thisGroup.links ? (
                <ul>
                  {thisGroup.links.map(childLink => (
                    <li>
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
      </footer>
    </Inner>
  );
};

Footer.propTypes = {
  markup: PropTypes.objectOf(PropTypes.shape)
};

Footer.defaultProps = {
  markup: {
    data
  }
};

export default Footer;
