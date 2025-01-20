import React from "react";
import "jest-styled-components";
import renderWithTheme from "../../../../tests/hoc/shallowWithTheme";
import Input from "./Input";

it("renders correctly", () => {
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
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      color: #5C5C5E;
      width: 100%;
    }

    .c2 {
      margin-bottom: 0.5rem;
    }

    .c4 {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 48px;
      padding: 1rem 1.5rem;
      background-color: #F4F3F5;
      border: 1px solid;
      border-color: #E1E2E3;
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #000000;
      border-radius: 0.5rem;
      font-size: inherit;
      z-index: 2;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c4:focus {
      border: 1px solid #666;
    }

    .c3 {
      position: relative;
      font-size: 1.25rem;
    }

    @media (min-width:740px) {
      .c4 {
        max-width: 290px;
      }
    }

    <label
      className="c0"
      htmlFor="Accessibility info go here"
    >
      <div
        className=""
      >
        <span
          className="c1 c2"
          color="inherit"
          dangerouslySetInnerHTML={
            Object {
              "__html": "Label",
            }
          }
          size="s"
        />
      </div>
      <div
        className="c3"
      >
        
        <input
          aria-describedby="Accessibility info go here"
          className="c4"
          id="Accessibility info go here"
          name="fullname"
          placeholder="This is the hint text"
          required={false}
          type="text"
        />
      </div>
      
    </label>
  `);
});
