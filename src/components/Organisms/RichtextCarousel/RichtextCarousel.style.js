import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import defaultBoxShadow from '../../../theme/shared/boxShadows';

// Duration in seconds
const animationSpeed = 0.75;

const SlideCopyWrapper = styled.div`
  background: ${({ theme, $nodeBackgroundColour }) => theme.color($nodeBackgroundColour)};
  height: ${props => props.$mobileHeight}px;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  border: 1px dashed ${({ theme, $nodeOutlineColour }) => theme.color($nodeOutlineColour)};
  border-radius: 20px;
  position: relative;
  overflow: visible;
  word-wrap: break-word;
  font-size: 0.9rem;
  line-height: 0.9rem;

  * {
    font-size: inherit;
    line-height: inherit;
  }

  &:after {
    position: absolute;
    content: '';
    top: 50%;
    width: 34%;
    right: calc(-34% - 0px);
    height: 2px;
    border-bottom: 1px dashed ${({ theme, $nodeOutlineColour }) => theme.color($nodeOutlineColour)};
  }

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    height: ${props => props.$tabletHeight}px;
    width: 85%;
  }

    @media ${({ theme }) => theme.allBreakpoints('L')} {
    height: ${props => props.$desktopHeight}px;
  }
`;

const HeadingCopyWrapper = styled.div`
  text-align: center;

  * {
    margin-top: 0;
  }

  h1, h2, h3 {
    margin-bottom: 1.5rem;
  }
`;

// Unfortunately having to target plugin-created markup ye olde fashioned way:
const CarouselWrapper = styled.div`
  height: 100%;
  background: ${({ theme, $carouselBackgroundColour }) => theme.color($carouselBackgroundColour)};
  max-width: 760px;
  padding: 2.5rem ${spacing('l')} 3.5rem;
  margin: 0 auto;
  border-radius: 20px;
  ${defaultBoxShadow()}

  .splide {
    position: relative;
    margin: 0 auto;
    padding-top: ${spacing('l')};

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
        width: 100%;
        height: 100%;
        transition: opacity 0.2s linear;
        background: ${({ theme, $carouselBackgroundColour }) => css`
          linear-gradient(90deg, ${theme.color($carouselBackgroundColour)},
          ${theme.color($carouselBackgroundColour)}7a, ${theme.color($carouselBackgroundColour)}00);
        `};
      }

      &.splide__arrow--next {
        left: auto;
        right: 0;

        &:after {
          left: auto;
          right: 0;
          background: ${({ theme, $carouselBackgroundColour }) => css`
          linear-gradient(90deg, ${theme.color($carouselBackgroundColour)}00,
          ${theme.color($carouselBackgroundColour)}7a, ${theme.color($carouselBackgroundColour)});
        `};
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
    }

    // Carousel:
    &.richtext-carousel {

      // All sides:
      .splide__slide {
        text-align: center;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        height: ${props => props.$mobileHeight}px;

        // No dashed 'connecting' line on the final slide
        &.last-slide {
          ${SlideCopyWrapper} {
            &:after {
              content: none !important;
            }
          }
        }
        
        // 'Tablet' (and up) tweaks for the 3-visible layout
        @media ${({ theme }) => theme.allBreakpoints('M')} {
          height: ${props => props.$tabletHeight}px;

           // All 'SlideCopyWrapper's:
          ${SlideCopyWrapper} {
            transition: transform ${animationSpeed}s ease;
            transform-origin: center;
            transform: scale(0.8);

            &:after {
              transition: transform ${animationSpeed}s ease,
              width ${animationSpeed}s ease,
              right ${animationSpeed}s ease;
              width: 50%;
              right: calc(-50% - 1px);
              transform: scale(1);
            }
          }

          // Our middle, active slide:
          &.is-active {
            ${SlideCopyWrapper} {
              transform: scale(1.0);
            } 
          }
        }

        @media ${({ theme }) => theme.allBreakpoints('L')} {
          height: ${props => props.$desktopHeight}px;
        }
      }
    }
  }
`;

const Container = styled.div`
  background-color:   ${({ theme, $rowBackgroundColour }) => theme.color($rowBackgroundColour)};
  padding: ${({ $paddingTop, $paddingBottom }) => `${$paddingTop} 0 ${$paddingBottom}`};
`;

export {
  CarouselWrapper, SlideCopyWrapper,
  HeadingCopyWrapper, Container
};
