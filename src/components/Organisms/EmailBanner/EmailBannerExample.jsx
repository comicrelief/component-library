import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import EmailBanner from './EmailBanner';
import { buildEsuValidationSchema } from '../shared/emailSignup/emailSignupConfig';
import RichText from '../../Atoms/RichText/RichText';
import { defaultData as desktopPictures, mobileImages as mobilePictures } from '../../../data/data';
import videoDesktop from '../../Atoms/AmbientVideo/big-buck-bunny-1080p-30sec.mp4';
import videoMobile from '../../Atoms/AmbientVideo/thetestdatacom_480p_example.mp4';

const imageL = { images: desktopPictures.images, imageLow: desktopPictures.imageLow, alt: 'Background image' };
const imageM = { images: desktopPictures.images, imageLow: desktopPictures.imageLow, alt: 'Background image' };
const imageS = { images: mobilePictures.images, imageLow: mobilePictures.imageLow, alt: 'Background image' };

const videoImageL = { images: desktopPictures.images, imageLow: desktopPictures.imageLow, alt: 'Video poster' };
const videoImageM = { images: desktopPictures.images, imageLow: desktopPictures.imageLow, alt: 'Video poster' };
const videoImageS = { images: mobilePictures.images, imageLow: mobilePictures.imageLow, alt: 'Video poster' };

const bodyCopy = <RichText markup="<p>Sign up for exclusive news, stories and updates about everything Comic Relief.</p>" />;
const privacyCopy = <RichText markup='<p>By agreeing to subscribe to our emails and clicking the button to sign up, you are consenting to the terms of our <a href="/privacy-notice">Privacy Policy</a>. You can unsubscribe at any time.</p>' />;
const successCopy = <RichText markup="<p>Thanks! Your first email will be with you shortly.</p>" />;

const validationSchema = buildEsuValidationSchema({});

function EmailBannerInstance({ children }) {
  const formMethods = useForm({ mode: 'onBlur', resolver: yupResolver(validationSchema) });
  return <FormProvider {...formMethods}>{children(formMethods)}</FormProvider>;
}

export default function EmailBannerExample() {
  return (
    <div>
      <h3>Image banner (widget right)</h3>
      <EmailBannerInstance>
        {formMethods => (
          <EmailBanner
            pageBackgroundColour="grey_light"
            paddingAbove="0rem"
            paddingBelow="2rem"
            orientation="right"
            imageL={imageL}
            imageM={imageM}
            imageS={imageS}
            title="Stay in the know!"
            bodyCopy={bodyCopy}
            privacyCopy={privacyCopy}
            successCopy={successCopy}
            ctaText="Sign up"
            formContext={formMethods}
            onSubmit={data => console.log(data)}
          />
        )}
      </EmailBannerInstance>

      <h3>Image banner (widget left)</h3>
      <EmailBannerInstance>
        {formMethods => (
          <EmailBanner
            pageBackgroundColour="grey_light"
            paddingAbove="2rem"
            paddingBelow="2rem"
            orientation="left"
            imageL={imageL}
            imageM={imageM}
            imageS={imageS}
            title="Stay in the know!"
            bodyCopy={bodyCopy}
            privacyCopy={privacyCopy}
            successCopy={successCopy}
            ctaText="Sign up"
            formContext={formMethods}
            onSubmit={data => console.log(data)}
          />
        )}
      </EmailBannerInstance>

      <h3>Image banner with Ambient Video (looping)</h3>
      <EmailBannerInstance>
        {formMethods => (
          <EmailBanner
            pageBackgroundColour="grey_light"
            paddingAbove="0rem"
            paddingBelow="2rem"
            orientation="right"
            imageL={videoImageL}
            imageM={videoImageM}
            imageS={videoImageS}
            videoDesktop={videoDesktop}
            videoMobile={videoMobile}
            videoLoop
            title="Stay in the know!"
            bodyCopy={bodyCopy}
            privacyCopy={privacyCopy}
            successCopy={successCopy}
            ctaText="Sign up"
            formContext={formMethods}
            onSubmit={data => console.log(data)}
          />
        )}
      </EmailBannerInstance>

      <h3>Text-only widget, custom widget background + text colour</h3>
      <EmailBannerInstance>
        {formMethods => (
          <EmailBanner
            emailWidgetIsTextOnly
            pageBackgroundColour="rnd_25_glitzy_grape"
            componentBackgroundColour="deep_violet_dark"
            copyColor="white"
            paddingAbove="2rem"
            paddingBelow="2rem"
            orientation="right"
            title="Stay in the know!"
            bodyCopy={bodyCopy}
            privacyCopy={privacyCopy}
            successCopy={successCopy}
            ctaText="Sign up"
            formContext={formMethods}
            onSubmit={data => console.log(data)}
          />
        )}
      </EmailBannerInstance>

      <h3>Text-only widget, standard colours</h3>
      <EmailBannerInstance>
        {formMethods => (
          <EmailBanner
            emailWidgetIsTextOnly
            pageBackgroundColour="grey_light"
            componentBackgroundColour="white"
            copyColor="black"
            paddingAbove="2rem"
            paddingBelow="2rem"
            orientation="right"
            title="Stay in the know!"
            bodyCopy={bodyCopy}
            privacyCopy={privacyCopy}
            successCopy={successCopy}
            ctaText="Sign up"
            formContext={formMethods}
            onSubmit={data => console.log(data)}
          />
        )}
      </EmailBannerInstance>
    </div>
  );
}
