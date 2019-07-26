import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import RichText from './RichText';

const htmlContent =
  "<p onload='alert(`i should be sanitized`)'>Here's some copy</p><span>More copy</span>";

it('It sanitises markup and renders properly', () => {
  const tree = renderWithTheme(
    <RichText align="right" markup={htmlContent} />
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
