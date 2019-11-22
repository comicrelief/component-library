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
      font-size: 1.25rem;
      text-transform: inherit;
      font-weight: 800;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c7 {
      font-size: 1rem;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c13 {
      font-size: 1rem;
      text-transform: inherit;
      font-weight: bold;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c17 {
      font-size: 1rem;
      text-transform: inherit;
      font-weight: 500;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c1 {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .c3 {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .c14 {
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
      font-weight: 400;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      padding: 13px;
      margin: 10px 0;
      font-size: 1.25rem;
      background-color: #FFFFFF;
      border: 1px solid;
      border-color: #2C0230;
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      color: #2C0230;
    }

    .c14:focus {
      border: 1px solid #666;
    }

    .c14:focus::-webkit-input-placeholder {
      color: #666;
    }

    .c14:focus::-moz-placeholder {
      color: #666;
    }

    .c14:focus:-ms-input-placeholder {
      color: #666;
    }

    .c14:focus::placeholder {
      color: #666;
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

    .c12 {
      display: block;
    }

    .c12 input {
      border: 2px solid #c7c7c7;
      font-size: 1.25rem;
      font-weight: 800;
      -webkit-letter-spacing: -2px;
      -moz-letter-spacing: -2px;
      -ms-letter-spacing: -2px;
      letter-spacing: -2px;
    }

    .c15 {
      display: block;
    }

    .c15 input {
      border: 2px solid #c7c7c7;
      font-size: 1.25rem;
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

    .c9 >:not(:last-child) {
      margin-bottom: 2rem;
    }

    .c9 h3 {
      margin-top: 1rem;
    }

    .c9 input {
      max-width: 100%;
      margin: 0;
    }

    .c10 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .c10 label {
      -webkit-flex: 0 0 30%;
      -ms-flex: 0 0 30%;
      flex: 0 0 30%;
    }

    .c10 label input {
      cursor: pointer;
      padding: 1rem;
    }

    .c10 label:hover input {
      border-color: #E52630;
    }

    .c16 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c18 {
      margin-right: auto;
    }

    .c19 {
      position: relative;
      -webkit-flex: 0 0 50%;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      font-weight: 400;
      display: block;
    }

    .c19 span {
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

    .c19 input {
      border: 2px solid #c7c7c7;
      background: transparent;
      padding: 0.5rem 1rem 0.5rem 2rem;
    }

    .c19 input:focus {
      border: 2px solid #E52630;
    }

    .c21 {
      line-height: 1.5;
    }

    .c20 {
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

    .c20:active,
    .c20:focus,
    .c20:hover {
      background-color: #961D35;
    }

    @media (min-width:740px) {
      .c14 {
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
      .c19 {
        -webkit-flex: 0 0 60%;
        -ms-flex: 0 0 60%;
        flex: 0 0 60%;
      }
    }

    @media (min-width:1024px) {
      .c20 {
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
            <h3
              className="c7"
              color="inherit"
              size="s"
            >
              Choose your monthly donation
            </h3>
            <div
              className="c10"
            >
              <label
                aria-label="a regular supply of toiletries for someone living in a refugee camp in Serbia."
                className="c11 c12"
                htmlFor="moneyBuy-box1"
                name="moneyBuy1"
                onClick={[Function]}
                placeholder=""
                value="£ 5"
              >
                <span
                  className="c13 "
                  color="inherit"
                  size="s"
                >
                  
                </span>
                <input
                  aria-describedby="moneyBuy-box1"
                  aria-label="a regular supply of toiletries for someone living in a refugee camp in Serbia."
                  className="c14 c12"
                  id="moneyBuy-box1"
                  name="moneyBuy1"
                  onClick={[Function]}
                  placeholder=""
                  type="button"
                  value="£ 5"
                />
                
              </label>
              <label
                aria-label="a potentially lifesaving call for a man at risk of suicide in the UK."
                className="c11 c15"
                htmlFor="moneyBuy-box2"
                name="moneyBuy2"
                onClick={[Function]}
                placeholder=""
                value="£ 10"
              >
                <span
                  className="c13 "
                  color="inherit"
                  size="s"
                >
                  
                </span>
                <input
                  aria-describedby="moneyBuy-box2"
                  aria-label="a potentially lifesaving call for a man at risk of suicide in the UK."
                  className="c14 c15"
                  id="moneyBuy-box2"
                  name="moneyBuy2"
                  onClick={[Function]}
                  placeholder=""
                  type="button"
                  value="£ 10"
                />
                
              </label>
              <label
                aria-label="the distribution of enough surplus food for a school breakfast club to feed 80 children."
                className="c11 c12"
                htmlFor="moneyBuy-box3"
                name="moneyBuy3"
                onClick={[Function]}
                placeholder=""
                value="£ 20"
              >
                <span
                  className="c13 "
                  color="inherit"
                  size="s"
                >
                  
                </span>
                <input
                  aria-describedby="moneyBuy-box3"
                  aria-label="the distribution of enough surplus food for a school breakfast club to feed 80 children."
                  className="c14 c12"
                  id="moneyBuy-box3"
                  name="moneyBuy3"
                  onClick={[Function]}
                  placeholder=""
                  type="button"
                  value="£ 20"
                />
                
              </label>
            </div>
            <div
              className="c16"
            >
              <span
                className="c17 c18"
                color="inherit"
                size="s"
              >
                Other amount
              </span>
              <label
                className="c11 c19"
                htmlFor="MoneyBuy-userInput"
                max="5000"
                min="1"
                name="membership_amount"
                onChange={[Function]}
                onClick={[Function]}
                onKeyPress={[Function]}
                pattern="[^[0-9]+([,.][0-9]+)?$]"
                placeholder="0.00"
                step="0.01"
                value=""
              >
                <span
                  className="c13 "
                  color="inherit"
                  size="s"
                >
                  £
                </span>
                <input
                  aria-describedby="MoneyBuy-userInput"
                  className="c14 c19"
                  id="MoneyBuy-userInput"
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
              className="c20"
              type="submit"
            >
              Donate
            </button>
            <p
              className="c21"
            />
          </form>
        </div>
      </div>
    </div>
  `);
});
