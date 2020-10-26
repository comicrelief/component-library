import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import TextInputWithDropdown from './TextInputWithDropdown';
import { Dropdown, Container } from './TextInputWithDropdown.style';

it('renders correctly with no value and no options', () => {
  const renderer = renderWithTheme(
    <TextInputWithDropdown
      value=""
      id="text-input-with-dropdown"
      label="Search for bikes"
      name="query"
      onChange={() => {}}
      onSelect={() => {}}
      options={[]}
    />
  );

  expect(renderer.toJSON()).toMatchInlineSnapshot(`
    .c2 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c4 {
      font-weight: normal;
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
    }

    .c4:focus {
      border: 1px solid #666;
    }

    .c4:focus::-webkit-input-placeholder {
      color: #666;
    }

    .c4:focus::-moz-placeholder {
      color: #666;
    }

    .c4:focus:-ms-input-placeholder {
      color: #666;
    }

    .c4:focus::placeholder {
      color: #666;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      font-weight: bold;
      color: #5C5C5E;
    }

    .c3 {
      margin-top: 0.5rem;
      position: relative;
      font-size: 1.25rem;
    }

    .c0 {
      position: relative;
    }

    @media (min-width:740px) {
      .c4 {
        max-width: 290px;
      }
    }

    <div
      className="c0 TextInputWithDropdown"
      onKeyDown={[Function]}
    >
      <label
        className="c1 TextInputWithDropdown__input"
        htmlFor="text-input-with-dropdown"
      >
        <span
          className="c2 "
          color="inherit"
          dangerouslySetInnerHTML={
            Object {
              "__html": "Search for bikes",
            }
          }
          size="s"
        />
        <div
          className="c3"
        >
          
          <input
            aria-describedby="text-input-with-dropdown"
            autoComplete="off"
            className="c4"
            id="text-input-with-dropdown"
            name="query"
            onChange={[Function]}
            placeholder=""
            type="text"
            value=""
          />
        </div>
        
      </label>
    </div>
  `);
  expect(() => renderer.root.findByType(Container).findByType(Dropdown)).toThrow();
});

it('renders correctly with value and no options', () => {
  const renderer = renderWithTheme(
    <TextInputWithDropdown
      value="bikes"
      id="text-input-with-dropdown"
      label="Search for bikes"
      name="query"
      onChange={() => {}}
      onSelect={() => {}}
      options={[]}
    />
  );

  expect(renderer.toJSON()).toMatchInlineSnapshot(`
    .c2 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c4 {
      font-weight: normal;
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
    }

    .c4:focus {
      border: 1px solid #666;
    }

    .c4:focus::-webkit-input-placeholder {
      color: #666;
    }

    .c4:focus::-moz-placeholder {
      color: #666;
    }

    .c4:focus:-ms-input-placeholder {
      color: #666;
    }

    .c4:focus::placeholder {
      color: #666;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      font-weight: bold;
      color: #5C5C5E;
    }

    .c3 {
      margin-top: 0.5rem;
      position: relative;
      font-size: 1.25rem;
    }

    .c0 {
      position: relative;
    }

    @media (min-width:740px) {
      .c4 {
        max-width: 290px;
      }
    }

    <div
      className="c0 TextInputWithDropdown"
      onKeyDown={[Function]}
    >
      <label
        className="c1 TextInputWithDropdown__input"
        htmlFor="text-input-with-dropdown"
      >
        <span
          className="c2 "
          color="inherit"
          dangerouslySetInnerHTML={
            Object {
              "__html": "Search for bikes",
            }
          }
          size="s"
        />
        <div
          className="c3"
        >
          
          <input
            aria-describedby="text-input-with-dropdown"
            autoComplete="off"
            className="c4"
            id="text-input-with-dropdown"
            name="query"
            onChange={[Function]}
            placeholder=""
            type="text"
            value="bikes"
          />
        </div>
        
      </label>
    </div>
  `);
  expect(() => renderer.root.findByType(Container).findByType(Dropdown)).toThrow();
});

