import React from 'react';
import ExampleDisplay from './ExampleDisplay.jsx';

// Atom examples
import ButtonExample from '../components/Atoms/Button/ButtonExample.jsx';
import buttonExampleSrc from '../components/Atoms/Button/ButtonExample.jsx?raw';
import TextExample from '../components/Atoms/Text/TextExample.jsx';
import textExampleSrc from '../components/Atoms/Text/TextExample.jsx?raw';
import InputExample from '../components/Atoms/Input/InputExample.jsx';
import inputExampleSrc from '../components/Atoms/Input/InputExample.jsx?raw';
import SelectExample from '../components/Atoms/Select/SelectExample.jsx';
import selectExampleSrc from '../components/Atoms/Select/SelectExample.jsx?raw';
import TextAreaExample from '../components/Atoms/TextArea/TextAreaExample.jsx';
import textAreaExampleSrc from '../components/Atoms/TextArea/TextAreaExample.jsx?raw';
import LabelExample from '../components/Atoms/Label/LabelExample.jsx';
import labelExampleSrc from '../components/Atoms/Label/LabelExample.jsx?raw';
import ErrorTextExample from '../components/Atoms/ErrorText/ErrorTextExample.jsx';
import errorTextExampleSrc from '../components/Atoms/ErrorText/ErrorTextExample.jsx?raw';
import CheckboxExample from '../components/Atoms/Checkbox/CheckboxExample.jsx';
import checkboxExampleSrc from '../components/Atoms/Checkbox/CheckboxExample.jsx?raw';
import RadioButtonExample from '../components/Atoms/RadioButton/RadioButtonExample.jsx';
import radioButtonExampleSrc from '../components/Atoms/RadioButton/RadioButtonExample.jsx?raw';
import LinkExample from '../components/Atoms/Link/LinkExample.jsx';
import linkExampleSrc from '../components/Atoms/Link/LinkExample.jsx?raw';
import RichTextExample from '../components/Atoms/RichText/RichTextExample.jsx';
import richTextExampleSrc from '../components/Atoms/RichText/RichTextExample.jsx?raw';
import PaginationExample from '../components/Atoms/Pagination/PaginationExample.jsx';
import paginationExampleSrc from '../components/Atoms/Pagination/PaginationExample.jsx?raw';
import LogoExample from '../components/Atoms/Logo/LogoExample.jsx';
import logoExampleSrc from '../components/Atoms/Logo/LogoExample.jsx?raw';
import PictureExample from '../components/Atoms/Picture/PictureExample.jsx';
import pictureExampleSrc from '../components/Atoms/Picture/PictureExample.jsx?raw';
import SocialIconsExample from '../components/Atoms/SocialIcons/SocialIconsExample.jsx';
import socialIconsExampleSrc from '../components/Atoms/SocialIcons/SocialIconsExample.jsx?raw';
import AmbientVideoExample from '../components/Atoms/AmbientVideo/AmbientVideoExample.jsx';
import ambientVideoExampleSrc from '../components/Atoms/AmbientVideo/AmbientVideoExample.jsx?raw';
import ConfettiExample from '../components/Atoms/Confetti/ConfettiExample.jsx';
import confettiExampleSrc from '../components/Atoms/Confetti/ConfettiExample.jsx?raw';
import TextInputWithDropdownExample from '../components/Atoms/TextInputWithDropdown/TextInputWithDropdownExample.jsx';
import textInputWithDropdownExampleSrc from '../components/Atoms/TextInputWithDropdown/TextInputWithDropdownExample.jsx?raw';
import ButtonWithStatesExample from '../components/Atoms/ButtonWithStates/ButtonWithStatesExample.jsx';
import buttonWithStatesExampleSrc from '../components/Atoms/ButtonWithStates/ButtonWithStatesExample.jsx?raw';
import InfoMessageExample from '../components/Atoms/InfoMessage/InfoMessageExample.jsx';
import infoMessageExampleSrc from '../components/Atoms/InfoMessage/InfoMessageExample.jsx?raw';

