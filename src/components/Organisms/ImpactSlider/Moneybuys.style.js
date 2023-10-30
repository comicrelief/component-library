import styled, { css } from 'styled-components';

const MoneybuyWrapper = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    align-content: space-between;
    flex-direction: row;
    justify-content: space-between;
`;

const Moneybuy = styled.div`
    display: inherit;
    width: 15%;
    padding: 20px;
    height: auto;
    background-color: white;
    border-radius: 10px;
    border: 2px solid black;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 1;
    ${props => props.isInactive && css`
        opacity: 0.4;
    `}
`;

const OrLabel = styled.span`
    display: inherit;
    align-items: center;
`;

const MoneybuyImage = styled.span`
    background: center / contain no-repeat url("${props => props.imageURL}"), 
    ${props => props.theme.color('grey_extra_light')};
    border-radius: 50px;
    width: 75px;
    height: 75px;
`;

const MoneybuyAmount = styled.span`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin: 10px;
`;

const MoneybuyDescription = styled.span`
    text-align: center;
`;

export {
  MoneybuyWrapper, Moneybuy, OrLabel, MoneybuyImage, MoneybuyAmount, MoneybuyDescription
};
