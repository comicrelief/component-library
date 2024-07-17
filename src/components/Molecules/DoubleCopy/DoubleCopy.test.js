import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import DoubleCopy from './DoubleCopy';
import RichText from '../../Atoms/RichText/RichText';

it('renders correctly', () => {
  const content = '<h1> Left Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
  const tree = renderWithTheme(
    <DoubleCopy
      leftCopy={<RichText markup={content} />}
      rightCopy={<RichText markup={content} />}
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c2 {
      text-align: left;
    }

    .c0 {
      width: 100%;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      padding: 4rem;
    }

    @media (min-width:740px) {
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }
    }

    <section
      className="c0"
    >
      <div
        className="c1"
      >
        <div
          className="c2"
          dangerouslySetInnerHTML={
            Object {
              "__html": "<h1> Left Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
            }
          }
        />
      </div>
      <div
        className="c1"
      >
        <div
          className="c2"
          dangerouslySetInnerHTML={
            Object {
              "__html": "<h1> Left Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
            }
          }
        />
      </div>
    </section>
  `);
});
