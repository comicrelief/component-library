import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { breakpointValues } from '../../../theme/shared/allBreakpoints';
import Text from '../../Atoms/Text/Text';
import AmbientVideo from '../../Atoms/AmbientVideo/AmbientVideo';
import Form from './Form/Form';
import { handleTitles, handleOtherAmountText } from './_utils';

import {
  Container,
  InnerContainer,
  TitleWrapperInner,
  TitleWrapperOuter,
  Wrapper
} from './DonateBanner.style';

const BgVideo = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
`;

const TopVideoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
`;

const TemporaryDonateBannerVideoCopy = ({
  donateWidgetIsTextOnly = false,
  donateOrientation = 'right',
  paddingAbove = '2rem',
  paddingBelow = '2rem',
  pageBackgroundColour = 'transparent',
  componentBackgroundColour = 'white',
  title = null,
  subtitle = '',
  monthlyTitle = '',
  monthlySubtitle = '',
  popUpText = 'Help us deliver long-term impact by converting your single donation into a monthly gift.',
  chooseAmountText = null,
  monthlyChooseAmountText = null,
  otherAmountText = 'will help us fund amazing projects in the UK and around the world.',
  monthlyOtherAmountText = '',
  hideMoneyBuys = false,
  videoTop = null,
  videoDesktop = null,
  data = {},
  cartID,
  clientID,
  donateLink,
  mbshipID
}) => {
  const isLarge = useMediaQuery({ query: `(min-width: ${breakpointValues.L}px)` });
  const [givingType, setGivingType] = useState();

  const {
    showCopy,
    thisTitle,
    thisSubtitle,
    noTitlesAtAll
  } = handleTitles(givingType, title, subtitle, monthlyTitle, monthlySubtitle);

  const {
    thisOtherAmountText
  } = handleOtherAmountText(givingType, otherAmountText, monthlyOtherAmountText);

  const shouldShowVideo = donateWidgetIsTextOnly === false;

  const shouldShowDesktopVideo = shouldShowVideo && isLarge && videoDesktop;
  const shouldShowTopVideo = shouldShowVideo && !isLarge && videoTop;

  const shouldShowTitleSection = noTitlesAtAll === false && isLarge && donateWidgetIsTextOnly;

  return (
    <Container
      paddingAbove={paddingAbove}
      paddingBelow={paddingBelow}
      pageBackgroundColour={pageBackgroundColour}
      id={mbshipID}
    >
      <InnerContainer
        componentBackgroundColour={componentBackgroundColour}
        $donateWidgetIsTextOnly={donateWidgetIsTextOnly}
      >
        {shouldShowTopVideo ? (
          <TopVideoWrapper>
            <AmbientVideo src={videoTop} loop />
          </TopVideoWrapper>
        ) : null}

        {shouldShowDesktopVideo ? (
          <BgVideo>
            <AmbientVideo src={videoDesktop} loop />
          </BgVideo>
        ) : null}

        <Wrapper
          donateOrientation={donateOrientation}
          aria-live="polite"
          noTitlesAtAll={noTitlesAtAll}
          hasTopImage={shouldShowTopVideo}
          shouldShowTitleSection={shouldShowTitleSection}
        >
          {shouldShowTitleSection && (
          <TitleWrapperOuter donateOrientation={donateOrientation}>
            <TitleWrapperInner>
              {showCopy && (
              <>
                <Text
                  tag="h2"
                  size="big"
                  family="Anton"
                  weight="normal"
                >
                  {thisTitle}
                </Text>
                <Text tag="p" size="m">
                  {thisSubtitle}
                </Text>
              </>
              )}
            </TitleWrapperInner>
          </TitleWrapperOuter>
          )}

          <Form
            data={data}
            otherAmountText={thisOtherAmountText}
            cartID={cartID}
            clientID={clientID}
            mbshipID={mbshipID}
            donateLink={donateLink}
            hideMoneyBuys={hideMoneyBuys}
            popUpText={popUpText}
            chooseAmountText={chooseAmountText}
            monthlyChooseAmountText={monthlyChooseAmountText}
            donateWidgetIsTextOnly={donateWidgetIsTextOnly}
            hasTopImage={shouldShowTopVideo}
            shouldShowTitleSection={shouldShowTitleSection}
            donateOrientation={donateOrientation}
            givingType={givingType}
            changeGivingType={setGivingType}
          />
        </Wrapper>
      </InnerContainer>
    </Container>
  );
};

const videoPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({ default: PropTypes.string })
]);

TemporaryDonateBannerVideoCopy.propTypes = {
  donateWidgetIsTextOnly: PropTypes.bool,
  donateOrientation: PropTypes.oneOf(['left', 'right']),
  paddingAbove: PropTypes.string,
  paddingBelow: PropTypes.string,
  pageBackgroundColour: PropTypes.string,
  componentBackgroundColour: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  monthlyTitle: PropTypes.string,
  monthlySubtitle: PropTypes.string,
  popUpText: PropTypes.string,
  chooseAmountText: PropTypes.string,
  monthlyChooseAmountText: PropTypes.string,
  otherAmountText: PropTypes.string,
  monthlyOtherAmountText: PropTypes.string,
  hideMoneyBuys: PropTypes.bool,
  videoTop: videoPropType,
  videoDesktop: videoPropType,
  data: PropTypes.objectOf(PropTypes.shape),
  cartID: PropTypes.string.isRequired,
  clientID: PropTypes.string.isRequired,
  donateLink: PropTypes.string.isRequired,
  mbshipID: PropTypes.string.isRequired
};

export default TemporaryDonateBannerVideoCopy;
