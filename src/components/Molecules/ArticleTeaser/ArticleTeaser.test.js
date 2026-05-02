import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import ArticleTeaser from './ArticleTeaser';
import { defaultData } from '../../../styleguide/data/data';
it('renders article teaser correctly', () => {
  const tree = renderWithTheme(
    <ArticleTeaser
      href="/test"
      images={defaultData.images}
      image={defaultData.image}
      date=" 01 July 2019"
      title="News article"
      copy="News article copy"
      alt="Image's description"
      smallImageWidth="25%"
      largeImageWidth="100%"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c8 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      text-transform: inherit;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c8 {
      font-size: 0.75rem;
      line-height: normal;
      font-weight: bold;
    }

    .c8 span {
      font-size: inherit;
      line-height: inherit;
    }

    .c10 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 700;
      text-transform: inherit;
      letter-spacing: 0;
      font-size: 1.25rem;
      line-height: 1.5rem;
    }

    .c10 span {
      font-size: inherit;
      line-height: inherit;
    }

    .c4 {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
    }

    .c6 {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    .c1 {
      position: relative;
      display: inline;
      color: #000000;
      font-weight: normal;
    }

    .c1 :hover,
    .c1 :focus {
      color: #000000;
      text-decoration: none;
    }

    .c0 {
      width: 100%;
      height: 100%;
      display: flex;
      background-color: #FFFFFF;
      border-radius: 1rem;
      box-shadow: rgba(0,0,0,0.15) 0px 0px 1rem;
      transition: all 0.2s;
    }

    .c0:hover {
      box-shadow: rgba(0,0,0,0.25) 0px 0px 1rem;
      transform: translateY(-4px);
    }

    .c2 {
      padding: 0;
      display: flex;
      height: 100%;
      flex-direction: column;
      text-decoration: none;
      color: inherit;
      width: 100%;
    }

    .c3 {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .c3 img {
      border-radius: 1rem 1rem 0 0;
    }

    .c7 {
      padding: 2rem;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .c11 {
      margin: 0;
    }

    .c9 {
      display: block;
      margin-bottom: 1rem;
    }

    .c5 {
      display: flex;
    }

    @media (min-width: 740px) {
      .c8 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width: 1024px) {
      .c8 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (min-width: 740px) {
      .c10 {
        font-size: 1.25rem;
        line-height: 1.5rem;
      }
    }

    @media (min-width: 1024px) {
      .c10 {
        font-size: 1.375rem;
        line-height: 1.625rem;
      }
    }

    @media (min-width: 740px) {
      .c2 {
        flex-direction: row;
      }
    }

    @media (min-width: 1024px) {
      .c2 {
        flex-direction: column;
      }
    }

    @media (min-width: 740px) {
      .c3 {
        width: 45%;
      }

      .c3 img {
        border-radius: 1rem 0 0 1rem;
      }
    }

    @media (min-width: 1024px) {
      .c3 {
        width: 100%;
      }

      .c3 img {
        border-radius: 1rem 1rem 0 0;
      }
    }

    @media (min-width: 740px) {
      .c7 {
        width: 55%;
      }
    }

    @media (min-width: 1024px) {
      .c7 {
        width: 100%;
      }
    }

    <article
      className="c0"
    >
      <a
        buttonType="primary"
        category={null}
        className="c1 c2"
        color="red"
        fullWidth={false}
        home={false}
        href="/test"
        iconFirst={false}
        mobileColour={null}
        target="_self"
        type="standard"
        underline={false}
      >
        <div
          category={null}
          className="c3"
        >
          <div
            className="c4 c5"
            height="100%"
            image="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
            images="//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w"
            isBackgroundImage={false}
            nonObjFitImage="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
            objFitState={true}
            setObjFitState={[Function]}
            width="100%"
          >
            <img
              alt="Image's description"
              className="c6 lazyload"
              data-lowsrc={null}
              data-sizes="auto"
              data-src="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
              data-srcset="//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w"
              height="100%"
              mediumBreakpointRowLayout={null}
              objFitState={true}
              objectFit="cover"
              smallBreakpointRowLayout={null}
              src="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              width="100%"
            />
          </div>
        </div>
        <div
          category={null}
          className="c7"
        >
          <span
            className="c8 c9"
          >
             01 July 2019
          </span>
          <h3
            className="c10 c11"
            time={null}
          >
            News article
          </h3>
        </div>
      </a>
    </article>
  `);
});

it('renders press realese correctly', () => {
  const tree = renderWithTheme(
    <ArticleTeaser
      href="/test"
      category=""
      date=" 01 July 2019"
      title="Press Release"
      alt="Image's description"
      logoSize="80px"
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c8 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      text-transform: inherit;
      letter-spacing: 0;
      font-size: 1rem;
      line-height: 1.25rem;
    }

    .c8 {
      font-size: 0.75rem;
      line-height: normal;
      font-weight: bold;
    }

    .c8 span {
      font-size: inherit;
      line-height: inherit;
    }

    .c10 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 700;
      text-transform: inherit;
      letter-spacing: 0;
      font-size: 1.25rem;
      line-height: 1.5rem;
    }

    .c10 span {
      font-size: inherit;
      line-height: inherit;
    }

    .c4 {
      display: block;
      width: 80px;
      height: 80px;
      position: relative;
    }

    .c6 {
      width: 80px;
      height: 80px;
      display: block;
      object-fit: cover;
    }

    .c1 {
      position: relative;
      display: inline;
      color: #000000;
      font-weight: normal;
    }

    .c1 :hover,
    .c1 :focus {
      color: #000000;
      text-decoration: none;
    }

    .c0 {
      width: 100%;
      height: 100%;
      display: flex;
      background-color: #FFFFFF;
      border-radius: 1rem;
      box-shadow: rgba(0,0,0,0.15) 0px 0px 1rem;
      transition: all 0.2s;
    }

    .c0:hover {
      box-shadow: rgba(0,0,0,0.25) 0px 0px 1rem;
      transform: translateY(-4px);
    }

    .c2 {
      padding: 0;
      display: flex;
      height: 100%;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      color: inherit;
      width: 100%;
    }

    .c3 {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding-left: 1rem;
    }

    .c3 img {
      border-radius: 0;
    }

    .c7 {
      padding: 2rem;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .c11 {
      margin: 0;
    }

    .c9 {
      display: block;
      margin-bottom: 1rem;
    }

    .c5 {
      display: flex;
    }

    @media (min-width: 740px) {
      .c8 {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    @media (min-width: 1024px) {
      .c8 {
        font-size: 1.125rem;
        line-height: 1.375rem;
      }
    }

    @media (min-width: 740px) {
      .c10 {
        font-size: 1.25rem;
        line-height: 1.5rem;
      }
    }

    @media (min-width: 1024px) {
      .c10 {
        font-size: 1.375rem;
        line-height: 1.625rem;
      }
    }

    @media (min-width: 740px) {
      .c2 {
        flex-direction: row;
      }
    }

    @media (min-width: 1024px) {
      .c7 {
        width: 100%;
      }
    }

    <article
      className="c0"
    >
      <a
        buttonType="primary"
        category=""
        className="c1 c2"
        color="red"
        fullWidth={false}
        home={false}
        href="/test"
        iconFirst={false}
        mobileColour={null}
        target="_self"
        type="standard"
        underline={false}
      >
        <div
          category=""
          className="c3"
        >
          <div
            className="c4 c5"
            height="80px"
            image="mock.asset"
            images="mock.asset"
            isBackgroundImage={false}
            nonObjFitImage="mock.asset"
            objFitState={true}
            setObjFitState={[Function]}
            width="80px"
          >
            <img
              alt="Image's description"
              className="c6 lazyload"
              data-lowsrc="mock.asset"
              data-sizes="auto"
              data-src="mock.asset"
              data-srcset="mock.asset"
              height="80px"
              mediumBreakpointRowLayout={null}
              objFitState={true}
              objectFit="cover"
              smallBreakpointRowLayout={null}
              src="mock.asset"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              width="80px"
            />
          </div>
        </div>
        <div
          category=""
          className="c7"
        >
          <span
            className="c8 c9"
          >
             01 July 2019
          </span>
          <h3
            className="c10 c11"
            time={null}
          >
            Press Release
          </h3>
        </div>
      </a>
    </article>
  `);
});
