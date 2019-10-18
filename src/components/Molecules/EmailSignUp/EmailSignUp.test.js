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
        title="sign up letter"
        topCopy={<RichText markup={top} />}
        successCopy={<RichText markup={success} />}
        isSuccess={false}
        errorMsg=""
        buttonColor="teal"
        privacyCopy={<RichText markup={privacy} />}
        subscribe={() => 'Done'}
      />
      <EmailSignUp
        title="sign up letter"
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
      .c1 {
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 400;
      font-family: 'Anton',Impact,sans-serif;
    }

    .c8 {
      font-size: 1rem;
      text-transform: inherit;
      font-weight: bold;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c12 {
      display: inline-block;
      padding: 0.5rem 1rem;
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      border-radius: 30px;
      cursor: pointer;
      background-color: #22CFD8;
      color: #2C0230;
    }

    .c12:hover {
      background-color: #86E4E9;
      color: #2C0230;
    }

    .c10 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      position: relative;
      box-sizing: border-box;
      width: 100%;
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

    .c10:focus {
      border: 1px solid #666;
    }

    .c10:focus::-webkit-input-placeholder {
      color: #666;
    }

    .c10:focus::-moz-placeholder {
      color: #666;
    }

    .c10:focus:-ms-input-placeholder {
      color: #666;
    }

    .c10:focus::placeholder {
      color: #666;
    }

    .c6 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c9 {
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

    .c4 {
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

    .c3 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin-bottom: 0;
    }

    .c11 {
      margin-top: 1rem;
    }

    .c11 button {
      border-color: #2C0230;
      width: 100%;
      font-size: 1rem;
    }

    .c13 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c13 a {
      cursor: pointer;
      padding: 0 0.25rem;
      color: #FFFFFF;
      border-color: #FFFFFF;
    }

    .c13 a:hover {
      color: #FFFFFF;
      border-color: #FFFFFF;
    }

    .c5 {
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

    .c2 {
      margin-bottom: 2rem;
      font-size: 2.075rem;
    }

    @media (min-width:740px) {
      .c10 {
        max-width: 290px;
      }
    }

    @media (min-width:740px) {
      .c11 button {
        width: auto;
      }
    }

    @media (min-width:1024px) {
      .c2 {
        font-size: 2.75rem;
      }
    }

    <div
        className="c0"
      >
        <p
          className="c1 c2"
          color="inherit"
          size="s"
        >
          sign up letter
        </p>
        <div
          className="c3"
        >
          <div
            className="c4"
            dangerouslySetInnerHTML={
              Object {
                "__html": "<h1> Top Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
              }
            }
          />
        </div>
        <form
          className="c5"
        >
          <label
            className="c6 c7"
            htmlFor="email"
            name="email"
            onChange={[Function]}
            placeholder="example@youremail.com"
            value=""
          >
            <span
              className="c8 c9"
              color="inherit"
              size="s"
            >
              email
            </span>
            <input
              className="c10 c7"
              id="email"
              name="email"
              onChange={[Function]}
              placeholder="example@youremail.com"
              type="email"
              value=""
            />
            
          </label>
          <div
            className="c11"
          >
            <button
              className="c12"
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
          className="c13"
        >
          <div
            className="c4"
            dangerouslySetInnerHTML={
              Object {
                "__html": "check <a href=\\"https://www.comicrelief.com/privacy-notice\\">Privacy policy</a>",
              }
            }
          />
        </div>
      </div>,
      .c1 {
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 400;
      font-family: 'Anton',Impact,sans-serif;
    }

    .c4 {
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

    .c3 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin-bottom: 0;
    }

    .c2 {
      margin-bottom: 2rem;
      font-size: 2.075rem;
    }

    @media (min-width:1024px) {
      .c2 {
        font-size: 2.75rem;
      }
    }

    <div
        className="c0"
      >
        <p
          className="c1 c2"
          color="inherit"
          size="s"
        >
          sign up letter
        </p>
        <div
          className="c3"
        >
          <div
            className="c4"
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
