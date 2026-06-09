import React, { useState, useEffect } from 'react';
import Donate from './Donate';
import data from './dev-data/data';
import dataHighValue from './dev-data/data-high-value';
import dataSingle from './dev-data/data-single';
import dataMonthly from './dev-data/data-monthly';
import { defaultData, mobileImages } from '../../../data/data';

const desktopPictures = defaultData;
const mobilePictures = mobileImages;

export function DonateExample1() {
  return (
    <>
      <h3>Form align right, with red desktop overlay and purple mobile background colour, with a blue submit button and 'no top padding' option</h3>
      <Donate
        alt="Background image"
        mobileBackgroundColor="deep_violet_dark"
        desktopOverlayColor="red"
        submitButtonColor="blue_donate"
        formAlignRight={true}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={data}
        mbshipID="mship-1"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle="Please help us fund life-changing projects in the UK and around the world."
        paddingOption="upper_off"
      />
    </>
  );
}

export function DonateExample2() {
  return (
    <>
      <h3>Form align left, with custom message after choosing an "Other amount" to donate, high value cart, and 'no bottom padding' option</h3>
      <Donate
        mobileBackgroundColor="blue_dark"
        submitButtonColor="blue_donate"
        desktopOverlayColor="blue_dark"
        formAlignRight={false}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={dataHighValue}
        mbshipID="mship-2"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle="Please help us fund life-changing projects in the UK and around the world."
        otherAmountText="Overridden via the 'Other amount text' prop"
        paddingOption="lower_off"
      />
    </>
  );
}

export function DonateExample3() {
  return (
    <>
      <h3>Single Giving, with 'no padding' option</h3>
      <Donate
        mobileBackgroundColor="blue_dark"
        submitButtonColor="blue_donate"
        desktopOverlayColor="blue_dark"
        formAlignRight={false}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={dataSingle}
        mbshipID="mship-3"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle="Please help us fund life-changing projects in the UK and around the world."
        paddingOption="both_off"
      />
    </>
  );
}

export function DonateExample4() {
  return (
    <>
      <h3>Single Giving "No Money Buys"</h3>
      <Donate
        mobileBackgroundColor="blue_dark"
        submitButtonColor="blue_donate"
        desktopOverlayColor="blue_dark"
        formAlignRight={false}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={dataSingle}
        mbshipID="mship-4"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        noMoneyBuys
        subtitle="Please help us fund life-changing projects in the UK and around the world."
      />
    </>
  );
}

// Simulating default state of a parent componenet, updating after 3 seconds
export function DonateExample5() {
  const [amountDonate, setAmountDonate] = useState(123.45);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAmountDonate(567.89);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h3>Single Giving "No Money Buys" with overridden manual input value</h3>
      <Donate
        mobileBackgroundColor="blue_dark"
        desktopOverlayColor="blue_dark"
        formAlignRight={false}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={dataSingle}
        mbshipID="mship-5"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        noMoneyBuys
        subtitle="Please help us fund life-changing projects in the UK and around the world."
        otherAmountValue={amountDonate}
        otherAmountText="Here's an otherAmountText override"
      />
    </>
  );
}

// Simulating default state of a parent componenet, updating after 3 seconds
export function DonateExample6() {
  const [amountDonate, setAmountDonate] = useState(111.22);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAmountDonate(333.44);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h3>Form align right, with red desktop overlay and purple mobile background colour, with a blue submit button, with overridden manual input value</h3>
      <Donate
        alt="Background image"
        formAlignRight={true}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={data}
        mbshipID="mship-6"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle="Please help us fund life-changing projects in the UK and around the world."
        otherAmountValue={amountDonate}
      />
    </>
  );
}

export function DonateExample7() {
  return (
    <>
      <h3>Form align left, with custom message after choosing an "Other amount" to donate, high value cart.</h3>
      <Donate
        mobileBackgroundColor="blue_dark"
        desktopOverlayColor="blue_dark"
        formAlignRight={false}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={dataHighValue}
        mbshipID="mship-7"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle="Please help us fund life-changing projects in the UK and around the world."
        otherAmountText="Overridden via the 'Other amount text' prop"
      />
    </>
  );
}