// Molecule examples
import InfoBannerExample from '../components/Molecules/InfoBanner/InfoBannerExample.jsx';
import infoBannerExampleSrc from '../components/Molecules/InfoBanner/InfoBannerExample.jsx?raw';
import SingleMessageExample from '../components/Molecules/SingleMessage/SingleMessageExample.jsx';
import singleMessageExampleSrc from '../components/Molecules/SingleMessage/SingleMessageExample.jsx?raw';
import SingleMessageDsExample from '../components/Molecules/SingleMessageDS/SingleMessageDsExample.jsx';
import singleMessageDsExampleSrc from '../components/Molecules/SingleMessageDS/SingleMessageDsExample.jsx?raw';
import CardExample from '../components/Molecules/Card/CardExample.jsx';
import cardExampleSrc from '../components/Molecules/Card/CardExample.jsx?raw';
import CardDsExample from '../components/Molecules/CardDs/CardDsExample.jsx';
import cardDsExampleSrc from '../components/Molecules/CardDs/CardDsExample.jsx?raw';
import CTAMultiCardExample from '../components/Molecules/CTA/CTAMultiCard/CTAMultiCardExample.jsx';
import ctaMultiCardExampleSrc from '../components/Molecules/CTA/CTAMultiCard/CTAMultiCardExample.jsx?raw';
import CTASingleCardExample from '../components/Molecules/CTA/CTASingleCard/CTASingleCardExample.jsx';
import ctaSingleCardExampleSrc from '../components/Molecules/CTA/CTASingleCard/CTASingleCardExample.jsx?raw';
import BoxExample from '../components/Molecules/Box/BoxExample.jsx';
import boxExampleSrc from '../components/Molecules/Box/BoxExample.jsx?raw';
import ArticleTeaserExample from '../components/Molecules/ArticleTeaser/ArticleTeaserExample.jsx';
import articleTeaserExampleSrc from '../components/Molecules/ArticleTeaser/ArticleTeaserExample.jsx?raw';
import DoubleCopyExample from '../components/Molecules/DoubleCopy/DoubleCopyExample.jsx';
import doubleCopyExampleSrc from '../components/Molecules/DoubleCopy/DoubleCopyExample.jsx?raw';
import PartnerLinkExample from '../components/Molecules/PartnerLink/PartnerLinkExample.jsx';
import partnerLinkExampleSrc from '../components/Molecules/PartnerLink/PartnerLinkExample.jsx?raw';
import SearchResultExample from '../components/Molecules/SearchResult/SearchResultExample.jsx';
import searchResultExampleSrc from '../components/Molecules/SearchResult/SearchResultExample.jsx?raw';
import SearchInputExample from '../components/Molecules/SearchInput/SearchInputExample.jsx';
import searchInputExampleSrc from '../components/Molecules/SearchInput/SearchInputExample.jsx?raw';
import ShareButtonExample from '../components/Molecules/ShareButton/ShareButtonExample.jsx';
import shareButtonExampleSrc from '../components/Molecules/ShareButton/ShareButtonExample.jsx?raw';
import VideoBannerExample from '../components/Molecules/VideoBanner/VideoBannerExample.jsx';
import videoBannerExampleSrc from '../components/Molecules/VideoBanner/VideoBannerExample.jsx?raw';
import TypeaheadExample from '../components/Molecules/Typeahead/TypeaheadExample.jsx';
import typeaheadExampleSrc from '../components/Molecules/Typeahead/TypeaheadExample.jsx?raw';
import SchoolLookupExample from '../components/Molecules/SchoolLookup/SchoolLookupExample.jsx';
import schoolLookupExampleSrc from '../components/Molecules/SchoolLookup/SchoolLookupExample.jsx?raw';
import PromoExample from '../components/Molecules/Promo/PromoExample.jsx';
import promoExampleSrc from '../components/Molecules/Promo/PromoExample.jsx?raw';
import AccordionExample from '../components/Molecules/Accordion/AccordionExample.jsx';
import accordionExampleSrc from '../components/Molecules/Accordion/AccordionExample.jsx?raw';
import CountdownExample from '../components/Molecules/Countdown/CountdownExample.jsx';
import countdownExampleSrc from '../components/Molecules/Countdown/CountdownExample.jsx?raw';
import BannerExample from '../components/Molecules/Banner/BannerExample.jsx';
import bannerExampleSrc from '../components/Molecules/Banner/BannerExample.jsx?raw';
import ChipExample from '../components/Molecules/Chip/ChipExample.jsx';
import chipExampleSrc from '../components/Molecules/Chip/ChipExample.jsx?raw';
import DescriptorExample from '../components/Molecules/Descriptor/DescriptorExample.jsx';
import descriptorExampleSrc from '../components/Molecules/Descriptor/DescriptorExample.jsx?raw';
import SimpleSchoolLookupExample from '../components/Molecules/SimpleSchoolLookup/SimpleSchoolLookupExample.jsx';
import simpleSchoolLookupExampleSrc from '../components/Molecules/SimpleSchoolLookup/SimpleSchoolLookupExample.jsx?raw';
import HeroBannerExample from '../components/Molecules/HeroBanner/HeroBannerExample.jsx';
import heroBannerExampleSrc from '../components/Molecules/HeroBanner/HeroBannerExample.jsx?raw';
import QuoteSliceExample from '../components/Molecules/QuoteSlice/QuoteSliceExample.jsx';
import quoteSliceExampleSrc from '../components/Molecules/QuoteSlice/QuoteSliceExample.jsx?raw';

