import React from 'react';
import DonateBanner from './DonateBanner';
import data from './dev-data/data';
import dataSingle from './dev-data/data-single';
import { defaultData as desktopPictures, mobileImages as mobilePictures } from '../../../data/data';
import videoDesktop from '../../Atoms/AmbientVideo/big-buck-bunny-1080p-30sec.mp4';
import videoMobile from '../../Atoms/AmbientVideo/thetestdatacom_480p_example.mp4';

const imageL = { images: desktopPictures.images, imageLow: desktopPictures.imageLow, alt: 'Background image' };
const imageM = { images: desktopPictures.images, imageLow: desktopPictures.imageLow, alt: 'Background image' };
const imageS = { images: mobilePictures.images, imageLow: mobilePictures.imageLow, alt: 'Background image' };

const videoImageL = { images: desktopPictures.images, imageLow: desktopPictures.imageLow, alt: 'Video poster' };
const videoImageM = { images: desktopPictures.images, imageLow: desktopPictures.imageLow, alt: 'Video poster' };
const videoImageS = { images: mobilePictures.images, imageLow: mobilePictures.imageLow, alt: 'Video poster' };

export default function DonateBannerExample() {
  return (
    <div>
      <h3>Image banner (widget right), custom padding + background</h3>
      <DonateBanner
        pageBackgroundColour="grey_light"
        paddingAbove="0rem"
        paddingBelow="2rem"
        donateOrientation="right"
        imageL={imageL}
        imageM={imageM}
        imageS={imageS}
        data={data}
        mbshipID="mbship-1"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle="Please help us fund life-changing projects in the UK and around the world."
      />

      <h3>Image banner (widget left), monthly title/subtitle + choose amount text overrides, hidden moneybuys</h3>
      <DonateBanner
        pageBackgroundColour="grey_light"
        paddingAbove="2rem"
        paddingBelow="2rem"
        donateOrientation="left"
        imageL={imageL}
        imageM={imageM}
        imageS={imageS}
        data={data}
        mbshipID="mbship-2"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate today"
        subtitle="Your support can help people facing the toughest times."
        monthlyTitle="Give monthly"
        monthlySubtitle="A regular gift helps fund long-term impact."
        chooseAmountText="Choose a one-off amount"
        monthlyChooseAmountText="Choose a monthly amount"
        hideMoneyBuys
      />

      <h3>Text-only widget (no image), custom widget background + text colour, hidden moneybuys</h3>
      <DonateBanner
        donateWidgetIsTextOnly
        pageBackgroundColour="rnd_25_glitzy_grape"
        componentBackgroundColour="deep_violet_dark"
        copyColor="white"
        paddingAbove="2rem"
        paddingBelow="2rem"
        donateOrientation="right"
        data={dataSingle}
        mbshipID="mbship-3"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate now"
        subtitle="Make a difference today."
        chooseAmountText="Enter an amount to give"
        hideMoneyBuys
      />

      <h3>Text-only widget (no image), with the usual moneybuys, standard colours</h3>
      <DonateBanner
        donateWidgetIsTextOnly
        pageBackgroundColour="grey_light"
        componentBackgroundColour="white"
        copyColor="black"
        paddingAbove="2rem"
        paddingBelow="2rem"
        donateOrientation="right"
        data={data}
        mbshipID="mbship-3b"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate now"
        subtitle="Choose an amount or pick a moneybuy."
      />

      <h3>Text-only widget (no image), with giving selector (single vs monthly)</h3>
      <DonateBanner
        donateWidgetIsTextOnly
        pageBackgroundColour="grey_light"
        copyColor="black"
        paddingAbove="2rem"
        paddingBelow="2rem"
        donateOrientation="right"
        data={data}
        mbshipID="mbship-3c"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate now"
        subtitle="Choose between a one-off or monthly gift."
        monthlyTitle="Give monthly"
        monthlySubtitle="A regular gift helps fund long-term impact."
      />

      <h3>Different "Other amount" copy for single vs monthly</h3>
      <DonateBanner
        pageBackgroundColour="grey_light"
        paddingAbove="0rem"
        paddingBelow="0rem"
        donateOrientation="left"
        imageL={imageL}
        data={data}
        mbshipID="mbship-4"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate now"
        subtitle="Help fund life-changing work."
        otherAmountText="can help support people in crisis."
        monthlyOtherAmountText="each month can help provide long-term support."
      />

      <h3>Image banner with Ambient Video (looping)</h3>
      <DonateBanner
        pageBackgroundColour="grey_light"
        paddingAbove="0rem"
        paddingBelow="2rem"
        donateOrientation="right"
        imageL={videoImageL}
        imageM={videoImageM}
        imageS={videoImageS}
        videoDesktop={videoDesktop}
        videoMobile={videoMobile}
        videoLoop
        data={data}
        mbshipID="mbship-5"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate Now"
        subtitle="Please help us fund life-changing projects in the UK and around the world."
      />

      <h3>Image banner with Ambient Video (no loop)</h3>
      <DonateBanner
        pageBackgroundColour="grey_light"
        paddingAbove="0rem"
        paddingBelow="2rem"
        donateOrientation="left"
        imageL={videoImageL}
        imageM={videoImageM}
        imageS={videoImageS}
        videoDesktop={videoDesktop}
        videoMobile={videoMobile}
        videoLoop={false}
        data={data}
        mbshipID="mbship-6"
        donateLink="https://donation.comicrelief.com/"
        clientID="donate"
        cartID="default-comicrelief"
        title="Donate today"
        subtitle="Your support can help people facing the toughest times."
      />
    </div>
  );
}
