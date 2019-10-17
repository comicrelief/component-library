import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../hoc/shallowWithTheme';
import SingleMessage from './SingleMessage';
import data from '../../../styleguide/data/data';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="purple"
      image={data.image}
      imageSet={data.images}
      imageAltText=""
      copyFirst={false}
    >
      <Text tag="h1" color="white" size="xxl">
        title
      </Text>
      <Text tag="p" color="white">
        description
      </Text>
      <Link href="/" type="button" color="white">
        CTA
      </Link>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c6 {
      color: #FFFFFF;
      font-size: 2.075rem;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c7 {
      color: #FFFFFF;
      font-size: 1rem;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c3 {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .c4 {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .c8 {
      display: inline-block;
      padding: 0.5rem 1rem;
      text-align: center;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 700;
      border-radius: 30px;
      cursor: pointer;
      background-color: #FFFFFF;
      color: #2C0230;
    }

    .c8:hover {
      background-color: #918791;
      color: #2C0230;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: relative;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      overflow: hidden;
      background: #C180F9;
    }

    .c0 iframe {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: auto;
      z-index: 0;
    }

    .c5 {
      z-index: 1;
      padding: 8rem 4rem;
      -webkit-flex: 0 0 50%;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
    }

    .c1 {
      width: 100%;
      position: relative;
    }

    .c2 {
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    @media (min-width:740px) {
      .c0 {
        min-height: 50vh;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }
    }

    @media (min-width:740px) {
      .c5 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-flex: 0 0 50%;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        padding: 4rem;
      }
    }

    @media (min-width:740px) {
      .c1 {
        padding-bottom: 0;
      }
    }

    <div
      className="c0"
      id="single-msg__1__container"
    >
      <div
        className="c1"
      >
        <div
          className="c2"
        >
          <div
            className="c3"
            height="100%"
            width="100%"
          >
            <img
              alt=""
              className="c4 lazyload"
              data-lowsrc={null}
              data-sizes="auto"
              data-srcset="//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w"
              height="100%"
              src="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              width="100%"
            />
          </div>
        </div>
      </div>
      <div
        className="c5"
      >
        <h1
          className="c6"
          color="white"
          size="xxl"
        >
          title
        </h1>
        <p
          className="c7"
          color="white"
          size="s"
        >
          description
        </p>
        <a
          className="c8"
          color="white"
          href="/"
          target="_self"
          type="button"
        >
          CTA
        </a>
      </div>
    </div>
  `);
});

it('renders Single Message with no Image correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage backgroundColor="purple" copyFirst={false}>
      <Text tag="p" color="white">
        description
      </Text>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c2 {
      color: #FFFFFF;
      font-size: 1rem;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: relative;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      overflow: hidden;
      background: #C180F9;
    }

    .c0 iframe {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: auto;
      z-index: 0;
    }

    .c1 {
      z-index: 1;
      padding: 8rem 4rem;
      -webkit-flex: 0 0 60%;
      -ms-flex: 0 0 60%;
      flex: 0 0 60%;
      margin: auto;
      padding: 100px 20px;
    }

    @media (min-width:740px) {
      .c0 {
        min-height: 50vh;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }
    }

    @media (min-width:740px) {
      .c1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-flex: 0 0 50%;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        padding: 4rem;
      }
    }

    <div
      className="c0"
      id="single-msg__2__container"
    >
      <div
        className="c1"
      >
        <p
          className="c2"
          color="white"
          size="s"
        >
          description
        </p>
      </div>
    </div>
  `);
});

it('renders fullWidth Single Message correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage backgroundColor="purple" copyFirst={false}>
      <Text tag="p" color="white">
        description
      </Text>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c2 {
      color: #FFFFFF;
      font-size: 1rem;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: relative;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      overflow: hidden;
      background: #C180F9;
    }

    .c0 iframe {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: auto;
      z-index: 0;
    }

    .c1 {
      z-index: 1;
      padding: 8rem 4rem;
      -webkit-flex: 0 0 60%;
      -ms-flex: 0 0 60%;
      flex: 0 0 60%;
      margin: auto;
      padding: 100px 20px;
    }

    @media (min-width:740px) {
      .c0 {
        min-height: 50vh;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }
    }

    @media (min-width:740px) {
      .c1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-flex: 0 0 50%;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        padding: 4rem;
      }
    }

    <div
      className="c0"
      id="single-msg__3__container"
    >
      <div
        className="c1"
      >
        <p
          className="c2"
          color="white"
          size="s"
        >
          description
        </p>
      </div>
    </div>
  `);
});

it('renders double image Single Message correctly', () => {
  const tree = renderWithTheme(
    <SingleMessage
      backgroundColor="yellow"
      copyFirst={false}
      image={data.image}
      imageSet={data.images}
      imageAltText=""
      image2={data.image}
      imageSet2={data.images}
      imageAltText2=""
    >
      <Text tag="p" color="white">
        description
      </Text>
    </SingleMessage>
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c6 {
      color: #FFFFFF;
      font-size: 1rem;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c3 {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .c4 {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .c0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: relative;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      overflow: hidden;
      background: #FFE400;
    }

    .c0 iframe {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: auto;
      z-index: 0;
    }

    .c5 {
      z-index: 1;
      padding: 8rem 4rem;
      -webkit-flex: 0 0 50%;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
    }

    .c1 {
      width: 100%;
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c2 {
      width: 100%;
      height: 100%;
      height: 50%;
      z-index: 1;
    }

    @media (min-width:740px) {
      .c0 {
        min-height: 50vh;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }
    }

    @media (min-width:740px) {
      .c5 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-flex: 0 0 50%;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        padding: 4rem;
      }
    }

    @media (min-width:740px) {
      .c1 {
        padding-bottom: 0;
      }
    }

    <div
      className="c0"
      id="single-msg__4__container"
    >
      <div
        className="c1"
      >
        <div
          className="c2"
        >
          <div
            className="c3"
            height="100%"
            width="100%"
          >
            <img
              alt=""
              className="c4 lazyload"
              data-lowsrc={null}
              data-sizes="auto"
              data-srcset="//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w"
              height="100%"
              src="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              width="100%"
            />
          </div>
        </div>
        <div
          className="c2"
        >
          <div
            className="c3"
            height="100%"
            width="100%"
          >
            <img
              alt=""
              className="c4 lazyload"
              data-lowsrc={null}
              data-sizes="auto"
              data-srcset="//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w"
              height="100%"
              src="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              width="100%"
            />
          </div>
        </div>
      </div>
      <div
        className="c5"
      >
        <p
          className="c6"
          color="white"
          size="s"
        >
          description
        </p>
      </div>
    </div>
  `);
});
