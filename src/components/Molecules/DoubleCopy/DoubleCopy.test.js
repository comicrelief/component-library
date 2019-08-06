import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import DoubleCopy from './DoubleCopy';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <DoubleCopy
      leftCopy={
        '<h1>Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in.</p> <h1>Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in.</p> '
      }
      rightCopy={
        '<h1>Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in.</p> '
      }
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
              "__html": "<h1>Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in.</p> <h1>Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in.</p> ",
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
              "__html": "<h1>Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in.</p> ",
            }
          }
        />
      </div>
    </section>
  `);
});
