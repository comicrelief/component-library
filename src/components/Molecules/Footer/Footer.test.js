import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Footer from './Footer';

const unsanitisedHTML =
  "<p>Here's some copy</p><script>alert('bad things')</script><span>More copy</span>";

it('It sanitises markup and renders properly', () => {
  const tree = renderWithTheme(
    <Footer align="right" markup={unsanitisedHTML} />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c0 {
      text-align: right;
    }
    
    <div
      className="c0"
      dangerouslySetInnerHTML={
        Object {
          "__html": "<p>Here's some copy</p><span>More copy</span>",
        }
      }
    />
  `);
});
