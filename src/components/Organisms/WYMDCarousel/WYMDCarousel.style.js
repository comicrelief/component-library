import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import Text from '../../Atoms/Text/Text';

// Duration in seconds
const animationSpeed = 0.75;

// Use to calc positions when scaling copy
const textScaleOffsetA = 45;
const textScaleOffsetB = 5;

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

  &:after {
    position: absolute;
    content: '';
    top: 50%;
    width: 125%;
    right: calc(-125% - 2px);
    height: 2px;
    border-bottom: 2px dashed #89888b;
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
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
    
    @media ${({ theme }) => theme.breakpoint('small')} {
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

    @media ${({ theme }) => theme.breakpoint('medium')} {
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

  @media ${({ theme }) => theme.breakpoint('small')} {
    font-size: 60px;
    line-height: 60px;
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
    font-size: 64px;
    line-height: 68px;
  }
`;

const Including = styled(Text)`
  margin-bottom: 0;
  text-align: center;
  font-size: 12px;
  line-height: 14.63px;

  @media ${({ theme }) => theme.breakpoint('small')} {
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
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);

  .carousel {
    position: relative;
    margin: 0 auto;
    padding-top: ${spacing('l')};

    @media ${({ theme }) => theme.breakpoint('medium')} {
      padding-top: ${spacing('l')};
    }
  
    button.carousel__back-button,
    button.carousel__next-button {
      position: absolute;
      left: 0;
      top: 0;
      width: 33% !important;
      height: 100%;
      padding: 0 !important;
      box-shadow: none;
      text-indent: -9999px;
      background-color: transparent;
      border: none;
        
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

      &:hover {
        &:after {
          opacity: 0.5;
        }
      }

      @media ${({ theme }) => theme.breakpoint('small')} {
        width: 33.3% !important;
        &:after {
          width: 100%;
        }
      }
    }
      
    button.carousel__next-button {
      left: auto;
      right: 0;
      
      &:before {
        transform: translate(0, -50%) rotate(-90deg);
      }

      &:after {
        left: auto;
        right: 0;
        background: linear-gradient(270deg, rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
      }
    }
      
    .wymd-carousel {
      // Override default animations
      transition: -webkit-transform ${animationSpeed}s;
      -o-transition: transform ${animationSpeed}s;
      transition: transform ${animationSpeed}s;
      -webkit-transform: ${animationSpeed}s;
      will-change: transform;

      .last-slide {
        .image-wrapper:after {
          content: none;
        }
      }
      
      .carousel__slide {
        // 'Mobile'
        padding-bottom: ${props => props.mobileHeight}px !important;

        // 'Tablet'
        @media ${({ theme }) => theme.breakpoint('small')} {
          padding-bottom: ${props => props.tabletHeight}px !important;
        }

        // 'Desktop'
        @media ${({ theme }) => theme.breakpoint('medium')} {
          padding-bottom: ${props => props.desktopHeight}px !important;
        }

        // 'Tablet'+ tweaks for the 3-visible ta
        @media ${({ theme }) => theme.breakpoint('small')} {

          // All slides:
          .carousel__inner-slide {

            // All 'ImageWrappers':
            > div:first-child {
              transition: transform ${animationSpeed}s ease;
              transform: scale(0.5);
              
              &:after {
                transition: transform ${animationSpeed}s ease,
                width ${animationSpeed}s ease,
                right ${animationSpeed}s ease;
                right: calc(-300% - 6px);
                transform: scale(1);
                width: 300%;
              }
            }

            // Scale down ALL copy
            .all-text-wrapper {
              transition: transform ${animationSpeed}s ease;
              transform-origin: top;
              transform: translateY(calc(-${textScaleOffsetA}px + ${textScaleOffsetB}%)) scale(0.5)
            }
          }

          // Our 'first' slide of the three:
          &.carousel__slide--visible {
            .carousel__inner-slide {
              > div:first-child {
                &:after {
                  right: calc(-300% - 6px);
                  transform: scale(1);
                  width: 300%;
                }
              }
            }

            // 2nd and 3rd:
            + .carousel__slide--visible {
              .carousel__inner-slide {
                > div:first-child {
                  transform: scale(1);
                  &:after {
                    right: calc(-222% - 6px);
                    transform: scale(0.5);
                    width: 300%;
                  }
                }
              }

              .all-text-wrapper {
                transform: translateY(0) scale(1);
              }

              // Resets the 3rd slide:
              + .carousel__slide--visible {
                > div > div:first-child {
                  transform: scale(0.5);
                  &:after {
                    right: calc(-300% - 6px);
                    transform: scale(1);
                    width: 300%;
                  }
                }
                .all-text-wrapper {
                  transform: translateY(calc(-${textScaleOffsetA}px + ${textScaleOffsetB}%)) scale(0.5)
                }
              }
            }
          }
        }

        // HERE WE GO
        // START OF DESKTOP
        @media ${({ theme }) => theme.breakpoint('medium')} {

          // First
          &.carousel__slide--visible {
            .carousel__inner-slide {
              > div:first-child {
                &:after {
                  right: calc(-250% - 6px);
                  width: 250%;
                }
              }
            }

            // 2nd and 3rd
            + .carousel__slide--visible {
              .carousel__inner-slide {
                > div:first-child {
                  &:after {
                    right: calc(-187% - 6px);
                    width: 250%;
                  }
                }
              }


              // 3rd only
              + .carousel__slide--visible {
                .carousel__inner-slide {
                  > div:first-child {
                    &:after {
                      right: calc(-250% - 6px);
                      width: 250%;
                    }
                  }
                }
              }
            }


          }

        }
        // END OF DESKTOP


        .carousel__inner-slide {
          text-align: center;
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
        }
      }
    }
  }
`;

export {
  CarouselWrapper, ImageWrapper, AmountWrapper, CopyWrapper, Heading, PeopleHelpedText, Including
};
