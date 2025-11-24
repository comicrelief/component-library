import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import SearchInput from './SearchInput';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <SearchInput
      onChange={(e) => {
        e.preventDefault();
        return e.target.value;
      }}
      value=""
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c6 {
      font-size: 1.125rem;
      line-height: 1.375rem;
      text-transform: inherit;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c4 {
      width: 100%;
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      color: #000000;
    }

    .c7 {
      border: 0;
      -webkit-clip: rect(0 0 0 0);
      clip: rect(0 0 0 0);
      -webkit-clip-path: inset(50%);
      clip-path: inset(50%);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    .c8 {
      position: relative;
      font-size: 1.25rem;
    }

    .c9 {
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

    .c10 {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 48px;
      padding: 1rem 2.4rem 1rem 1.5rem;
      background-color: #F4F3F5;
      border: 1px solid;
      border-color: #969598;
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

    .c10:focus {
      border: 1px solid #666;
    }

    .c0 {
      width: 100%;
      max-width: 1440px;
      margin: auto;
    }

    .c1 {
      margin: 1rem auto;
      padding: 0 calc((4 * 0.25rem));
    }

    .c2 {
      margin: 4rem auto;
      width: 100%;
      border-bottom: 4px solid #E52630;
      overflow: hidden;
    }

    .c3 {
      width: 100%;
      padding: 0 0.5rem;
    }

    .c5 input {
      padding: 13px 0;
      margin: 0;
      max-width: 100%;
      border: 0;
      outline: #E52630;
      background: none;
    }

    .c5 input:focus {
      border: 0;
    }

    @media (min-width:740px) {

    }

    @media (min-width:1024px) {

    }

    @media (min-width:740px) {
      .c5 input {
        height: 100px;
        font-size: 2rem;
      }
    }

    <div
      className="c0"
    >
      <div
        className="c1"
      >
        <div
          className="c2"
          role="search"
        >
          <div
            className="c3"
          >
            <label
              className="c4 c5"
              htmlFor="search"
            >
              <span
                className="c6 c7"
                color="inherit"
                dangerouslySetInnerHTML={
                  Object {
                    "__html": "Search",
                  }
                }
                size="s"
              />
              <div
                className="c8"
              >
                
                <div
                  className="c9"
                >
                  <input
                    aria-required={false}
                    className="c10"
                    id="search"
                    name="search"
                    onChange={[Function]}
                    placeholder=""
                    required={false}
                    role="searchbox"
                    type="text"
                    value=""
                  />
                  
                </div>
              </div>
              
            </label>
          </div>
        </div>
      </div>
    </div>
  `);
});
