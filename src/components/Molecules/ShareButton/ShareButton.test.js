import React from "react";
import "jest-styled-components";
import renderWithTheme from "../../../hoc/shallowWithTheme";
import ShareButton from "./ShareButton";

it("renders correctly", () => {
  const tree = renderWithTheme(<ShareButton />).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c4 {
      -webkit-text-decoration: none;
      text-decoration: none;
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-transition: opacity 0.2s;
      transition: opacity 0.2s;
    }

    .c4:hover,
    .c4:focus {
      opacity: 0.6;
    }

    .c5 {
      width: 100%;
      width: auto;
      margin-right: 0.5rem;
    }

    .c6 {
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

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
    }

    .c1 {
      width: auto;
      margin: 0 1rem 0 0;
    }

    .c1:first-child {
      margin-bottom: 0;
    }

    .c2 {
      width: auto;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .c3 {
      width: 40px;
      height: 40px;
      display: inline-block;
      margin: 0.5rem;
    }

    <div
      className="c0"
    >
      <p
        className="c1"
      >
        Share with:
      </p>
      <ul
        className="c2"
      >
        <li
          className="c3"
        >
          <a
            className="c4"
            data-test="header-esu-icon"
            href="#"
            onClick={[Function]}
            rel="noopener noreferrer"
            role="button"
            target="__blank"
            title="Share on Facebook"
          >
            <img
              alt="comicrelief"
              className="c5"
              size="auto"
              src="mock.asset"
            />
            <span
              className="c6"
            >
              (opens in new window)
            </span>
          </a>
        </li>
        <li
          className="c3"
        >
          <a
            className="c4"
            data-test="header-esu-icon"
            href="#"
            onClick={[Function]}
            rel="noopener noreferrer"
            role="button"
            target="__blank"
            title="Share on Twitter"
          >
            <img
              alt="comicrelief"
              className="c5"
              size="auto"
              src="mock.asset"
            />
            <span
              className="c6"
            >
              (opens in new window)
            </span>
          </a>
        </li>
      </ul>
    </div>
  `);
});
