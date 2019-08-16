import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import SearchInput from './SearchInput';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <SearchInput
      submitSearch={e => {
        e.preventDefault();
        return 'Your search result';
      }}
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c6 {
      text-transform: inherit;
      font-weight: bold;
    }

    .c8 {
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      padding: 13px;
      margin: 10px 0;
      font-size: 1.2rem;
      background-color: #FFFFFF;
      border: 1px solid;
      border-color: #2C0230;
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #2C0230;
    }

    .c8:focus {
      border: 1px solid #666;
    }

    .c8:focus::-webkit-input-placeholder {
      color: transparent;
    }

    .c8:focus:-moz-placeholder {
      color: transparent;
    }

    .c8:focus::-moz-placeholder {
      color: transparent;
    }

    .c8:focus:-ms-input-placeholder {
      color: transparent;
    }

    .c4 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c5 {
      visibility: border:0;
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
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-wrap: no-wrap;
      -ms-flex-wrap: no-wrap;
      flex-wrap: no-wrap;
      margin: 4rem auto;
      padding-bottom: 1rem;
      width: 100%;
      border-bottom: 4px solid #E52630;
      overflow: hidden;
    }

    .c3 {
      width: 90%;
      margin: 0;
      margin-left: 1rem;
      margin-right: 0.5rem;
    }

    .c7 {
      margin: 0;
      padding: 0;
      max-width: 100%;
      border: 0;
      outline: #E52630;
    }

    .c7:focus {
      border: 0;
    }

    .c9 {
      width: 90%;
      margin: 0;
      margin-left: 1rem;
      margin-right: 0.5rem;
      margin: 0;
      width: 60px;
    }

    .c10 {
      margin: 0;
      padding: 0;
      max-width: 100%;
      border: 0;
      outline: #E52630;
      text-indent: -9999px;
      background-color: #c7c7c7;
      -webkit-mask: url(mock.asset) no-repeat right center;
      mask: url(mock.asset) no-repeat right center;
      -webkit-mask-size: 85%;
      mask-size: 85%;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      cursor: pointer;
    }

    .c10:focus {
      border: 0;
    }

    .c10:hover {
      background: #2C0230;
    }

    @media (min-width:740px) {
      .c8 {
        max-width: 290px;
      }
    }

    @media (min-width:740px) {
      .c7 {
        height: 100px;
        font-size: 2.075rem;
      }
    }

    @media (min-width:740px) {
      .c9 {
        width: 70px;
      }
    }

    @media (min-width:740px) {
      .c10 {
        height: 100px;
        font-size: 2.075rem;
      }
    }

    @media (min-width:740px) {
      .c10 {
        -webkit-mask-size: 100%;
        mask-size: 100%;
      }
    }

    <div
      className="c0"
    >
      <div
        className="c1"
      >
        <form
          className="c2"
          onSubmit={[Function]}
        >
          <div
            className="c3"
          >
            <label
              className="c4"
              htmlFor="edit-text"
            >
              <span
                className="c5 c6"
                color="inherit"
              >
                Search
              </span>
              <input
                aria-describedby="edit-text"
                className="c7 c8"
                name="search"
                placeholder=""
                type="text"
              />
              
            </label>
          </div>
          <div
            className="c9"
          >
            <label
              className="c4"
              htmlFor="edit-submit-search"
            >
              <span
                className="c6"
                color="inherit"
              >
                
              </span>
              <input
                aria-describedby="edit-submit-search"
                className="c10 c8"
                name="search action"
                placeholder=""
                type="submit"
              />
              
            </label>
          </div>
        </form>
      </div>
    </div>
  `);
});
