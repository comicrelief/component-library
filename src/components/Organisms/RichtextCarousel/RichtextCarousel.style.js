import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
// import Text from '../../Atoms/Text/Text';

// Duration in seconds
const animationSpeed = 0.75;

const SlideCopyWrapper = styled.div`
  background: ${({ theme, nodeBackgroundColour }) => theme.color(nodeBackgroundColour)};
  height: ${props => props.mobileHeight}px;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  border: 1px dashed ${({ theme, nodeOutlineColour }) => theme.color(nodeOutlineColour)};
  border-radius: 20px;
  position: relative;
  overflow: visible;
  word-wrap: break-word;

  &:after {
    position: absolute;
    content: '';
    top: 50%;
    width: 34%;
    right: calc(-34% - 0px);
    height: 2px;
    border-bottom: 1px dashed ${({ theme, nodeOutlineColour }) => theme.color(nodeOutlineColour)};
  }

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    height: ${props => props.tabletHeight}px;
    width: 85%;
  }

    @media ${({ theme }) => theme.allBreakpoints('L')} {
    height: ${props => props.desktopHeight}px;
  }
`;

const HeadingCopyWrapper = styled.div`
  text-align: center;
`;

// Unfortunately having to target plugin-created markup ye olde fashioned way:
const CarouselWrapper = styled.div`
  height: 100%;
  background: ${({ theme, carouselBackgroundColour }) => theme.color(carouselBackgroundColour)};
  
  max-width: 760px;
  padding: 2.5rem ${spacing('l')} 3.5rem;
  margin: 0 auto;

  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);

  .carousel {
    position: relative;
    margin: 0 auto;
    padding-top: ${spacing('l')};

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
        background: ${({ theme, carouselBackgroundColour }) => css`
          linear-gradient(90deg, ${theme.color(carouselBackgroundColour)},
          ${theme.color(carouselBackgroundColour)}7a, ${theme.color(carouselBackgroundColour)}00);
        `};
      }

      &:hover {
        &:after {
          opacity: 0.5;
        }
      }

      @media ${({ theme }) => theme.allBreakpoints('M')} {
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

        background: ${({ theme, carouselBackgroundColour }) => css`
          linear-gradient(90deg, ${theme.color(carouselBackgroundColour)}00,
          ${theme.color(carouselBackgroundColour)}7a, ${theme.color(carouselBackgroundColour)});
        `};
      }
    }

    .richtext-carousel {
      // Override default animations
      transition: -webkit-transform ${animationSpeed}s;
      -o-transition: transform ${animationSpeed}s;
      transition: transform ${animationSpeed}s;
      -webkit-transform: ${animationSpeed}s;
      will-change: transform;

      .last-slide {
        .slide-copy-wrapper:after {
          content: none;
        }
      }

      .carousel__slide {
        // 'Mobile'
        padding-bottom: ${props => props.mobileHeight}px !important;

        // 'Tablet' (and up) tweaks for the 3-visible layout
        @media ${({ theme }) => theme.allBreakpoints('M')} {

          padding-bottom: ${props => props.tabletHeight}px !important;

          // All slides:
          .carousel__inner-slide {

            // All 'SlideCopyWrapper's:
            > div:first-child {
              transition: transform ${animationSpeed}s ease;
              transform-origin: center;
              transform: scale(0.8);

              &:after {
                transition: transform ${animationSpeed}s ease,
                width ${animationSpeed}s ease,
                right ${animationSpeed}s ease;
                width: 100%;
                right: calc(-100% - 6px);
                transform: scale(1);

              }
            }
          }

          // Our 'first' slide of the three:
          &.carousel__slide--visible {
            .carousel__inner-slide {
              > div:first-child {
                &:after {
                  width: 33%;
                  right: calc(-33% - 3px);
                  transform: scale(1);
                }
              }
            }

            // 2nd and 3rd:
            + .carousel__slide--visible {
              .carousel__inner-slide {
                > div:first-child {
                  transform: scale(1);
                  &:after {
                    width: 33%;
                    right: calc(-33% + 3px);
                    transform: scale(0.8);
                  }
                }
              }

              // Resets the 3rd slide:
              + .carousel__slide--visible {
                > div > div:first-child {
                  transform: scale(0.8);
                  &:after {
                    width: 50%;
                    right: calc(-50% - 6px);
                    transform: scale(1);
                  }
                }
              }
            }
          }
        }

        // 'Desktop'
        @media ${({ theme }) => theme.allBreakpoints('L')} {
          padding-bottom: ${props => props.desktopHeight}px !important;

          // First
          &.carousel__slide--visible {
            .carousel__inner-slide {
              > div:first-child {
                &:after {
                  // Not CURRENTLY required as still working with thirds as per Medium, but...
                  // width: 33%;
                  // right: calc(-33% - 3px);
                }
              }
            }

            // 2nd and 3rd
            + .carousel__slide--visible {
              .carousel__inner-slide {
                > div:first-child {
                  &:after {
                  // Not CURRENTLY required as still working with thirds as per Medium, but...
                    // width: 33%;
                    // right: calc(-33% + 3px);
                  }
                }
              }


              // 3rd only
              + .carousel__slide--visible {
                .carousel__inner-slide {
                  > div:first-child {
                    &:after {
                      right: calc(-125% - 5px);
                      width: 125%;
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
  CarouselWrapper, SlideCopyWrapper,
  HeadingCopyWrapper
};
