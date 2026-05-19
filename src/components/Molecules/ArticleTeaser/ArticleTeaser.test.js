import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import ArticleTeaser from './ArticleTeaser';
import { defaultData } from '../../../data/data';
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
.c11 {
  font-family: 'Montserrat',Helvetica,Arial,sans-serif;
  font-weight: 400;
  text-transform: inherit;
  letter-spacing: 0;
  font-size: 1rem;
  line-height: 1.25rem;
}

.c11 {
  font-size: 0.75rem;
  line-height: normal;
  font-weight: bold;
}

.c11 span {
  font-size: inherit;
  line-height: inherit;
}

.c13 {
  font-family: 'Montserrat',Helvetica,Arial,sans-serif;
  font-weight: 700;
  text-transform: inherit;
  letter-spacing: 0;
  font-size: 1rem;
  line-height: 1.25rem;
}

.c13 span {
  font-size: inherit;
  line-height: inherit;
}

.c17 {
  font-family: 'Montserrat',Helvetica,Arial,sans-serif;
  font-weight: 400;
  text-transform: inherit;
  letter-spacing: 0;
  font-size: 1rem;
  line-height: 1.25rem;
}

.c17 span {
  font-size: inherit;
  line-height: inherit;
}

.c6 {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}

.c9 {
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
  color: #E52630;
}

.c1:hover,
.c1:focus {
  color: #000000;
  text-decoration: none;
}

.c20 {
  height: 4px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -5px;
  transition: opacity 0.15s 0.1s;
  opacity: 0;
}

.c22 {
  height: 2rem;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  content: "";
}

.c18 {
  position: relative;
}

.c25 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.65,-0.19,0.37,1.16);
  transform: scale(1);
  transform-origin: center;
}