export function DonateExample8() {
  return (
    <>
      <h3>Form align right, but no copy, so ACTUALLY centre-aligns</h3>
      <Donate
        alt="Background image"
        mobileBackgroundColor="transparent"
        submitButtonColor="blue_donate"
        desktopOverlayColor="transparent"
        formAlignRight={true}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={data}
        mbshipID="mship-8"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        // Directly omiting values for these to centre-align
        title=""
        subtitle=""
        chooseAmountText=""
        monthlyTitle=""
        monthlySubtitle=""
      />
    </>
  );
}

export function DonateExample9() {
  return (
    <>
      <h3>Form align left - no subtitle</h3>
      <Donate
        mobileBackgroundColor="transparent"
        submitButtonColor="blue_donate"
        formAlignRight={false}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={data}
        mbshipID="mship-9"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle=""
      />
    </>
  );
}

export function DonateExample10() {
  return (
    <>
      <h3>Single Giving - no subtitle</h3>
      <Donate
        mobileBackgroundColor="blue_dark"
        submitButtonColor="blue_donate"
        formAlignRight={false}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={dataSingle}
        mbshipID="mship-10"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle=""
      />
    </>
  );
}

export function DonateExample11() {
  return (
    <>
      <h3>Single Giving "No Money Buys"</h3>
      <Donate
        mobileBackgroundColor="blue_dark"
        submitButtonColor="blue_donate"
        formAlignRight={false}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={dataSingle}
        mbshipID="mship-11"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        noMoneyBuys
        subtitle=""
      />
    </>
  );
}

export function DonateExample12() {
  return (
    <>
      <h3>Single Giving "No Money Buys", no background image, blue background; overriding 'choose amount' text</h3>
      <Donate
        desktopOverlayColor="blue_dark"
        submitButtonColor="blue_donate"
        mobileBackgroundColor="blue_dark"
        formAlignRight={false}
        data={dataSingle}
        mbshipID="mship-12"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        noMoneyBuys
        subtitle=""
        chooseAmountText="Overridden via the 'choose amount text' prop"
      />
    </>
  );
}

export function DonateExample13() {
  return (
    <>
      <h3>Forcing mobile layout via isDesktop override; needed to pass parent prop for external media queries, red background</h3>
      <Donate
        alt="Background image"
        mobileBackgroundColor="red"
        submitButtonColor="blue_donate"
        desktopOverlayColor="red"
        formAlignRight={true}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={data}
        mbshipID="mship-13"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle="Please help us fund life-changing projects in the UK and around the world."
        isDesktopOverride={false}
      />
    </>
  );
}

export function DonateExample14() {
  return (
    <>
      <h3>Additional copy for BOTH giving types</h3>
      <Donate
        alt="Background image"
        mobileBackgroundColor="deep_violet_dark"
        desktopOverlayColor="red"
        submitButtonColor="blue_donate"
        formAlignRight={true}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={data}
        mbshipID="mship-14"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle="Please help us fund life-changing projects in the UK and around the world."
        additionalSingleCopy="Some additional single giving copy - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa."
        additionalMonthlyCopy="Some additional regular giving copy! - Quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos."
      />
    </>
  );
}

export function DonateExample15() {
  return (
    <>
      <h3>Additional copy for monthly only</h3>
      <Donate
        alt="Background image"
        mobileBackgroundColor="deep_violet_dark"
        desktopOverlayColor="red"
        submitButtonColor="blue_donate"
        formAlignRight={true}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={data}
        mbshipID="mship-15"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle="Please help us fund life-changing projects in the UK and around the world."
        additionalMonthlyCopy="Some additional regular giving copy! - Quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos."
      />
    </>
  );
}

