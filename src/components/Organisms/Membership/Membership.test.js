import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import Membership from './Membership';
import pictures from '../../../styleguide/data/data';
import data from './dev-data/data';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Membership
      alt="Background image"
      backgroundColor="orange_light"
      formAligntRight={false}
      imageLow={pictures.imageLow}
      images={pictures.images}
      data={data}
      mbshipID="mship-1"
      donateLink="https://donation.comicrelief.com/"
      cartID="refugee1-365"
      title="Help someone like Jordan see a better tomorrow"
      subtitle="Jordan was close to suicide - which is now the biggest killer of men under 45 in the UK. Join now and help save lives."
      otherDescription="Your donation will help us fund amazing projects in the UK and around the world."
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c6 {
      font-size: 1.5rem;
      line-height: 1.5rem;
      text-transform: inherit;
      font-weight: 800;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c7 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c15 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: bold;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c19 {
      font-size: 1rem;
      line-height: 1rem;
      text-transform: inherit;
      font-weight: 500;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c1 {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
    }

    .c3 {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .c16 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      padding: 13px;
      font-size: 1.25rem;
      background-color: #FFFFFF;
      border: 1px solid;
      border-color: #000000;
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #000000;
    }

    .c16:focus {
      border: 1px solid #666;
    }

    .c16:focus::-webkit-input-placeholder {
      color: #666;
    }

    .c16:focus::-moz-placeholder {
      color: #666;
    }

    .c16:focus:-ms-input-placeholder {
      color: #666;
    }

    .c16:focus::placeholder {
      color: #666;
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

    .c14 {
      display: block;
    }

    .c14 input {
      border: 2px solid #E1E2E3;
      font-size: 1.5rem;
      font-weight: 800;
      -webkit-letter-spacing: -2px;
      -moz-letter-spacing: -2px;
      -ms-letter-spacing: -2px;
      letter-spacing: -2px;
    }

    .c17 {
      display: block;
    }

    .c17 input {
      border: 2px solid #E1E2E3;
      font-size: 1.5rem;
      font-weight: 800;
      -webkit-letter-spacing: -2px;
      -moz-letter-spacing: -2px;
      -ms-letter-spacing: -2px;
      letter-spacing: -2px;
      border-color: #E52630;
      background-color: #E52630;
      color: #FFFFFF;
    }

    .c0 {
      background-color: #FEE3CC;
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      min-height: 100vh;
    }

    .c2 {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: auto;
    }

    .c2:before {
      color: #FEE3CC;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      box-shadow: inset 0px 4rem 2rem -2rem;
    }

    .c4 {
      position: relative;
      max-width: 320px;
      text-align: center;
      margin-bottom: 50%;
    }

    .c5 {
      padding: 2rem 1rem 0;
      margin-bottom: 2rem;
    }

    .c8 {
      background-color: #FFFFFF;
      box-shadow: 0px 1rem 4rem rgba(0,0,0,0.3);
      height: 450px;
    }

    .c9 {
      padding: 1rem;
    }

    .c9 h3 {
      margin-top: 1rem;
    }

    .c9 input {
      max-width: 100%;
      margin: 0;
    }

    .c10 {
      padding: 0;
      margin: 0;
      border: none;
    }

    .c10 >:not(:last-child):not(legend) {
      margin-bottom: 2rem;
    }

    .c11 {
      margin: 0;
      padding: 0;
    }

    .c12 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .c12 label {
      -webkit-flex: 0 0 30%;
      -ms-flex: 0 0 30%;
      flex: 0 0 30%;
    }

    .c12 label input {
      cursor: pointer;
      padding: 1rem;
    }

    .c12 label:hover input {
      border-color: #E52630;
    }

    .c18 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c20 {
      margin-right: auto;
    }

    .c21 {
      position: relative;
      -webkit-flex: 0 0 50%;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      font-weight: 400;
      display: block;
    }

    .c21 span {
      position: absolute;
      padding: 0px 15px;
      font-size: 20px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      left: 0px;
      font-weight: 500;
    }

    .c21 input {
      border: 2px solid #E1E2E3;
      background: transparent;
      padding: 0.5rem 1rem 0.5rem 2rem;
    }

    .c21 input:focus {
      border: 2px solid #E52630;
    }

    .c23 {
      line-height: 1.5;
    }

    .c22 {
      width: 100%;
      color: #FFFFFF;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      padding: 1rem 0.5rem;
      background: #E52630;
      border: none;
      border-radius: 100px;
    }

    .c22:active,
    .c22:focus,
    .c22:hover {
      background-color: #961D35;
    }

    @media (min-width:740px) {
      .c16 {
        max-width: 290px;
      }
    }

    @media (min-width:1024px) {
      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: inherit;
        -webkit-justify-content: inherit;
        -ms-flex-pack: inherit;
        justify-content: inherit;
        min-height: 750px;
        height: 100vh;
        max-height: 900px;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }
    }

    @media (min-width:1024px) {
      .c2 {
        height: 100%;
      }

      .c2:before {
        content: none;
      }
    }

    @media (min-width:1024px) {
      .c4 {
        margin: 0 8rem;
        max-width: 420px;
      }
    }

    @media (min-width:1024px) {
      .c8 {
        height: 430px;
      }
    }

    @media (min-width:1024px) {
      .c21 {
        -webkit-flex: 0 0 60%;
        -ms-flex: 0 0 60%;
        flex: 0 0 60%;
      }
    }

    @media (min-width:1024px) {
      .c22 {
        width: auto;
        padding: 1rem 2rem;
        margin: 0 auto 2rem;
      }
    }

    <div
      className="c0"
      id="mship-1"
    >
      <div
        className="c1 c2"
        height="100%"
        width="100%"
      >
        <img
          alt="Background image"
          className="c3 lazyload"
          data-lowsrc="http://images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=100&h=50&q=100"
          data-sizes="auto"
          data-src={null}
          data-srcset="//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=200&h=150&q=50 200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=400&h=300&q=50 400w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=800&h=600&q=50 800w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1200&h=900&q=50 1200w,//images.ctfassets.net/zsfivwzfgl3t/Yq59XdwwQgjNOxky93K1Q/17c2d80dce99067b0b3508f33075cbe3/funding_4-3_2x.jpg?w=1440&h=1080&q=50 1440w"
          height="100%"
          src={null}
          srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          width="100%"
        />
      </div>
      <div
        className="c4"
      >
        <div
          className="c5"
        >
          <h2
            className="c6"
            color="inherit"
            size="l"
          >
            Help someone like Jordan see a better tomorrow
          </h2>
          <p
            className="c7"
            color="inherit"
            size="s"
          >
            Jordan was close to suicide - which is now the biggest killer of men under 45 in the UK. Join now and help save lives.
          </p>
        </div>
        <div
          className="c8"
        >
          <form
            className="c9"
            onSubmit={[Function]}
          >
            <fieldset
              className="c10"
            >
              <legend
                className="c11"
              >
                <h3
                  className="c7"
                  color="inherit"
                  size="s"
                >
                  Choose your monthly donation
                </h3>
              </legend>
              <div
                className="c12"
              >
                <label
                  aria-label="£5"
                  className="c13 c14"
                  htmlFor="mship-1--moneyBuy-box1"
                  onClick={[Function]}
                >
                  <span
                    className="c15 "
                    color="inherit"
                    size="s"
                  >
                    
                  </span>
                  <input
                    aria-describedby="mship-1--moneyBuy-box1"
                    aria-label="£5"
                    className="c16 c14"
                    id="mship-1--moneyBuy-box1"
                    name="mship-1--moneyBuy1"
                    onClick={[Function]}
                    placeholder=""
                    type="button"
                    value="£ 5"
                  />
                  
                </label>
                <label
                  aria-label="£10"
                  className="c13 c17"
                  htmlFor="mship-1--moneyBuy-box2"
                  onClick={[Function]}
                >
                  <span
                    className="c15 "
                    color="inherit"
                    size="s"
                  >
                    
                  </span>
                  <input
                    aria-describedby="mship-1--moneyBuy-box2"
                    aria-label="£10"
                    className="c16 c17"
                    id="mship-1--moneyBuy-box2"
                    name="mship-1--moneyBuy2"
                    onClick={[Function]}
                    placeholder=""
                    type="button"
                    value="£ 10"
                  />
                  
                </label>
                <label
                  aria-label="£20"
                  className="c13 c14"
                  htmlFor="mship-1--moneyBuy-box3"
                  onClick={[Function]}
                >
                  <span
                    className="c15 "
                    color="inherit"
                    size="s"
                  >
                    
                  </span>
                  <input
                    aria-describedby="mship-1--moneyBuy-box3"
                    aria-label="£20"
                    className="c16 c14"
                    id="mship-1--moneyBuy-box3"
                    name="mship-1--moneyBuy3"
                    onClick={[Function]}
                    placeholder=""
                    type="button"
                    value="£ 20"
                  />
                  
                </label>
              </div>
              <div
                className="c18"
              >
                <span
                  className="c19 c20"
                  color="inherit"
                  size="s"
                >
                  Other amount
                </span>
                <label
                  aria-label="Input a different amount"
                  className="c13 c21"
                  htmlFor="mship-1--MoneyBuy-userInput"
                  max="5000"
                  min="1"
                  onChange={[Function]}
                  onClick={[Function]}
                  onKeyPress={[Function]}
                  pattern="[^[0-9]+([,.][0-9]+)?$]"
                  step="0.01"
                >
                  <span
                    className="c15 "
                    color="inherit"
                    size="s"
                  >
                    £
                  </span>
                  <input
                    aria-describedby="mship-1--MoneyBuy-userInput"
                    aria-label="Input a different amount"
                    className="c16 c21"
                    id="mship-1--MoneyBuy-userInput"
                    max="5000"
                    min="1"
                    name="membership_amount"
                    onChange={[Function]}
                    onClick={[Function]}
                    onKeyPress={[Function]}
                    pattern="[^[0-9]+([,.][0-9]+)?$]"
                    placeholder="0.00"
                    step="0.01"
                    type="number"
                    value=""
                  />
                  
                </label>
              </div>
              <button
                className="c22"
                type="submit"
              >
                Donate
              </button>
              <p
                className="c23"
              />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  `);
});
