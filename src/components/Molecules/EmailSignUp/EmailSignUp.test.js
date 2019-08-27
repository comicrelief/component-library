import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import EmailSignUp from './EmailSignUp';
import RichText from '../../Atoms/RichText/RichText';

it('renders correctly', () => {
  const top =
    '<h1> Top Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
  const success =
    '<h1> Success Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>';
  const privacy =
    'check <a href="https://www.comicrelief.com/privacy-notice">Privacy policy</a>';
  const tree = renderWithTheme(
    <>
      <EmailSignUp
        topCopy={<RichText markup={top} />}
        successCopy={<RichText markup={success} />}
        isSuccess={false}
        errorMsg=""
        buttonColor="teal"
        privacyCopy={<RichText markup={privacy} />}
        subscribe={() => 'Done'}
      />
      <EmailSignUp
        topCopy={<RichText markup={top} />}
        successCopy={<RichText markup={success} />}
        isSuccess
        errorMsg=""
        backgroundColor="red"
        privacyCopy={<RichText markup={privacy} />}
        subscribe={() => 'Done'}
      />
    </>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    Array [
      .c6 {
      text-transform: inherit;
      font-weight: bold;
    }

    .c10 {
      display: inline-block;
      padding: 11px 17px;
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      border-radius: 30px;
      cursor: pointer;
      background-color: #22CFD8;
      color: #2C0230;
    }

    .c10:hover {
      background-color: #86E4E9;
      color: #2C0230;
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

    .c2 {
      text-align: left;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      font-size: 1rem;
      padding: 2rem;
      color: #FFFFFF;
      background-color: #2C0230;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin-bottom: 0;
    }

    .c9 {
      margin-top: 1rem;
    }

    .c9 button {
      border-color: #2C0230;
      width: 100%;
      font-size: 1rem;
    }

    .c11 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c11 a {
      cursor: pointer;
      padding: 0 0.25rem;
      color: #FFFFFF;
      border-color: #FFFFFF;
    }

    .c11 a:hover {
      color: #FFFFFF;
      border-color: #FFFFFF;
    }

    .c3 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      margin-bottom: 1rem;
    }

    .c7 {
      width: 100%;
    }

    @media (min-width:1440px) {
      .c10 {
        padding: 16px 30px;
      }
    }

    @media (min-width:740px) {
      .c8 {
        max-width: 290px;
      }
    }

    @media (min-width:740px) {
      .c9 button {
        width: auto;
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
            dangerouslySetInnerHTML={
              Object {
                "__html": "<h1> Top Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
              }
            }
          />
        </div>
        <form
          className="c3"
        >
          <label
            className="c4"
            htmlFor="signup-email"
          >
            <span
              className="c5 c6"
              color="inherit"
            >
              
            </span>
            <input
              aria-describedby="signup-email"
              className="c7 c8"
              name="email"
              onChange={[Function]}
              placeholder="example@youremail.com"
              type="email"
              value=""
            />
            
          </label>
          <div
            className="c9"
          >
            <button
              className="c10"
              color="teal"
              href="/#"
              onClick={[Function]}
              target="_self"
              type="button"
            >
              Subscribe
            </button>
          </div>
        </form>
        <div
          className="c11"
        >
          <div
            className="c2"
            dangerouslySetInnerHTML={
              Object {
                "__html": "check <a href=\\"https://www.comicrelief.com/privacy-notice\\">Privacy policy</a>",
              }
            }
          />
        </div>
      </div>,
      .c2 {
      text-align: left;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      font-size: 1rem;
      padding: 2rem;
      color: #FFFFFF;
      background-color: #E52630;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin-bottom: 0;
    }

    <div
        className="c0"
      >
        <div
          className="c1"
        >
          <div
            className="c2"
            dangerouslySetInnerHTML={
              Object {
                "__html": "<h1> Success Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
              }
            }
          />
        </div>
      </div>,
    ]
  `);
});
