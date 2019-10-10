import React from 'react';
import 'jest-styled-components';

import renderWithTheme from '../../../hoc/shallowWithTheme';
import Membership from './Membership';
import data from './dev-data/data';

it('renders correctly', () => {
  const tree = renderWithTheme(
    <Membership
      data={data}
      otherDescription="Your donation will help us fund amazing projects in the UK and around the world."
    />
  ).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    .c2 {
      font-size: 1.44rem;
      text-transform: inherit;
      font-weight: 800;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c3 {
      font-size: 1rem;
      text-transform: inherit;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c9 {
      font-size: 1rem;
      text-transform: inherit;
      font-weight: bold;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
    }

    .c14 {
      font-size: 1rem;
      text-transform: inherit;
      font-weight: 500;
      font-family: 'Montserrat',Helvetica,Arial,sans-serif;
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

    .c8 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c7 {
      display: block;
    }

    .c7 input {
      border: 2px solid #c7c7c7;
      font-size: 1.44rem;
      font-weight: 800;
      -webkit-letter-spacing: -2px;
      -moz-letter-spacing: -2px;
      -ms-letter-spacing: -2px;
      letter-spacing: -2px;
    }

    .c11 {
      display: block;
    }

    .c11 input {
      border: 2px solid #c7c7c7;
      font-size: 1.44rem;
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
      max-width: 320px;
      text-align: center;
    }

    .c1 {
      padding: 0 1rem;
      margin-bottom: 2rem;
    }

    .c4 {
      box-shadow: 0px 1rem 4rem rgba(0,0,0,0.3);
      height: 450px;
    }

    .c5 {
      padding: 0 1rem;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c5 >:not(:last-child) {
      margin-bottom: 2rem;
    }

    .c5 h3 {
      margin-top: 1rem;
    }

    .c5 input {
      max-width: 100%;
      margin: 0;
    }

    .c5 .c18 {
      margin: 2rem 0;
    }

    .c6 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .c6 label {
      -webkit-flex: 0 0 30%;
      -ms-flex: 0 0 30%;
      flex: 0 0 30%;
    }

    .c6 label input {
      cursor: pointer;
      padding: 1rem;
    }

    .c6 label:hover input {
      border-color: #E52630;
    }

    .c12 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c13 {
      margin-right: auto;
    }

    .c15 {
      position: relative;
      -webkit-flex: 0 0 50%;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      font-weight: 400;
    }

    .c15 span {
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

    .c15 input {
      border: 2px solid #c7c7c7;
      background: transparent;
      padding: 0.5rem 1rem 0.5rem 2rem;
    }

    .c15 input:focus {
      border: 2px solid #E52630;
    }

    .c17 {
      line-height: 1.5;
    }

    .c16 {
      color: #FFFFFF;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      padding: 1rem 0.5rem;
      background: #E52630;
      border: none;
      border-radius: 100px;
    }

    @media (min-width:740px) {
      .c10 {
        max-width: 290px;
      }
    }

    @media (min-width:740px) {
      .c0 {
        max-width: 420px;
        padding: 0 2rem;
      }
    }

    @media (min-width:740px) {
      .c4 {
        height: 430px;
      }
    }

    @media (min-width:740px) {
      .c15 {
        -webkit-flex: 0 0 60%;
        -ms-flex: 0 0 60%;
        flex: 0 0 60%;
      }
    }

    @media (min-width:740px) {
      .c16 {
        padding: 1rem 2rem;
        margin: 0 auto 2rem;
      }
    }

    <div
      className="c0"
    >
      <div
        className="c1"
      >
        <h2
          className="c2"
          color="inherit"
          size="l"
        />
        <p
          className="c3"
          color="inherit"
          size="s"
        />
      </div>
      <div
        className="c4"
      >
        <form
          className="c5"
          onSubmit={[Function]}
        >
          <h3
            className="c3"
            color="inherit"
            size="s"
          >
            Choose your monthly donation
          </h3>
          <div
            className="c6"
          >
            <label
              aria-label="a regular supply of toiletries for someone living in a refugee camp in Serbia."
              className="c7 c8"
              htmlFor="moneyBuy-box1"
              name="moneyBuy1"
              onClick={[Function]}
              placeholder=""
              value="£ 5"
            >
              <span
                className="c9"
                color="inherit"
                size="s"
              >
                
              </span>
              <input
                aria-describedby="moneyBuy-box1"
                aria-label="a regular supply of toiletries for someone living in a refugee camp in Serbia."
                className="c7 c10"
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
              className="c11 c8"
              htmlFor="moneyBuy-box2"
              name="moneyBuy2"
              onClick={[Function]}
              placeholder=""
              value="£ 10"
            >
              <span
                className="c9"
                color="inherit"
                size="s"
              >
                
              </span>
              <input
                aria-describedby="moneyBuy-box2"
                aria-label="a potentially lifesaving call for a man at risk of suicide in the UK."
                className="c11 c10"
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
              className="c7 c8"
              htmlFor="moneyBuy-box3"
              name="moneyBuy3"
              onClick={[Function]}
              placeholder=""
              value="£ 20"
            >
              <span
                className="c9"
                color="inherit"
                size="s"
              >
                
              </span>
              <input
                aria-describedby="moneyBuy-box3"
                aria-label="the distribution of enough surplus food for a school breakfast club to feed 80 children."
                className="c7 c10"
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
            className="c12"
          >
            <span
              className="c13 c14"
              color="inherit"
              size="s"
            >
              Other amount
            </span>
            <label
              className="c15 c8"
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
                className="c9"
                color="inherit"
                size="s"
              >
                £
              </span>
              <input
                aria-describedby="MoneyBuy-userInput"
                className="c15 c10"
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
            className="c16"
            type="submit"
          >
            Donate
          </button>
          <p
            className="c17"
          />
        </form>
      </div>
    </div>
  `);
});