// Organism examples
import { FooterExample1, FooterExample2, FooterExample3 } from '../components/Organisms/Footer/FooterExample.jsx';
import EmailSignUpExample from '../components/Organisms/EmailSignUp/EmailSignUpExample.jsx';
import emailSignUpExampleSrc from '../components/Organisms/EmailSignUp/EmailSignUpExample.jsx?raw';
import MarketingPreferencesDSExample from '../components/Organisms/MarketingPreferencesDS/MarketingPreferencesDSExample.jsx';
import marketingPreferencesDSExampleSrc from '../components/Organisms/MarketingPreferencesDS/MarketingPreferencesDSExample.jsx?raw';
import MembershipExample from '../components/Organisms/Membership/MembershipExample.jsx';
import membershipExampleSrc from '../components/Organisms/Membership/MembershipExample.jsx?raw';
import DonateBannerExample from '../components/Organisms/DonateBanner/DonateBannerExample.jsx';
import donateBannerExampleSrc from '../components/Organisms/DonateBanner/DonateBannerExample.jsx?raw';
import { EmailBannerExample1, EmailBannerExample2, EmailBannerExample3, EmailBannerExample4, EmailBannerExample5 } from '../components/Organisms/EmailBanner/EmailBannerExample.jsx';
import FooterNewExample from '../components/Organisms/FooterNew/FooterNewExample.jsx';
import footerNewExampleSrc from '../components/Organisms/FooterNew/FooterNewExample.jsx?raw';
import { HeaderExample1, HeaderExample2, HeaderExample3, HeaderExample4, HeaderExample5 } from '../components/Organisms/Header/HeaderExample.jsx';
import Header2025Example from '../components/Organisms/Header2025/Header2025Example.jsx';
import header2025ExampleSrc from '../components/Organisms/Header2025/Header2025Example.jsx?raw';
import { DonateExample1, DonateExample3, DonateExample5, DonateExample7, DonateExample9 } from '../components/Organisms/Donate/DonateExample.jsx';
import CookieBannerExample from '../components/Organisms/CookieBanner/CookieBannerExample.jsx';
import cookieBannerExampleSrc from '../components/Organisms/CookieBanner/CookieBannerExample.jsx?raw';
import ImpactSliderExample1 from '../components/Organisms/ImpactSlider/ImpactSliderExample1.jsx';
import impactSliderExample1Src from '../components/Organisms/ImpactSlider/ImpactSliderExample1.jsx?raw';
import ImpactSliderExample2 from '../components/Organisms/ImpactSlider/ImpactSliderExample2.jsx';
import impactSliderExample2Src from '../components/Organisms/ImpactSlider/ImpactSliderExample2.jsx?raw';
import WYMDCarouselExample from '../components/Organisms/WYMDCarousel/WYMDCarouselExample.jsx';
import wymdCarouselExampleSrc from '../components/Organisms/WYMDCarousel/WYMDCarouselExample.jsx?raw';
import RichtextCarouselExample from '../components/Organisms/RichtextCarousel/RichtextCarouselExample.jsx';
import richtextCarouselExampleSrc from '../components/Organisms/RichtextCarousel/RichtextCarouselExample.jsx?raw';
import DynamicGalleryExample from '../components/Organisms/DynamicGallery/DynamicGalleryExample.jsx';
import dynamicGalleryExampleSrc from '../components/Organisms/DynamicGallery/DynamicGalleryExample.jsx?raw';

