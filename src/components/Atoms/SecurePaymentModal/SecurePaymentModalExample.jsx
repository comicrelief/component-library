import React from 'react';
import SecurePaymentModal from './SecurePaymentModal';
import Padlock from '../Icons/Padlock';
import Post from '../Icons/Post';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: green;
  padding: 10px;
`;

export default function SecurePaymentModalExample() {
  return (
    <Wrapper>

      <h3>Example using para1 and para2 props:</h3>
      <SecurePaymentModal
        icon={<Padlock colour="black" size={16} />}
        initialText="Your donation is secure and encrypted"
        headingText="How we keep your donations secure and encrypted"
        para1="We’ve partnered with trusted payment services like Braintree, Stripe, GoCardless, PayPal, Google, and Apple to keep your payment information safe and sound. Every transaction is fully encrypted."
        para2="We also use a secure server and follow best practices to protect your data, like your name and address. Our systems get checked every year by the NCC Group, and we regularly chat with AWS to stay ahead of any potential issues."
      />

      <br />

      <h3>Example using backgroundColor prop:</h3>
      <SecurePaymentModal
        icon={<Post colour="black" size={16} />}
        initialText="To be supplied???"
        headingText="What is Gift Aid and how does it work?"
        para1="As a UK taxpayer, you pay tax on your income, savings, or pensions. When you donate to charity, it comes from money you've already paid tax on. Charities can reclaim this tax back from the Government through Gift Aid, so if you donated £10 and used Gift Aid, it’s will actually be worth £12.50! How awesome is that?"
        para2="Since this extra cash comes straight from the government and not from your pocket, you’ll still only be spending £10 of your own money. Which is great news for you!"
        para3="In short, £1 + Gift Aid = £1.25, at no extra cost to you."
        backgroundColor="coral_light"
      />

    </Wrapper>
  );
}