it('renders correctly with value and options', () => {
  const renderer = renderWithTheme(
    <TextInputWithDropdown
      value="c"
      id="text-input-with-dropdown"
      label="Search for bikes"
      name="query"
      onChange={() => {}}
      onSelect={() => {}}
      options={['Canyon', 'Cannondale', 'Condor', 'Cube']}
    />
  );

  expect(renderer.toJSON()).toMatchInlineSnapshot(`
    .c2 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c8 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c4 {
      font-weight: normal;
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
    }

    .c4:focus {
      border: 1px solid #666;
    }

    .c4:focus::-webkit-input-placeholder {
      color: #666;
    }

    .c4:focus::-moz-placeholder {
      color: #666;
    }

    .c4:focus:-ms-input-placeholder {
      color: #666;
    }

    .c4:focus::placeholder {
      color: #666;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      font-weight: bold;
      color: #5C5C5E;
    }

    .c3 {
      margin-top: 0.5rem;
      position: relative;
      font-size: 1.25rem;
    }

    .c0 {
      position: relative;
    }

    .c5 {
      z-index: 3;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      position: absolute;
      left: 0;
      max-height: 300px;
      overflow: auto;
      background-color: #FFFFFF;
      border: 1px solid;
      margin-top: -1px;
      width: 100%;
    }

    .c6 {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .c7 {
      padding: 0.5rem;
      cursor: pointer;
      border-top: 1px solid #F4F3F5;
    }

    .c7:hover,
    .c7:focus {
      background-color: #F4F3F5;
    }

    @media (min-width:740px) {
      .c4 {
        max-width: 290px;
      }
    }

    @media (min-width:740px) {
      .c5 {
        max-width: 500px;
      }
    }

    <div
      className="c0 TextInputWithDropdown"
      onKeyDown={[Function]}
    >
      <label
        className="c1 TextInputWithDropdown__input"
        htmlFor="text-input-with-dropdown"
      >
        <span
          className="c2 "
          color="inherit"
          dangerouslySetInnerHTML={
            Object {
              "__html": "Search for bikes",
            }
          }
          size="s"
        />
        <div
          className="c3"
        >
          
          <input
            aria-describedby="text-input-with-dropdown"
            autoComplete="off"
            className="c4"
            id="text-input-with-dropdown"
            name="query"
            onChange={[Function]}
            placeholder=""
            type="text"
            value="c"
          />
        </div>
        
      </label>
      <div
        className="c5 TextInputWithDropdown__options"
      >
        <ul
          className="c6"
          onBlur={[Function]}
          role="listbox"
        >
          <li
            aria-selected={false}
            className="TextInputWithDropdownstyle__DropdownItem-sc-1s4bv7m-3 c7"
            id="option-0"
            onClick={[Function]}
            onKeyPress={[Function]}
            role="option"
            tabIndex="-1"
          >
            <span
              className="c8"
              color="inherit"
              size="s"
            >
              Canyon
            </span>
          </li>
          <li
            aria-selected={false}
            className="TextInputWithDropdownstyle__DropdownItem-sc-1s4bv7m-3 c7"
            id="option-1"
            onClick={[Function]}
            onKeyPress={[Function]}
            role="option"
            tabIndex="-1"
          >
            <span
              className="c8"
              color="inherit"
              size="s"
            >
              Cannondale
            </span>
          </li>
          <li
            aria-selected={false}
            className="TextInputWithDropdownstyle__DropdownItem-sc-1s4bv7m-3 c7"
            id="option-2"
            onClick={[Function]}
            onKeyPress={[Function]}
            role="option"
            tabIndex="-1"
          >
            <span
              className="c8"
              color="inherit"
              size="s"
            >
              Condor
            </span>
          </li>
          <li
            aria-selected={false}
            className="TextInputWithDropdownstyle__DropdownItem-sc-1s4bv7m-3 c7"
            id="option-3"
            onClick={[Function]}
            onKeyPress={[Function]}
            role="option"
            tabIndex="-1"
          >
            <span
              className="c8"
              color="inherit"
              size="s"
            >
              Cube
            </span>
          </li>
        </ul>
      </div>
    </div>
  `);
  expect(renderer.root.findByType(Container).findByType(Dropdown)).toBeTruthy();
});