const Placeholder = ({ name }) => (
  <div style={{ padding: '1rem', background: '#f5f5f5', borderRadius: '4px', color: '#666' }}>
    <em>{name} — no example in place.</em>
  </div>
);

const demo = (Component, src) => (
  <ExampleDisplay component={<Component />} src={src} />
);

export const atoms = [
  { name: 'AmbientVideo', demo: demo(AmbientVideoExample, ambientVideoExampleSrc) },
  { name: 'Button', demo: demo(ButtonExample, buttonExampleSrc) },
  { name: 'ButtonWithStates', demo: demo(ButtonWithStatesExample, buttonWithStatesExampleSrc) },
  { name: 'Checkbox', demo: demo(CheckboxExample, checkboxExampleSrc) },
  { name: 'Confetti', demo: demo(ConfettiExample, confettiExampleSrc) },
  { name: 'ErrorText', demo: demo(ErrorTextExample, errorTextExampleSrc) },
  { name: 'InfoMessage', demo: demo(InfoMessageExample, infoMessageExampleSrc) },
  { name: 'Input', demo: demo(InputExample, inputExampleSrc) },
  { name: 'Label', demo: demo(LabelExample, labelExampleSrc) },
  { name: 'Link', demo: demo(LinkExample, linkExampleSrc) },
  { name: 'Logo', demo: demo(LogoExample, logoExampleSrc) },
  { name: 'Pagination', demo: demo(PaginationExample, paginationExampleSrc) },
  { name: 'Picture', demo: demo(PictureExample, pictureExampleSrc) },
  { name: 'RadioButton', demo: demo(RadioButtonExample, radioButtonExampleSrc) },
  { name: 'RichText', demo: demo(RichTextExample, richTextExampleSrc) },
  { name: 'Select', demo: demo(SelectExample, selectExampleSrc) },
  { name: 'SocialIcons', demo: demo(SocialIconsExample, socialIconsExampleSrc) },
  { name: 'Text', demo: demo(TextExample, textExampleSrc) },
  { name: 'TextArea', demo: demo(TextAreaExample, textAreaExampleSrc) },
  { name: 'TextInputWithDropdown', demo: demo(TextInputWithDropdownExample, textInputWithDropdownExampleSrc) },
];