.c24 {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #E52630;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}

.c8 {
  display: flex;
  overflow: hidden;
}

.c4 {
  display: flex;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #FFFFFF;
  flex-direction: column;
}

.c16 {
  width: 100%;
  height: auto;
  position: relative;
  margin-top: auto;
  padding: 2rem 2.5rem 0 0;
}

.c16 .c21 {
  transform: none;
  top: auto;
  bottom: -8px;
}

.c16 span {
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.15s 0.1s;
  color: #E52630;
}

.c2 {
  padding: 0;
  display: flex;
  height: 100%;
  text-decoration: none;
  color: inherit;
  width: 100%;
}

.c2 .c23 {
  background-color: #E52630;
}

.c2 .c3 {
  box-shadow: rgba(0,0,0,0.15) 0px 0px 1rem;
}

.c2:hover .c3 {
  box-shadow: rgba(0,0,0,0.25) 0px 0px 1rem;
}

.c0 {
  width: 100%;
  height: 100%;
  display: flex;
}

.c5 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.c10 {
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.c14 {
  margin: 0;
}

.c12 {
  display: block;
  margin-bottom: 1rem;
}

.c26 {
  display: inline-block;
  color: #FFFFFF;
  fill: currentColor;
}

@media (min-width: 740px) {
  .c11 {
    font-size: 1rem;
    line-height: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .c11 {
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
}

@media (min-width: 740px) {
  .c13 {
    font-size: 1rem;
    line-height: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .c13 {
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
}

@media (min-width: 740px) {
  .c17 {
    font-size: 1rem;
    line-height: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .c17 {
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
}

@media (min-width: 740px) {
  .c4 {
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .c4 {
    flex-direction: column;
  }
}

@media (min-width: 1024px) {
  .c16 span {
    color: #000000;
  }
}

@media (min-width: 1024px) {
  .c2 .c23 {
    transition: background-color 0.15s 0.1s;
    background-color: #000000;
  }
}

@media (max-width:739px) {
  .c2 .c3 {
    transition: box-shadow 0.3s;
  }
}

@media (min-width: 740px) {
  .c2 >div {
    transition: transform 0.4s cubic-bezier(0.68,-1.15,0.265,2.35);
    transform-origin: center;
  }

  .c2:hover >div,
  .c2:focus >div {
    transform: translateY(-10px);
  }

  .c2 .c7 img {
    transform: scale(1.02);
    transition: transform 0.3s cubic-bezier(0.65,-0.19,0.37,1.16);
  }

  .c2:hover .c7 img {
    transform: scale(1.04);
  }

  .c2:hover .c23 {
    background-color: #E52630;
  }

  .c2:hover .c19 {
    opacity: 1;
  }

  .c2:hover .c15 span {
    color: #E52630;
  }
}

@media (min-width: 740px) {
  .c5 {
    width: 45%;
  }
}

@media (min-width: 1024px) {
  .c5 {
    width: 100%;
  }
}

@media (min-width: 740px) {
  .c10 {
    width: 55%;
  }
}

@media (min-width: 1024px) {
  .c10 {
    width: 100%;
  }
}

<article
  className="c0"
  isNewsTeaser={true}
>
  <a
    buttonType="primary"
    category={null}
    className="c1 c2"
    fullWidth={false}
    home={false}
    href="/test"
    iconFirst={false}
    isNewsTeaser={true}
    mobileColour={null}
    target="_self"
    type="standard"
    underline={false}
  >
    <div
      className="c3 c4"
      isNewsTeaser={true}
    >
      <div
        className="c5"
        isNewsTeaser={true}
      >
        <div
          className="c6 c7 c8"
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
            className="c9 lazyload"
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
        className="c10"
        isNewsTeaser={true}
      >
        <span
          className="c11 c12"
        >
           01 July 2019
        </span>
        <h4
          className="c13 c14"
          time={null}
        >
          News article
        </h4>
        <div
          className="c15 c16"
        >
          <span
            className="c17 c18"
          >
            Read more
            <img
              alt="Read more"
              className="c19 c20"
              src="mock.asset"
            />
          </span>
          <div
            className="c21 c22"
          >
            <div
              className="c23 c24"
            >
              <span
                className="c25"
              >
                <svg
                  className="c26"
                  fill="none"
                  height="15"
                  viewBox="0 0 15 15"
                  width="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.58496 1.3501C9.1395 0.88346 8.40641 0.883488 7.96094 1.3501C7.52803 1.80361 7.5281 2.53033 7.96094 2.98389L11.1582 6.3335H1.13672C0.48748 6.3335 0 6.87834 0 7.50049C2.15408e-05 8.12262 0.487494 8.66748 1.13672 8.66748H11.1582L7.96094 12.0171C7.52806 12.4706 7.52899 13.1974 7.96191 13.6509C8.18163 13.8804 8.47556 14.0005 8.77344 14.0005C9.07114 14.0004 9.36533 13.8809 9.58496 13.6509L14.6758 8.31689L14.6748 8.31592L14.6875 8.30322L14.6865 8.30225C14.6954 8.29227 14.7044 8.28494 14.71 8.27783C14.7117 8.27557 14.7133 8.27298 14.7148 8.271C14.7485 8.23215 14.7824 8.18937 14.8135 8.14111L14.8154 8.13818C14.8354 8.1067 14.8493 8.07854 14.8564 8.06396L14.8652 8.04639L14.8662 8.04443L14.8672 8.04346C14.8672 8.04346 14.868 8.0407 14.8691 8.03857C14.8709 8.03524 14.8758 8.02683 14.8799 8.01904L14.8802 8.01851C14.8888 8.00212 14.9034 7.97435 14.917 7.93994V7.93799C14.9303 7.90387 14.9391 7.87297 14.9443 7.854C14.9469 7.8447 14.9498 7.83579 14.9512 7.83057C14.9527 7.82466 14.9535 7.82292 14.9541 7.8208C14.9541 7.8208 14.9542 7.81765 14.9551 7.81494L14.958 7.80615L14.9586 7.80434C14.9631 7.78973 14.9718 7.76131 14.9785 7.72705V7.7251C15.0066 7.57717 15.0066 7.42472 14.9785 7.27686V7.2749L14.958 7.1958L14.9551 7.18604L14.9531 7.18018L14.9512 7.17236C14.9497 7.16652 14.9481 7.15689 14.9453 7.14697C14.9398 7.12707 14.9307 7.09666 14.917 7.06201C14.9032 7.027 14.8885 6.99825 14.8799 6.98193C14.8758 6.97415 14.8709 6.96574 14.8691 6.9624L14.8564 6.93701C14.849 6.92189 14.8351 6.89384 14.8154 6.86279L14.8145 6.86084L14.7529 6.77393C14.7316 6.74671 14.7094 6.72141 14.6875 6.69775C14.6837 6.69353 14.6802 6.68867 14.6758 6.68408L9.58496 1.3501Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
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
.c11 {
  font-family: 'Montserrat',Helvetica,Arial,sans-serif;
  font-weight: 400;
  text-transform: inherit;
  letter-spacing: 0;
  font-size: 1rem;
  line-height: 1.25rem;
}

.c11 {
  font-size: 0.75rem;
  line-height: normal;
  font-weight: bold;
}

.c11 span {
  font-size: inherit;
  line-height: inherit;
}

.c13 {
  font-family: 'Montserrat',Helvetica,Arial,sans-serif;
  font-weight: 700;
  text-transform: inherit;
  letter-spacing: 0;
  font-size: 1rem;
  line-height: 1.25rem;
}

.c13 span {
  font-size: inherit;
  line-height: inherit;
}

.c17 {
  font-family: 'Montserrat',Helvetica,Arial,sans-serif;
  font-weight: 400;
  text-transform: inherit;
  letter-spacing: 0;
  font-size: 1rem;
  line-height: 1.25rem;
}

.c17 span {
  font-size: inherit;
  line-height: inherit;
}

.c6 {
  display: block;
  width: 80px;
  height: auto;
  position: relative;
}

.c9 {
  width: 80px;
  height: auto;
  display: block;
  object-fit: cover;
}

.c1 {
  position: relative;
  display: inline;
  color: #000000;
  font-weight: normal;
  color: #E52630;
}

.c1:hover,
.c1:focus {
  color: #000000;
  text-decoration: none;
}

.c20 {
  height: 4px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -5px;
  transition: opacity 0.15s 0.1s;
  opacity: 0;
}

.c22 {
  height: 2rem;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  content: "";
}

.c18 {
  position: relative;
}

.c25 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.65,-0.19,0.37,1.16);
  transform: scale(1);
  transform-origin: center;
}

.c24 {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #E52630;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}

.c8 {
  display: flex;
  overflow: hidden;
}

.c4 {
  display: flex;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #FFFFFF;
  flex-direction: row;
}

.c16 {
  width: 100%;
  height: auto;
  position: relative;
  margin-top: auto;
  padding: 2rem 2.5rem 0 0;
}

.c16 .c21 {
  transform: none;
  top: auto;
  bottom: -8px;
}

.c16 span {
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.15s 0.1s;
  color: #E52630;
}

.c2 {
  padding: 0;
  display: flex;
  height: 100%;
  align-items: center;
  text-decoration: none;
  color: inherit;
  width: 100%;
}

.c2 .c23 {
  background-color: #E52630;
}

.c2 .c3 {
  box-shadow: rgba(0,0,0,0.15) 0px 0px 1rem;
}

.c2:hover .c3 {
  box-shadow: rgba(0,0,0,0.25) 0px 0px 1rem;
}

.c0 {
  width: 100%;
  height: 100%;
  display: flex;
}

.c5 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem 0px 1rem 2rem;
}

.c10 {
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.c14 {
  margin: 0;
}

.c12 {
  display: block;
  margin-bottom: 1rem;
}

.c26 {
  display: inline-block;
  color: #FFFFFF;
  fill: currentColor;
}

@media (min-width: 740px) {
  .c11 {
    font-size: 1rem;
    line-height: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .c11 {
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
}

@media (min-width: 740px) {
  .c13 {
    font-size: 1rem;
    line-height: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .c13 {
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
}

@media (min-width: 740px) {
  .c17 {
    font-size: 1rem;
    line-height: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .c17 {
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
}

@media (min-width: 740px) {
  .c4 {
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .c16 span {
    color: #000000;
  }
}

@media (min-width: 1024px) {
  .c2 .c23 {
    transition: background-color 0.15s 0.1s;
    background-color: #000000;
  }
}

@media (max-width:739px) {
  .c2 .c3 {
    transition: box-shadow 0.3s;
  }
}

@media (min-width: 740px) {
  .c2 >div {
    transition: transform 0.4s cubic-bezier(0.68,-1.15,0.265,2.35);
    transform-origin: center;
  }

  .c2:hover >div,
  .c2:focus >div {
    transform: translateY(-10px);
  }

  .c2 .c7 img {
    transform: scale(0.9);
    transition: transform 0.3s cubic-bezier(0.65,-0.19,0.37,1.16);
  }

  .c2:hover .c7 img {
    transform: scale(1);
  }

  .c2:hover .c23 {
    background-color: #E52630;
  }

  .c2:hover .c19 {
    opacity: 1;
  }

  .c2:hover .c15 span {
    color: #E52630;
  }
}

<article
  className="c0"
  isNewsTeaser={false}
>
  <a
    buttonType="primary"
    category=""
    className="c1 c2"
    fullWidth={false}
    home={false}
    href="/test"
    iconFirst={false}
    isNewsTeaser={false}
    mobileColour={null}
    target="_self"
    type="standard"
    underline={false}
  >
    <div
      className="c3 c4"
      isNewsTeaser={false}
    >
      <div
        className="c5"
        isNewsTeaser={false}
      >
        <div
          className="c6 c7 c8"
          height="auto"
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
            className="c9 lazyload"
            data-lowsrc="mock.asset"
            data-sizes="auto"
            data-src="mock.asset"
            data-srcset="mock.asset"
            height="auto"
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
        className="c10"
        isNewsTeaser={false}
      >
        <span
          className="c11 c12"
        >
           01 July 2019
        </span>
        <h4
          className="c13 c14"
          time={null}
        >
          Press Release
        </h4>
        <div
          className="c15 c16"
        >
          <span
            className="c17 c18"
          >
            Read more
            <img
              alt="Read more"
              className="c19 c20"
              src="mock.asset"
            />
          </span>
          <div
            className="c21 c22"
          >
            <div
              className="c23 c24"
            >
              <span
                className="c25"
              >
                <svg
                  className="c26"
                  fill="none"
                  height="15"
                  viewBox="0 0 15 15"
                  width="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.58496 1.3501C9.1395 0.88346 8.40641 0.883488 7.96094 1.3501C7.52803 1.80361 7.5281 2.53033 7.96094 2.98389L11.1582 6.3335H1.13672C0.48748 6.3335 0 6.87834 0 7.50049C2.15408e-05 8.12262 0.487494 8.66748 1.13672 8.66748H11.1582L7.96094 12.0171C7.52806 12.4706 7.52899 13.1974 7.96191 13.6509C8.18163 13.8804 8.47556 14.0005 8.77344 14.0005C9.07114 14.0004 9.36533 13.8809 9.58496 13.6509L14.6758 8.31689L14.6748 8.31592L14.6875 8.30322L14.6865 8.30225C14.6954 8.29227 14.7044 8.28494 14.71 8.27783C14.7117 8.27557 14.7133 8.27298 14.7148 8.271C14.7485 8.23215 14.7824 8.18937 14.8135 8.14111L14.8154 8.13818C14.8354 8.1067 14.8493 8.07854 14.8564 8.06396L14.8652 8.04639L14.8662 8.04443L14.8672 8.04346C14.8672 8.04346 14.868 8.0407 14.8691 8.03857C14.8709 8.03524 14.8758 8.02683 14.8799 8.01904L14.8802 8.01851C14.8888 8.00212 14.9034 7.97435 14.917 7.93994V7.93799C14.9303 7.90387 14.9391 7.87297 14.9443 7.854C14.9469 7.8447 14.9498 7.83579 14.9512 7.83057C14.9527 7.82466 14.9535 7.82292 14.9541 7.8208C14.9541 7.8208 14.9542 7.81765 14.9551 7.81494L14.958 7.80615L14.9586 7.80434C14.9631 7.78973 14.9718 7.76131 14.9785 7.72705V7.7251C15.0066 7.57717 15.0066 7.42472 14.9785 7.27686V7.2749L14.958 7.1958L14.9551 7.18604L14.9531 7.18018L14.9512 7.17236C14.9497 7.16652 14.9481 7.15689 14.9453 7.14697C14.9398 7.12707 14.9307 7.09666 14.917 7.06201C14.9032 7.027 14.8885 6.99825 14.8799 6.98193C14.8758 6.97415 14.8709 6.96574 14.8691 6.9624L14.8564 6.93701C14.849 6.92189 14.8351 6.89384 14.8154 6.86279L14.8145 6.86084L14.7529 6.77393C14.7316 6.74671 14.7094 6.72141 14.6875 6.69775C14.6837 6.69353 14.6802 6.68867 14.6758 6.68408L9.58496 1.3501Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</article>
`);
});