export function DonateExample16() {
  return (
    <>
      <h3>Additional copy for single only</h3>
      <Donate
        alt="Background image"
        mobileBackgroundColor="deep_violet_dark"
        desktopOverlayColor="red"
        submitButtonColor="blue_donate"
        formAlignRight={true}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={data}
        mbshipID="mship-16"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle="Please help us fund life-changing projects in the UK and around the world."
        additionalSingleCopy="Some additional single giving copy - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa."
      />
    </>
  );
}

export function DonateExample17() {
  return (
    <>
      <h3>Default monthly giving type</h3>
      <Donate
        alt="Background image"
        mobileBackgroundColor="deep_violet_dark"
        desktopOverlayColor="red"
        submitButtonColor="blue_donate"
        formAlignRight={true}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={data}
        mbshipID="mship-17"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle="Please help us fund life-changing projects in the UK and around the world."
        defaultGivingType="monthly"
      />
    </>
  );
}

export function DonateExample18() {
  return (
    <>
      <h3>Monthly ONLY</h3>
      <Donate
        alt="Background image"
        mobileBackgroundColor="deep_violet_dark"
        desktopOverlayColor="red"
        submitButtonColor="blue_donate"
        formAlignRight={true}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={dataMonthly}
        mbshipID="mship-18"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle="Please help us fund life-changing projects in the UK and around the world."
      />
    </>
  );
}

export function DonateExample19() {
  return (
    <>
      <h3>Monthly ONLY, no moneybuys</h3>
      <Donate
        alt="Background image"
        mobileBackgroundColor="deep_violet_dark"
        desktopOverlayColor="red"
        submitButtonColor="blue_donate"
        formAlignRight={true}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={dataMonthly}
        mbshipID="mship-19"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle="Please help us fund life-changing projects in the UK and around the world."
        noMoneyBuys
      />
    </>
  );
}

export function DonateExample20() {
  return (
    <>
      <h3>Monthly 'Choose Amount' and 'Other Amount' copy overrides</h3>
      <Donate
        alt="Background image"
        mobileBackgroundColor="deep_violet_dark"
        desktopOverlayColor="red"
        submitButtonColor="blue_donate"
        formAlignRight={true}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={data}
        mbshipID="mship-20"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Standard title here"
        subtitle="Standard subtitle here"
        otherAmountText="Here's an otherAmountText override"
        chooseAmountText="Here's an chooseAmountText override"
        monthlyChooseAmountText="monthlyChooseAmountText here"
        monthlyOtherAmountText="monthlyOtherAmountText here"
      />
    </>
  );
}

export function DonateExample21() {
  return (
    <>
      <h3>Monthly Title and Subtitle overrides</h3>
      <Donate
        alt="Background image"
        mobileBackgroundColor="deep_violet_dark"
        desktopOverlayColor="red"
        submitButtonColor="blue_donate"
        formAlignRight={true}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={data}
        mbshipID="mship-21"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Standard title here"
        subtitle="Standard subtitle here"
        otherAmountText="Here's an otherAmountText override"
        chooseAmountText="Here's an chooseAmountText override"
        monthlyTitle="Monthly Title here"
        monthlySubtitle="Monthly Subtitle here"
      />
    </>
  );
}

export function DonateExample22() {
  return (
    <>
      <h3>All monthly overrides</h3>
      <Donate
        alt="Background image"
        mobileBackgroundColor="deep_violet_dark"
        desktopOverlayColor="red"
        submitButtonColor="blue_donate"
        formAlignRight={true}
        imageLow={desktopPictures.imageLow}
        images={desktopPictures.images}
        mobileImageLow={mobilePictures.imageLow}
        mobileImages={mobilePictures.images}
        data={data}
        mbshipID="mship-22"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Standard title here"
        subtitle="Standard subtitle here"
        otherAmountText="Here's an otherAmountText override"
        chooseAmountText="Here's an chooseAmountText override"
        monthlyTitle="Monthly Title here"
        monthlySubtitle="Monthly Subtitle here"
        monthlyChooseAmountText="monthlyChooseAmountText here"
        monthlyOtherAmountText="monthlyOtherAmountText here"
      />
    </>
  );
}