export const molecules = [
  { name: 'Accordion', demo: demo(AccordionExample, accordionExampleSrc) },
  { name: 'ArticleTeaser', demo: demo(ArticleTeaserExample, articleTeaserExampleSrc) },
  { name: 'Banner', demo: demo(BannerExample, bannerExampleSrc) },
  { name: 'Box', demo: demo(BoxExample, boxExampleSrc) },
  { name: 'Card', demo: demo(CardExample, cardExampleSrc) },
  { name: 'CardDs', demo: demo(CardDsExample, cardDsExampleSrc) },
  { name: 'Chip', demo: demo(ChipExample, chipExampleSrc) },
  { name: 'Countdown', demo: demo(CountdownExample, countdownExampleSrc) },
  { name: 'CTAMultiCard', demo: demo(CTAMultiCardExample, ctaMultiCardExampleSrc) },
  { name: 'CTASingleCard', demo: demo(CTASingleCardExample, ctaSingleCardExampleSrc) },
  { name: 'Descriptor', demo: demo(DescriptorExample, descriptorExampleSrc) },
  { name: 'DoubleCopy', demo: demo(DoubleCopyExample, doubleCopyExampleSrc) },
  { name: 'HeroBanner', demo: demo(HeroBannerExample, heroBannerExampleSrc) },
  { name: 'InfoBanner', demo: demo(InfoBannerExample, infoBannerExampleSrc) },
  { name: 'Lookup', demo: <Placeholder name="Lookup" /> },
  { name: 'PartnerLink', demo: demo(PartnerLinkExample, partnerLinkExampleSrc) },
  { name: 'Promo', demo: demo(PromoExample, promoExampleSrc) },
  { name: 'QuoteSlice', demo: demo(QuoteSliceExample, quoteSliceExampleSrc) },
  { name: 'SchoolLookup', demo: demo(SchoolLookupExample, schoolLookupExampleSrc) },
  { name: 'SearchInput', demo: demo(SearchInputExample, searchInputExampleSrc) },
  { name: 'SearchResult', demo: demo(SearchResultExample, searchResultExampleSrc) },
  { name: 'ShareButton', demo: demo(ShareButtonExample, shareButtonExampleSrc) },
  { name: 'SimpleSchoolLookup', demo: demo(SimpleSchoolLookupExample, simpleSchoolLookupExampleSrc) },
  { name: 'SingleMessage', demo: demo(SingleMessageExample, singleMessageExampleSrc) },
  { name: 'SingleMessageDs', demo: demo(SingleMessageDsExample, singleMessageDsExampleSrc) },
  { name: 'Typeahead', demo: demo(TypeaheadExample, typeaheadExampleSrc) },
  { name: 'VideoBanner', demo: demo(VideoBannerExample, videoBannerExampleSrc) },
];

export const organisms = [
  { name: 'CookieBanner', demo: demo(CookieBannerExample, cookieBannerExampleSrc) },
  { name: 'Donate', examples: [<DonateExample1 />, <DonateExample3 />, <DonateExample5 />, <DonateExample7 />, <DonateExample9 />] },
  { name: 'DonateBanner', demo: demo(DonateBannerExample, donateBannerExampleSrc) },
  { name: 'DynamicGallery', demo: demo(DynamicGalleryExample, dynamicGalleryExampleSrc) },
  { name: 'EmailBanner', examples: [<EmailBannerExample1 />, <EmailBannerExample2 />, <EmailBannerExample3 />, <EmailBannerExample4 />, <EmailBannerExample5 />] },
  { name: 'EmailSignUpForm', demo: demo(EmailSignUpExample, emailSignUpExampleSrc) },
  { name: 'Footer', examples: [<FooterExample1 />, <FooterExample2 />, <FooterExample3 />] },
  { name: 'FooterNew', demo: demo(FooterNewExample, footerNewExampleSrc) },
  { name: 'Header', examples: [<HeaderExample1 />, <HeaderExample2 />, <HeaderExample3 />, <HeaderExample4 />, <HeaderExample5 />] },
  { name: 'Header2025', demo: demo(Header2025Example, header2025ExampleSrc) },
  { name: 'ImpactSlider', examples: [demo(ImpactSliderExample1, impactSliderExample1Src), demo(ImpactSliderExample2, impactSliderExample2Src)] },
  { name: 'MarketingPreferencesDSForm', demo: demo(MarketingPreferencesDSExample, marketingPreferencesDSExampleSrc) },
  { name: 'Membership', demo: demo(MembershipExample, membershipExampleSrc) },
  { name: 'RichtextCarousel', demo: demo(RichtextCarouselExample, richtextCarouselExampleSrc) },
  { name: 'WYMDCarousel', demo: demo(WYMDCarouselExample, wymdCarouselExampleSrc) },
];
