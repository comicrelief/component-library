import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import Text from '../../Atoms/Text/Text';

// Duration in seconds
const animationSpeed = 0.5;

const ImageWrapper = styled.div`
  width: 33%;
  display: block;
  padding: 7%;
  border: 2px dashed #89888b;
  border-radius: 50%;
  position: relative;
  overflow: visible;

  img {
    width: 100%;
    height: auto;
  }

  &:after {
    position: absolute;
    content: '';
    top: 50%;
    width: 200%;
    right: calc(-200% - 8px);
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
  padding: ${spacing('m')} 0;
  width: 75%;
  margin: 0 auto;
`;

const CopyWrapper = styled.div`
  padding: ${spacing('sm')} 0;
  width: 75%;
  margin: 0 auto;
`;

const Heading = styled(Text)`
  width: 75%;
  margin: 0 auto;
  
  // To override pre-existing first-child rule
  &:first-child {
    margin-bottom: ${spacing('l')};
    text-align: center;
    font-size: 20px;
    line-height: 23px;

    @media ${({ theme }) => theme.breakpoint('medium')} {
      font-size: 21px;
      line-height: 23px;
    }
  }
`;

const PeopleHelpedText = styled(Text)`
  margin-bottom: ${spacing('l')};
  text-align: center;
  font-size: 40px;
  line-height: 40px;

  @media ${({ theme }) => theme.breakpoint('small')} {
    font-size: 60px;
    line-height: 60px;
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
    font-size: 75px;
    line-height: 78px;
  }
`;

const Including = styled(Text)`
  margin-bottom: 0;
  text-align: center;
  font-size: 14px;
  line-height: 17px;

  @media ${({ theme }) => theme.breakpoint('small')} {
    font-size: 17px;
    line-height: 19px;
  }
`;

// Unfortunately having to target plugin-created markup ye olde fashioned way:
const CarouselWrapper = styled.div`
  height: 100%;
  padding: ${spacing('m')};

  .carousel {
    position: relative;
    margin: 0 auto;
    padding-top: ${spacing('l')};

    @media ${({ theme }) => theme.breakpoint('medium')} {
      padding-top: ${spacing('lg')};
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
          
      &:before {
        content: '';
        // Do we need some sort of icon here to show it's a button?
        // background: transparent url(/images/payin/CR__Chevron_D--white.svg) no-repeat;
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        left: 0;
        transform: translate(0, -50%) rotate(90deg);
      }

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        transition: opacity 0.2s linear;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.95),
        rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
      }


      &:hover {
        // TO-DO: accessibiity?
        // border: 1px solid black;
        &:after {
          opacity: 0.5;
        }
      }

      @media ${({ theme }) => theme.breakpoint('medium')} {
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
        background: linear-gradient(270deg, rgba(255, 255, 255, 0.95),
        rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
      }
    }
      
    .wymd-carousel {
      // Override default animations
      -webkit-transition: -webkit-transform ${animationSpeed}s;
      transition: -webkit-transform ${animationSpeed}s;
      -o-transition: transform ${animationSpeed}s;
      transition: transform ${animationSpeed}s;
      transition: transform ${animationSpeed}s;
      -webkit-transform ${animationSpeed}s;
      will-change: transform;

      .last-slide {
        .image-wrapper:after {
          content: none;
        }
      }
      
      .carousel__slide {
        // Relatively arbitrary 'height' based on supplied copy
        padding-bottom: 500px !important;

        @media ${({ theme }) => theme.breakpoint('medium')} {

          // Relative arbitrary 'height' based on supplied copy
          padding-bottom: 550px !important;

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
          }

          // Our 'first' slide of the three:
          &.carousel__slide--visible {
            .carousel__inner-slide {
              > div:first-child {
                &:after {
                  right: calc(-250% - 6px);
                  transform: scale(1);
                  width: 250%;
                }
              }
            }


            // 2nd and 3rd:
            + .carousel__slide--visible {
              .carousel__inner-slide {
                > div:first-child {
                  transform: scale(1);
                  &:after {
                    right: calc(-187% - 6px);
                    transform: scale(0.5);
                    width: 250%;
                  }
                }
              }

              // Resets the 3rd slide:
              + .carousel__slide--visible {
                > div > div:first-child {
                  transform: scale(0.5);
                  &:after {
                    right: calc(-250% - 6px);
                    transform: scale(1);
                    width: 250%;
                  }
                }
              }
            }
          }
        }
      
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
