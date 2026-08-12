import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import Text from '../../Atoms/Text/Text';
import defaultBoxShadow from '../../../theme/shared/boxShadows';

// Duration in seconds
const animationSpeed = 0.75;

// Use to calc positions when scaling copy
const textScaleOffsetA = 45;
const textScaleOffsetB = 5;

const SlideInner = styled.div`
  // Don't need any custom styles, just wanted a nice clear selector amidst the chaos
`;

const AllTextWrapper = styled.div`
  // And ditto.
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

    // Navigation buttons:
    .splide__arrows {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }

    button.splide__arrow {
      position: absolute;
      left: 0;
      top: 0;
      width: 33.3%;
      height: 100%;
      padding: 0;
      box-shadow: none;
      text-indent: -9999px;
      background-color: transparent;
      transform: none;
      border-radius: 0;
      opacity: 1;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        transition: opacity 0.2s linear;
        background: linear-gradient(90deg, rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
      }

      &.splide__arrow--next {
        left: auto;
        right: 0;

        &:after {
          left: auto;
          right: 0;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0),
         rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1));
        }
      }

      &:hover {
        &:after {
          opacity: 0.5;
        }
      }

      svg {
        display: none;
      }

      @media ${({ theme }) => theme.allBreakpoints('M')} {
        &:after {
          width: 100%;
        }
      }
    }

    // Reorientate for the right-side 'next' button
    button.carousel__next-button {
      left: auto;
      right: 0;

      &:after {
        left: auto;
        right: 0;
        background: linear-gradient(270deg, rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
      }
    }

    // Carousel:
    &.wymd-carousel {
      .splide__slide {
      
        height: ${props => props.$mobileHeight}px;
        
        // All slides
        ${SlideInner} {
          text-align: center;
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          width: 100%;
        }

        // No dashed 'connecting' line on the final slide
        &.last-slide {
          ${ImageWrapper} {
            &:after {
              content: none;
            }
          }
        }

        // 'Tablet' (and up) tweaks for the 3-visible layout
        @media ${({ theme }) => theme.allBreakpoints('M')} {
          height: ${props => props.$tabletHeight}px;

          // All slides:
          ${SlideInner} {
            ${ImageWrapper} {
              transition: transform ${animationSpeed}s ease;
              transform: scale(0.5);
              
              // Dashed 'connecting' line:
              &:after {
                transition: transform ${animationSpeed}s ease, width ${animationSpeed}s ease, right ${animationSpeed}s ease;
                right: calc(-360%);
                width: 360%;
              }
            }

            ${AllTextWrapper} {
              transition: transform ${animationSpeed}s ease;
              transform-origin: top;
              transform: translateY(calc(-${textScaleOffsetA}px + ${textScaleOffsetB}%)) scale(0.5);
            }
          }

          // Previous slide, with a shorter 'connecting' line to account for larger, active slide to the right:
          &.is-prev {
            ${SlideInner} {
              ${ImageWrapper} {                
                &:after {
                  right: calc(-300% - 6px);
                  width: 300%;
                }
              }
            } 
          }

          // Active, middle slide:
          &.is-active {
            ${SlideInner} {
              ${ImageWrapper} {
                transform: scale(1);
              
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
        } 

        @media ${({ theme }) => theme.allBreakpoints('L')} {
          height: ${props => props.$desktopHeight}px;

          ${SlideInner} ${ImageWrapper}  {
            &:after {
              width: 315%;
              right: calc(-315%);
            }
          }
          

          &.is-prev {
            ${SlideInner} ${ImageWrapper} {
              &:after {
                right: calc(-260%);
                width: 260%;
              }
            } 
          }

          &.is-active {
            ${SlideInner} ${ImageWrapper} {
              &:after {
                width: 250%;
                right: calc(-192%);
              }
            } 
          }
        }
      }
    }
  }
`;

const Container = styled.div`
  background-color:   ${({ theme, $backgroundColour }) => theme.color($backgroundColour)};
  padding: ${({ $paddingTop, $paddingBottom }) => `${$paddingTop} 0 ${$paddingBottom};`}
`;

export {
  CarouselWrapper, ImageWrapper, AmountWrapper, CopyWrapper,
  Heading, PeopleHelpedText, Including, Container, SlideInner, AllTextWrapper
};
