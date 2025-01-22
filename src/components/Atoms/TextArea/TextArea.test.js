import React from "react";
import "jest-styled-components";
import renderWithTheme from "../../../../tests/hoc/shallowWithTheme";
import TextArea from "./TextArea";

it("renders correctly", () => {
  const tree = renderWithTheme(
    <TextArea
      name="description"
      placeholder="This is text area"
      label="Label"
      rows={5}
      errorMsg=""
      id="Please leave your comment here"
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

    .c3 {
      box-sizing: border-box;
      width: 100%;
      margin: 0;
      padding: 1rem 1.5rem;
      font-size: 1.25rem;
      background-color: #F4F3F5;
      border: 1px solid;
      border-radius: 0.5rem;
      border-color: #E1E2E3;
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #000000;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      resize: vertical;
    }

    .c3:focus {
      border: 1px solid #666;
    }

    .c3:focus::-webkit-input-placeholder {
      visibility: hidden;
    }

    .c3:focus::-moz-placeholder {
      visibility: hidden;
    }

    .c3:focus:-ms-input-placeholder {
      visibility: hidden;
    }

    .c3:focus::placeholder {
      visibility: hidden;
    }

    <label
      className="c0"
      htmlFor="Please leave your comment here"
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
      <textarea
        aria-describedby="Please leave your comment here"
        className="c3"
        name="description"
        placeholder="This is text area"
        rows={5}
      />
      
    </label>
  `);
});
