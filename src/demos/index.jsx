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
import CookieBannerExample from '../components/Organisms/CookieBanner/CookieBannerExample.jsx';
import cookieBannerExampleSrc from '../components/Organisms/CookieBanner/CookieBannerExample.jsx?raw';
import ImpactSliderExample from '../components/Organisms/ImpactSlider/ImpactSliderExample.jsx';
import impactSliderExampleSrc from '../components/Organisms/ImpactSlider/ImpactSliderExample.jsx?raw';
import WYMDCarouselExample from '../components/Organisms/WYMDCarousel/WYMDCarouselExample.jsx';
import wymdCarouselExampleSrc from '../components/Organisms/WYMDCarousel/WYMDCarouselExample.jsx?raw';
import RichtextCarouselExample from '../components/Organisms/RichtextCarousel/RichtextCarouselExample.jsx';
import richtextCarouselExampleSrc from '../components/Organisms/RichtextCarousel/RichtextCarouselExample.jsx?raw';
import DynamicGalleryExample from '../components/Organisms/DynamicGallery/DynamicGalleryExample.jsx';
import dynamicGalleryExampleSrc from '../components/Organisms/DynamicGallery/DynamicGalleryExample.jsx?raw';

const Placeholder = ({ name }) => (
  <div style={{ padding: '1rem', background: '#f5f5f5', borderRadius: '4px', color: '#666' }}>
    <em>{name} — no example file found.</em>
  </div>
);

const demo = (Component, src) => (
  <ExampleDisplay component={<Component />} src={src} />
);

export const atoms = [
  { name: 'Button', demo: demo(ButtonExample, buttonExampleSrc) },
  { name: 'Text', demo: demo(TextExample, textExampleSrc) },
  { name: 'Label', demo: demo(LabelExample, labelExampleSrc) },
  { name: 'Input', demo: demo(InputExample, inputExampleSrc) },
  { name: 'Select', demo: demo(SelectExample, selectExampleSrc) },
  { name: 'TextArea', demo: demo(TextAreaExample, textAreaExampleSrc) },
  { name: 'Checkbox', demo: demo(CheckboxExample, checkboxExampleSrc) },
  { name: 'RadioButton', demo: demo(RadioButtonExample, radioButtonExampleSrc) },
  { name: 'ErrorText', demo: demo(ErrorTextExample, errorTextExampleSrc) },
  { name: 'Link', demo: demo(LinkExample, linkExampleSrc) },
  { name: 'RichText', demo: demo(RichTextExample, richTextExampleSrc) },
  { name: 'Pagination', demo: demo(PaginationExample, paginationExampleSrc) },
  { name: 'Logo', demo: demo(LogoExample, logoExampleSrc) },
  { name: 'Picture', demo: demo(PictureExample, pictureExampleSrc) },
  { name: 'SocialIcons', demo: demo(SocialIconsExample, socialIconsExampleSrc) },
  { name: 'AmbientVideo', demo: demo(AmbientVideoExample, ambientVideoExampleSrc) },
  { name: 'Confetti', demo: demo(ConfettiExample, confettiExampleSrc) },
  { name: 'TextInputWithDropdown', demo: demo(TextInputWithDropdownExample, textInputWithDropdownExampleSrc) },
  { name: 'ButtonWithStates', demo: demo(ButtonWithStatesExample, buttonWithStatesExampleSrc) },
];

export const molecules = [
  { name: 'InfoBanner', demo: demo(InfoBannerExample, infoBannerExampleSrc) },
  { name: 'SingleMessage', demo: demo(SingleMessageExample, singleMessageExampleSrc) },
  { name: 'SingleMessageDs', demo: demo(SingleMessageDsExample, singleMessageDsExampleSrc) },
  { name: 'Card', demo: demo(CardExample, cardExampleSrc) },
  { name: 'CardDs', demo: demo(CardDsExample, cardDsExampleSrc) },
  { name: 'CTAMultiCard', demo: demo(CTAMultiCardExample, ctaMultiCardExampleSrc) },
  { name: 'CTASingleCard', demo: demo(CTASingleCardExample, ctaSingleCardExampleSrc) },
  { name: 'Box', demo: demo(BoxExample, boxExampleSrc) },
  { name: 'ArticleTeaser', demo: demo(ArticleTeaserExample, articleTeaserExampleSrc) },
  { name: 'DoubleCopy', demo: demo(DoubleCopyExample, doubleCopyExampleSrc) },
  { name: 'PartnerLink', demo: demo(PartnerLinkExample, partnerLinkExampleSrc) },
  { name: 'SearchResult', demo: demo(SearchResultExample, searchResultExampleSrc) },
  { name: 'SearchInput', demo: demo(SearchInputExample, searchInputExampleSrc) },
  { name: 'ShareButton', demo: demo(ShareButtonExample, shareButtonExampleSrc) },
  { name: 'VideoBanner', demo: demo(VideoBannerExample, videoBannerExampleSrc) },
  { name: 'Typeahead', demo: demo(TypeaheadExample, typeaheadExampleSrc) },
  { name: 'SchoolLookup', demo: demo(SchoolLookupExample, schoolLookupExampleSrc) },
  { name: 'Promo', demo: demo(PromoExample, promoExampleSrc) },
  { name: 'Accordion', demo: demo(AccordionExample, accordionExampleSrc) },
  { name: 'Countdown', demo: demo(CountdownExample, countdownExampleSrc) },
  { name: 'Banner', demo: demo(BannerExample, bannerExampleSrc) },
  { name: 'Chip', demo: demo(ChipExample, chipExampleSrc) },
  { name: 'Descriptor', demo: demo(DescriptorExample, descriptorExampleSrc) },
  { name: 'SimpleSchoolLookup', demo: demo(SimpleSchoolLookupExample, simpleSchoolLookupExampleSrc) },
  { name: 'Lookup', demo: <Placeholder name="Lookup" /> },
  { name: 'HeroBanner', demo: demo(HeroBannerExample, heroBannerExampleSrc) },
  { name: 'QuoteSlice', demo: demo(QuoteSliceExample, quoteSliceExampleSrc) },
];

export const organisms = [
  { name: 'Header', demo: <Placeholder name="Header" /> },
  { name: 'Header2025', demo: <Placeholder name="Header2025" /> },
  { name: 'Donate', demo: <Placeholder name="Donate" /> },
  { name: 'DonateBanner', demo: <Placeholder name="DonateBanner" /> },
  { name: 'Footer', demo: <Placeholder name="Footer" /> },
  { name: 'FooterNew', demo: <Placeholder name="FooterNew" /> },
  { name: 'EmailSignUp', demo: <Placeholder name="EmailSignUp" /> },
  { name: 'CookieBanner', demo: demo(CookieBannerExample, cookieBannerExampleSrc) },
  { name: 'Membership', demo: <Placeholder name="Membership" /> },
  { name: 'MarketingPreferencesDS', demo: <Placeholder name="MarketingPreferencesDS" /> },
  { name: 'ImpactSlider', demo: demo(ImpactSliderExample, impactSliderExampleSrc) },
  { name: 'WYMDCarousel', demo: demo(WYMDCarouselExample, wymdCarouselExampleSrc) },
  { name: 'RichtextCarousel', demo: demo(RichtextCarouselExample, richtextCarouselExampleSrc) },
  { name: 'DynamicGallery', demo: demo(DynamicGalleryExample, dynamicGalleryExampleSrc) },
];
