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
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      text-transform: inherit;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c1 span {
      font-size: inherit;
      line-height: inherit;
    }

    .c0 {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      color: #000000;
    }

    .c2 {
      margin-bottom: 0.5rem;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      text-transform: inherit;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c3 {
      position: relative;
      font-size: 1.25rem;
    }

    .c4 {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: flex-end;
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
      border-color: #969598;
      box-shadow: none;
      appearance: none;
      color: #000000;
      border-radius: 0.5rem;
      font-size: inherit;
      z-index: 2;
      font-family: inherit;
    }

    .c5 :focus {
      border: 1px solid #666;
    }

    @media (min-width: 740px) {
      .c1 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width: 1024px) {
      .c1 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (min-width: 740px) {
      .c2 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width: 1024px) {
      .c2 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    <label
      className="c0"
      errorMsg=""
      htmlFor="Accessibility info go here"
      optional={null}
    >
      <span
        className="c1 c2"
        dangerouslySetInnerHTML={
          {
            "__html": "Label",
          }
        }
      />
      <div
        className="c3"
        error={false}
      >
        <div
          className="c4"
          error={false}
        >
          <input
            aria-required={false}
            className="c5"
            error={false}
            id="Accessibility info go here"
            name="fullname"
            placeholder="This is the hint text"
            prefixLength={0}
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
      maxPxWidthMediumBreakpoint={150}
      maxPxWidthLargeBreakpoint={250}
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c1 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      text-transform: inherit;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c1 span {
      font-size: inherit;
      line-height: inherit;
    }

    .c0 {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      color: #000000;
    }

    .c2 {
      margin-bottom: 0.5rem;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      text-transform: inherit;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c3 {
      position: relative;
      font-size: 1.25rem;
    }

    .c4 {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: flex-end;
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
      border-color: #969598;
      box-shadow: none;
      appearance: none;
      color: #000000;
      border-radius: 0.5rem;
      font-size: inherit;
      z-index: 2;
      font-family: inherit;
    }

    .c5 :focus {
      border: 1px solid #666;
    }

    @media (min-width: 740px) {
      .c1 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width: 1024px) {
      .c1 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (min-width: 740px) {
      .c2 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width: 1024px) {
      .c2 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width: 740px) {
      .c4 {
        max-width: 150px;
      }
    }

    @media (min-width: 1024px) {
      .c4 {
        max-width: 250px;
      }
    }

    <label
      className="c0"
      errorMsg=""
      htmlFor="input-example-7"
      optional={null}
    >
      <span
        className="c1 c2"
        dangerouslySetInnerHTML={
          {
            "__html": "Responsive Width Input",
          }
        }
      />
      <div
        className="c3"
        error={false}
      >
        <div
          className="c4"
          error={false}
          maxPxWidthLargeBreakpoint={250}
          maxPxWidthMediumBreakpoint={150}
        >
          <input
            aria-required={false}
            className="c5"
            error={false}
            id="input-example-7"
            name="responsive-width"
            placeholder="This input has responsive max widths"
            prefixLength={0}
            required={false}
            type="text"
          />
        </div>
      </div>
    </label>
  `);
});
