import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const thisHeight = '50vw';

// Unfortunately having to target plugin-created markup the old fashioned way
const CarouselWrapper = styled.div`
  // TO REMOVE
  // background-color: #00ffe0;
  // border: 1px solid black;

  height: ${thisHeight};

  .carousel {
    position: relative;
    margin: 0 auto;
      
    button.carousel__back-button,
    button.carousel__next-button {
      position: absolute;
      left: 0;
      top: 0;
      width: 33% !important;
      height: ${thisHeight};
      padding: 0 !important;
      box-shadow: none;
      text-indent: -9999px;
      background-color: transparent;
      border: none;
          
      &:before {
        content: '';
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
        width: 150%;
        height: 100%;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))
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
        background: linear-gradient(270deg, rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
      }
    }
      
    .wymd-carousel {
      // Override default animations
      -webkit-transition: -webkit-transform 0.75s;
      transition: -webkit-transform 0.75s;
      -o-transition: transform 0.75s;
      transition: transform 0.75s;
      transition: transform 0.75s, -webkit-transform 0.75s;
      will-change: transform;

      .last-slide {
        .image-wrapper:after {
          content: none;
        }
      }
      
      .carousel__slide {
        padding-bottom: ${thisHeight} !important;
      
        .carousel__inner-slide {
          // padding: 0 !important;
          text-align: center;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
      }
    }
  }
    
  // A more IE11-friendly solution 
  ul.carousel-fallback {
    list-style: disc;
    padding-left: 30px;
    margin: 20px 0;
    
    li {
      margin-bottom: 15px;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  display: block;
  padding: 9%;
  border: 3px dashed #89888b;
  border-radius: 50%;
  position: relative;
  overflow: visible;
  // box-sizing: content-box;

  img {
    width: 100%;
    height: auto;
  }

  &:after {
    position: absolute;
    content: '';
    top: 50%;
    right: calc(-100% + -6px);
    width: 100%;
    height: 3px;
    border-bottom: 3px dashed #89888b;
  }
`;

const AmountWrapper = styled.div`
  padding: ${spacing('m')} ${spacing('m')};
`;

const CopyWrapper = styled.div`
  padding: ${spacing('sm')} ${spacing('m')};
`;

export {
  CarouselWrapper, ImageWrapper, AmountWrapper, CopyWrapper
};
