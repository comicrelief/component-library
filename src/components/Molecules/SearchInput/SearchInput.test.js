import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import SearchInput from './SearchInput';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <SearchInput
      onChange={e => {
        e.preventDefault();
        return e.target.value;
      }}
      value=""
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c6 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      line-height: normal;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c4 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      color: #5C5C5E;
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
      margin-top: 0.5rem;
      position: relative;
      font-size: 1.25rem;
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
      .c5 input {
        height: 100px;
        font-size: 3rem;
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
                
                <input
                  aria-describedby="search"
                  className=""
                  id="search"
                  name="search"
                  onChange={[Function]}
                  placeholder=""
                  role="searchbox"
                  type="text"
                  value=""
                />
              </div>
              
            </label>
          </div>
        </div>
      </div>
    </div>
  `);
});
