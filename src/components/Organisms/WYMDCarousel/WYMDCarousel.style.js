import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import Text from '../../Atoms/Text/Text';
import defaultBoxShadow from '../../../theme/shared/boxShadows';

// Duration in seconds
const animationSpeed = 0.75;

// Use to calc positions when scaling copy
const textScaleOffsetA = 45;
const textScaleOffsetB = 5;

const AllTextWrapper = styled.div`
//
`;

const ImageWrapper = styled.div`
  width: 45%;
  display: block;
  padding: 9%;
  border: 2px dashed #89888b;
  border-radius: 50%;
  position: relative;
  overflow: visible;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  // Dashed 'connecting' line:
  &:after {
    position: absolute;
    content: '';
    top: 50%;
    width: 125%;
    right: calc(-125% - 2px);
    height: 2px;
    border-bottom: 2px dashed #89888b;
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    width: 50%;
    padding: 9%;
    &:after {
      width: 100%;
      right: calc(-100% - 8px);
    }
  }
`;

const AmountWrapper = styled.div`
  padding: ${spacing('m')} 0 0.75rem;

  h1 {
    font-size: 34px;
    line-height: 37px;

    @media ${({ theme }) => theme.allBreakpoints('M')} {
      font-size: 40px;
      line-height: 40px;
    }
  }
`;

const CopyWrapper = styled.div`
  padding: 0;
  width: 75%;
  margin: 0 auto;

  p {
    font-size: ${({ theme }) => theme.fontSize('s')};
    line-height: ${({ theme }) => theme.fontSize('l')};
  }
`;

const Heading = styled(Text)`
  width: 75%;
  margin: 0 auto;

  // To override pre-existing first-child rule
  &:first-child {
    margin-bottom: ${spacing('l')};
    text-align: center;
    font-size: 16px;
    line-height: 19.5px;

    @media ${({ theme }) => theme.allBreakpoints('L')} {
      font-size: 20px;
      line-height: 24.38px;
    }
  }
`;

const PeopleHelpedText = styled(Text)`
  margin-bottom: ${spacing('l')};
  text-align: center;
  font-size: 34px;
  line-height: 37px;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    font-size: 60px;
    line-height: 60px;
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    font-size: 64px;
    line-height: 68px;
  }
`;

const Including = styled(Text)`
  margin-bottom: 0;
  text-align: center;
  font-size: 12px;
  line-height: 14.63px;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    font-size: 17px;
    line-height: 19px;
  }
`;

const SlideInner = styled.div`
  // Don't need any custom styles, just wanted a nice clear selector :)
`;

// Unfortunately having to target plugin-created markup ye olde fashioned way:
const CarouselWrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.color('white')};
  max-width: 760px;
  padding:  ${spacing('l')};
  margin: 0 auto;

  border-radius: 20px;
  ${defaultBoxShadow()}

  .splide {
    position: relative;
    margin: 0 auto;
    padding-top: ${spacing('l')};

    @media ${({ theme }) => theme.allBreakpoints('L')} {
      padding-top: ${spacing('l')};
    }

    // **************  
    // TODO: BUTTONS
    // *************

    // CAROUSEL
    &.wymd-carousel {
      .splide__slide {
        height: ${props => props.$mobileHeight}px !important;

        ${SlideInner} {
          text-align: center;
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
        }

        &.last-slide {
          ${ImageWrapper} {
            &:after {
              content: none;
            }
          }
        }

        // 'Tablet' (and up) tweaks for the 3-visible layout
        @media ${({ theme }) => theme.allBreakpoints('M')} {
          height: ${props => props.$tabletHeight}px !important;

          // ALL SLIDES:
          ${SlideInner} {
            ${ImageWrapper} {
              transition: transform ${animationSpeed}s ease;
              transform: scale(0.5);

              // Dashed 'connecting' line:
              &:after {
                transition: transform ${animationSpeed}s ease, width ${animationSpeed}s ease, right ${animationSpeed}s ease;
                right: calc(-300% - 6px);
                width: 300%;
              }
            }

            ${AllTextWrapper} {
              transition: transform ${animationSpeed}s ease;
              transform-origin: top;
              transform: translateY(calc(-${textScaleOffsetA}px + ${textScaleOffsetB}%)) scale(0.5);
            }
          }

          // ACTIVE/MIDDLE SLIDE:
          + .is-next {
            ${SlideInner} {
              ${ImageWrapper} {
                transform: scale(1);
                
                 // Dashed 'connecting' line:
                &:after {
                  right: calc(-222% - 6px);
                  transform: scale(0.5);
                  width: 300%;
                }
              }

              ${AllTextWrapper} {
                transform: scale(1);
              }
            }
          }

          // Silly tweak needed to get things to line-up nicely:
          + .is-prev {
            ${ImageWrapper} {
              &:after {
                right: calc(-360%);
              }
            }
          }
        } 

        @media ${({ theme }) => theme.allBreakpoints('L')} {
          height: ${props => props.$desktopHeight}px !important;

          // ALL SLIDES:
          ${SlideInner} {
            ${ImageWrapper} {
              // Dashed 'connecting' line:
              &:after {
                width: 250%;
                right: calc(-250% - 6px);
              }
            }
          }
      
          // ACTIVE/MIDDLE SLIDE:
          + .is-next {
            ${SlideInner} {
              ${ImageWrapper} {       
                // Dashed 'connecting' line:
                &:after {
                  width: 250%;
                  right: calc(-192%);
                }
              }
            }
          }

          + .is-prev {
            ${ImageWrapper} {
              &:after {
                right: calc(-315%);
              }
            }
          }
        }
      } // end of .splide__slide
    } // end of .splide.wymd-carousel
  } // end of CarouselWrapper
`;

const Container = styled.div`
  background-color:   ${({ theme, $backgroundColour }) => theme.color($backgroundColour)};
  padding: ${({ $paddingTop, $paddingBottom }) => `${$paddingTop} 0 ${$paddingBottom};`}
`;

export {
  CarouselWrapper, ImageWrapper, AmountWrapper, CopyWrapper,
  Heading, PeopleHelpedText, Including, Container, SlideInner, AllTextWrapper
};
