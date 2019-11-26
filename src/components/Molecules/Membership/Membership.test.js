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
    .c5 {
      font-size: 1.25rem;
      text-transform: inherit;
      font-weight: 800;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c6 {
      font-size: 1rem;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c12 {
      font-size: 1rem;
      text-transform: inherit;
      font-weight: bold;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c16 {
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

    .c2 {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    .c13 {
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

    .c13:focus {
      border: 1px solid #666;
    }

    .c13:focus::-webkit-input-placeholder {
      color: #666;
    }

    .c13:focus::-moz-placeholder {
      color: #666;
    }

    .c13:focus:-ms-input-placeholder {
      color: #666;
    }

    .c13:focus::placeholder {
      color: #666;
    }

    .c10 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c11 {
      display: block;
    }

    .c11 input {
      border: 2px solid #c7c7c7;
      font-size: 1.25rem;
      font-weight: 800;
      -webkit-letter-spacing: -2px;
      -moz-letter-spacing: -2px;
      -ms-letter-spacing: -2px;
      letter-spacing: -2px;
    }

    .c14 {
      display: block;
    }

    .c14 input {
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

    .c3 {
      position: relative;
      max-width: 320px;
      text-align: center;
      margin-bottom: 50%;
    }

    .c4 {
      padding: 2rem 1rem 0;
      margin-bottom: 2rem;
    }

    .c7 {
      background-color: #FFFFFF;
      box-shadow: 0px 1rem 4rem rgba(0,0,0,0.3);
      height: 450px;
    }

    .c8 {
      padding: 1rem;
    }

    .c8 >:not(:last-child) {
      margin-bottom: 2rem;
    }

    .c8 h3 {
      margin-top: 1rem;
    }

    .c8 input {
      max-width: 100%;
      margin: 0;
    }

    .c9 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .c9 label {
      -webkit-flex: 0 0 30%;
      -ms-flex: 0 0 30%;
      flex: 0 0 30%;
    }

    .c9 label input {
      cursor: pointer;
      padding: 1rem;
    }

    .c9 label:hover input {
      border-color: #E52630;
    }

    .c15 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c17 {
      margin-right: auto;
    }

    .c18 {
      position: relative;
      -webkit-flex: 0 0 50%;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      font-weight: 400;
      display: block;
    }

    .c18 span {
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

    .c18 input {
      border: 2px solid #c7c7c7;
      background: transparent;
      padding: 0.5rem 1rem 0.5rem 2rem;
    }

    .c18 input:focus {
      border: 2px solid #E52630;
    }

    .c20 {
      line-height: 1.5;
    }

    .c19 {
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

    .c19:active,
    .c19:focus,
    .c19:hover {
      background-color: #961D35;
    }

    @media (min-width:740px) {
      .c13 {
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
      .c3 {
        margin: 0 8rem;
        max-width: 420px;
      }
    }

    @media (min-width:1024px) {
      .c7 {
        height: 430px;
      }
    }

    @media (min-width:1024px) {
      .c18 {
        -webkit-flex: 0 0 60%;
        -ms-flex: 0 0 60%;
        flex: 0 0 60%;
      }
    }

    @media (min-width:1024px) {
      .c19 {
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
        className="c1 lazyload"
        height="100%"
        width="100%"
      >
        <img
          alt="Background image"
          className="c2 lazyload"
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
        className="c3"
      >
        <div
          className="c4"
        >
          <h2
            className="c5"
            color="inherit"
            size="l"
          >
            Help someone like Jordan see a better tomorrow
          </h2>
          <p
            className="c6"
            color="inherit"
            size="s"
          >
            Jordan was close to suicide - which is now the biggest killer of men under 45 in the UK. Join now and help save lives.
          </p>
        </div>
        <div
          className="c7"
        >
          <form
            className="c8"
            onSubmit={[Function]}
          >
            <h3
              className="c6"
              color="inherit"
              size="s"
            >
              Choose your monthly donation
            </h3>
            <div
              className="c9"
            >
              <label
                aria-label="a regular supply of toiletries for someone living in a refugee camp in Serbia."
                className="c10 c11"
                htmlFor="moneyBuy-box1"
                name="moneyBuy1"
                onClick={[Function]}
                placeholder=""
                value="£ 5"
              >
                <span
                  className="c12 "
                  color="inherit"
                  size="s"
                >
                  
                </span>
                <input
                  aria-describedby="moneyBuy-box1"
                  aria-label="a regular supply of toiletries for someone living in a refugee camp in Serbia."
                  className="c13 c11"
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
                className="c10 c14"
                htmlFor="moneyBuy-box2"
                name="moneyBuy2"
                onClick={[Function]}
                placeholder=""
                value="£ 10"
              >
                <span
                  className="c12 "
                  color="inherit"
                  size="s"
                >
                  
                </span>
                <input
                  aria-describedby="moneyBuy-box2"
                  aria-label="a potentially lifesaving call for a man at risk of suicide in the UK."
                  className="c13 c14"
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
                className="c10 c11"
                htmlFor="moneyBuy-box3"
                name="moneyBuy3"
                onClick={[Function]}
                placeholder=""
                value="£ 20"
              >
                <span
                  className="c12 "
                  color="inherit"
                  size="s"
                >
                  
                </span>
                <input
                  aria-describedby="moneyBuy-box3"
                  aria-label="the distribution of enough surplus food for a school breakfast club to feed 80 children."
                  className="c13 c11"
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
              className="c15"
            >
              <span
                className="c16 c17"
                color="inherit"
                size="s"
              >
                Other amount
              </span>
              <label
                className="c10 c18"
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
                  className="c12 "
                  color="inherit"
                  size="s"
                >
                  £
                </span>
                <input
                  aria-describedby="MoneyBuy-userInput"
                  className="c13 c18"
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
              className="c19"
              type="submit"
            >
              Donate
            </button>
            <p
              className="c20"
            />
          </form>
        </div>
      </div>
    </div>
  `);
});
