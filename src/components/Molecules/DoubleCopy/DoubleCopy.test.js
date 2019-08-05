import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import DoubleCopy from './DoubleCopy';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <DoubleCopy
      leftCopy="<h1>Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in.</p> <h1>Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in."
      rightCopy="<h1>Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in.</p>"
      leftCopyAlign="left"
      rightCopyAlign="right"
      leftCopyAlignItem="center"
      rightCopyAlignItem="bottom"
      leftBgColor="red"
      rightBgColor="green"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c2 {
      text-align: left;
    }

    .c4 {
      text-align: right;
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
      background: #f04257;
      color: #2C0230;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c1 p {
      font-size: 1.2rem;
    }

    .c1 h1 {
      font-size: 2.075rem;
    }

    .c3 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      padding: 4rem;
      background: #4ECD57;
      color: #2C0230;
      -webkit-align-items: flex-end;
      -webkit-box-align: flex-end;
      -ms-flex-align: flex-end;
      align-items: flex-end;
    }

    .c3 p {
      font-size: 1.2rem;
    }

    .c3 h1 {
      font-size: 2.075rem;
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
              "__html": "<h1>Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in.</p> <h1>Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in.",
            }
          }
        />
      </div>
      <div
        className="c3"
      >
        <div
          className="c4"
          dangerouslySetInnerHTML={
            Object {
              "__html": "<h1>Red Nose Day</h1> <p>On Friday 15 March, people across the UK will be coming together to do things big and small, that will add up to something massive. And we’d like you to join in.</p>",
            }
          }
        />
      </div>
    </section>
  `);
});
