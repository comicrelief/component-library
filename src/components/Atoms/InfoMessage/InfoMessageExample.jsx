import React from 'react';
import InfoMessage from './InfoMessage';
import Link from '../Link/Link';

export default function InfoMessageExample() {
  return (
    <>
      <InfoMessage
        title="Are you trying to pay in your fundraising money?"
        message="If you are, please select the 'Pay in Fundraising' tab above. If not, please continue with your donation."
      />
      <br />
      <InfoMessage
        title="Please check your donation"
        backgroundColor="coral_light"
        message="You can only donate between £1.00 and £25,000.00 at a time. If you need help, contact us."
      />
      <br />
      <InfoMessage
        title="Please check your donation"
        backgroundColor="coral_light"
        message={
          <>
            You can only donate between £1.00 and £25,000.00 at a time. If you need help,{' '}
            <Link href="/contact" type="standard">contact us</Link>.
          </>
        }
      />
    </>
  );
}
