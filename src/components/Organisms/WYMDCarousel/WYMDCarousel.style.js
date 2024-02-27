import styled from 'styled-components';

const CarouselWrapper = styled.div`
    background-color: #00ffe054;

    // width: 100%;
    height: 30vh;
    overflow: hidden;

      .wymd-carousel .carousel__slide .carousel__inner-slide {
        padding: 0 30px !important;
        text-align: center;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .carousel {
        position: relative;
        margin: 0 auto;

        .carousel__slider--horizontal {
            // background-color: orange !important;
            // overflow: unset;
        }
      
        button.carousel__back-button,
        button.carousel__next-button {
          position: absolute;
          left: 0;
          top: 0;
          width: 30px !important;
          height: 30vh;
          padding: 0 !important;
          box-shadow: none;
          text-indent: -9999px;
          background-color: transparent;
      
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
        }
      
        button.carousel__next-button {
          left: auto;
          right: 0;
          &:before {
            transform: translate(0, -50%) rotate(-90deg);
      
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
      
          .carousel__slide {
            // TO-DO: HAS GOTTA MATCH THE WRAPPER
            padding-bottom: 30vh !important;
      
            .carousel__inner-slide {
              padding: 0 33% !important;
              text-align: center;
              display: inline-flex;
              align-items: center;
              justify-content: center;
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

export default CarouselWrapper;
