import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import RichText from './RichText';

const unsanitisedHTML = "<p>Here's some copy</p><span>More copy</span>";

it('It sanitises markup and renders properly', () => {
  const tree = renderWithTheme(
    <RichText align="right" markup={unsanitisedHTML} />
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
