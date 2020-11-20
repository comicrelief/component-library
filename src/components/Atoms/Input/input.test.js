import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import Input from './Input';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Input
      name="fullname"
      placeholder="This is the hint text"
      type="text"
      label="Label"
      errorMsg=""
      id="Accessibility info go here"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      color: #5C5C5E;
    }

    .c2 {
      margin-top: 0.5rem;
      position: relative;
      font-size: 1.25rem;
    }

    <label
      className="c0"
      htmlFor="Accessibility info go here"
    >
      <span
        className="c1 Input__LabelText-bcqy1o-2"
        color="inherit"
        dangerouslySetInnerHTML={
          Object {
            "__html": "Label",
          }
        }
        size="s"
      />
      <div
        className="c2"
      >
        
        <input
          aria-describedby="Accessibility info go here"
          className=""
          id="Accessibility info go here"
          name="fullname"
          placeholder="This is the hint text"
          type="text"
        />
      </div>
      
    </label>
  `);
});
