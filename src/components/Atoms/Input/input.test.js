import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
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
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c0 {
      width: 100%;
      position: relative;
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
      margin-bottom: 0.5rem;
      font-weight: normal;
    }

    .c3 {
      position: relative;
      font-size: 1.25rem;
    }

    .c4 {
      position: relative;
      width: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c5 {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 48px;
      padding: 1rem 2.4rem 1rem 1.5rem;
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

    .c5:focus {
      border: 1px solid #666;
    }

    @media (min-width:740px) {

    }

    @media (min-width:1024px) {

    }

    <label
      className="c0"
      htmlFor="Accessibility info go here"
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
      <div
        className="c3"
      >
        
        <div
          className="c4"
        >
          <input
            aria-describedby="Accessibility info go here"
            className="c5"
            id="Accessibility info go here"
            name="fullname"
            placeholder="This is the hint text"
            required={false}
            type="text"
          />
          
        </div>
      </div>
      
    </label>
  `);
});

it('renders with responsive max widths correctly', () => {
  const tree = renderWithTheme(
    <Input
      name="responsive-width"
      placeholder="This input has responsive max widths"
      type="text"
      label="Responsive Width Input"
      id="input-example-7"
      maxRemWidthMediumBreakpoint={20}
      maxRemWidthLargeBreakpoint={30}
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c0 {
      width: 100%;
      position: relative;
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
      margin-bottom: 0.5rem;
      font-weight: normal;
    }

    .c3 {
      position: relative;
      font-size: 1.25rem;
    }

    .c4 {
      position: relative;
      width: 100%;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c5 {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 48px;
      padding: 1rem 2.4rem 1rem 1.5rem;
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

    .c5:focus {
      border: 1px solid #666;
    }

    @media (min-width:740px) {
      .c4 {
        max-width: 20rem;
      }
    }

    @media (min-width:1024px) {
      .c4 {
        max-width: 30rem;
      }
    }

    <label
      className="c0"
      htmlFor="input-example-7"
    >
      <span
        className="c1 c2"
        color="inherit"
        dangerouslySetInnerHTML={
          Object {
            "__html": "Responsive Width Input",
          }
        }
        size="s"
      />
      <div
        className="c3"
      >
        
        <div
          className="c4"
        >
          <input
            aria-describedby="input-example-7"
            className="c5"
            id="input-example-7"
            name="responsive-width"
            placeholder="This input has responsive max widths"
            required={false}
            type="text"
          />
          
        </div>
      </div>
      
    </label>
  `);
});
