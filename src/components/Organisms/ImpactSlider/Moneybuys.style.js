import styled from 'styled-components';

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
    width: 20%;
    height: 250px;
    background-color: white;
    border-radius: 10px;
    border: 2px solid black;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center
`;

const OrLabel = styled.span`
    display: inherit;
    align-items: center;
`;

export {
  MoneybuyWrapper, Moneybuy, OrLabel
};
