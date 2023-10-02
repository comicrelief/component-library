import styled, { keyframes } from 'styled-components';
// import { media, container } from '../../../theme/shared/size';
// import spacing from '../../../theme/shared/spacing';
// import zIndex from '../../../theme/shared/zIndex';

const animCircle = keyframes`
    to {
        stroke-dashoffset: ${({ thisOffset }) => thisOffset};
    }
`;

const ProgressBar = styled.div`
    box-sizing: border-box;
    background-color: green;
    position: relative;
    width: 170px;
    height: 170px;
    margin: 1em;
    transform: rotate(-90deg);

    position: absolute;
    top: 0;
    right: 0;

    transition: transform 0.5s;
    transform: rotate( ${({ degreesLeft }) => degreesLeft}deg);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    // position: relative;
    background: radial-gradient(#EF6868 0 9.5px, transparent 10.5px) 50% 0% / 20px 20px no-repeat, 
                radial-gradient(transparent 29px, #2493AB 30px 50px) 0 0 / 100% 100% no-repeat;
    animation: animate 3s linear infinite;

`;

const ProgressBarSvg = styled.svg`
    box-sizing: border-box;
    position: relative;
    width: 175px;
    height: 175px;
    overflow: hidden;
    display: none;
`;

const ProgresBarSvgCircle = styled.circle`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 10;
    stroke-dasharray: ${({ thisOffset }) => thisOffset};
    stroke-dashoffset: 0;
    stroke: red;
    stroke-linecap: round;
    transform: translate(5px, 5px); // stroke-width / 2
    // animation: ${animCircle} 1s ease-in-out forwards;

    display: none;
`;

export {
  ProgressBar, ProgressBarSvg, ProgresBarSvgCircle
};
