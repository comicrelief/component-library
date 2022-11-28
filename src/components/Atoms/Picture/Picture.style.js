import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ objFitState, nonObjFitImage }) => (!objFitState && nonObjFitImage) && `background-image: url(${nonObjFitImage}); background-size: cover; background-position: center;`};
  display: block;
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
  position: relative;
  ${({ isBackgroundImage }) => isBackgroundImage && 'position: absolute; bottom: 0px; left: 0px; right: 0px; height: 100%;'};
  `;

const Image = styled.img`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : 'auto')};
  display: block;
  object-fit: ${props => (props.objectFit === 'none' && 'none')
    || (props.objectFit === 'cover' && 'cover')
    || (props.objectFit === 'contain' && 'contain')};  
  ${({ objectFit, objFitState }) => (objectFit !== 'none' && !objFitState) && 'visibility: hidden;'}; // Allows image to provide the container height, but make it invisible

  ${props => (props.objectFit === 'cover' && props.focalPointXPos && props.focalPointYPos) && css`
    object-position: ${props.focalPointXPos} ${props.focalPointYPos};
  `}
`;

export { Wrapper, Image };
