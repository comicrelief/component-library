import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Footer from './Footer';
import data from './data/data';

it('It renders the footer properly', () => {
  const tree = renderWithTheme(<Footer items={data} />).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      color: #000;
      -webkit-text-decoration: none;
      text-decoration: none;
      display: inline-block;
      padding: 0 2px 1px;
      border-bottom: 2px solid;
      border-bottom-color: #000;
    }
    
    .c0 {
      background-color: black;
    }
    
    .c0 ul li a {
      color: white;
    }
    
    <footer
      className="c0"
    >
      <ul
        className="parent-menu"
      >
        <li>
          <a
            className="parent-item c1"
            color="red"
            href="/parent1"
            target="_self"
          >
            Parent Item Title 1
          </a>
          <ul>
            <li>
              <a
                className="c1"
                color="red"
                href="/child-item-1-1"
                target="_self"
              >
                Child Item Title 1-1
              </a>
            </li>
            <li>
              <a
                className="c1"
                color="red"
                href="/child-item-1-2"
                target="_self"
              >
                Child Item Title 1-2
              </a>
            </li>
            <li>
              <a
                className="c1"
                color="red"
                href="/child-item-1-3"
                target="_self"
              >
                Child Item Title 1-3
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            className="parent-item c1"
            color="red"
            href="/parent2"
            target="_self"
          >
            Parent Item Title 2
          </a>
          <ul>
            <li>
              <a
                className="c1"
                color="red"
                href="/child-item-2-1"
                target="_self"
              >
                Child Item Title 2-1
              </a>
            </li>
            <li>
              <a
                className="c1"
                color="red"
                href="/child-item-2-2"
                target="_self"
              >
                Child Item Title 2-2
              </a>
            </li>
            <li>
              <a
                className="c1"
                color="red"
                href="/child-item-2-3"
                target="_self"
              >
                Child Item Title 2-3
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  `);
});
