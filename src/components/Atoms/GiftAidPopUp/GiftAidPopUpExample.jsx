import React from 'react';
import GiftAidPopUp from './GiftAidPopUp';
import Post from '../Icons/Post';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: green;
  padding: 10px;
`;

const GiftAidInfoBody = () => (
  <>
    <p>
      As a UK taxpayer, you pay tax on your income, savings, or pensions. When you donate to charity, it comes from money you've already paid tax on. Charities can reclaim this tax back from the Government through Gift Aid, so if you donated £10 and used Gift Aid, it’s will actually be worth £12.50! How awesome is that?
    </p>
    <p>
      Since this extra cash comes straight from the government and not from your pocket, you’ll still only be spending £10 of your own money. Which is great news for you!
    </p>
    <p>
      In short, £1 + Gift Aid = £1.25, at no extra cost to you.
    </p>
  </>
);

export default function GiftAidPopUpExample() {
  return (
    <Wrapper>

      <h3>Gift Aid Info Example</h3>
      <GiftAidPopUp
        icon={<Post colour="black" size={16} />}
        initialText="What is Gift Aid?"
        headingText="What is Gift Aid and how does it work?"
        backgroundColor="coral_light"
        bodyText={<GiftAidInfoBody/>}
      />

    </Wrapper>
  );
}
