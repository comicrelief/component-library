import styled, { css } from 'styled-components';
import Text from '../../Atoms/Text/Text';

const MoneybuyWrapper = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    align-content: space-between;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media ${({ theme }) => theme.breakpoint('medium')} {
        flex-direction: row;
        align-items: stretch;
    }
`;

const Moneybuy = styled.div`
    display: inherit;
    width: 100%;
    padding: 8px 20px;
    height: auto;
    background-color: white;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.color('black')};;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    opacity: 1;

    ${props => props.isInactive && css`
        opacity: 0.5;
    `}

    @media ${({ theme }) => theme.breakpoint('small')} {
        width: 70%;
        padding: 8px 40px;

    }

    @media ${({ theme }) => theme.breakpoint('medium')} {
        padding: 20px 14px;
        flex-direction: column;
        width: 18%;
        max-height: none;
    }
`;

const OrLabel = styled(Text)`
    display: inherit;
    align-items: center;
    margin: 10px 0;
`;

const MoneybuyImage = styled.span`
    background: center / contain no-repeat url("${props => props.imageURL}"), 
    ${props => props.theme.color('grey_extra_light')};
    width: 40px;
    height: 40px;
    border-radius: 40px;

    @media ${({ theme }) => theme.breakpoint('medium')} {
        width: 0;
        height: 0;
        padding: 26%;
        border-radius: 100%;
      }
`;

const MoneybuyAmount = styled(Text)`
    text-align: center;
    margin: 0 25px;
    width: 10%;

    @media ${({ theme }) => theme.breakpoint('medium')} {
        margin: 10px 15px 5px;
        width: auto;
    }
`;

const MoneybuyDescription = styled(Text)`
    text-align: center;
    max-width: 50%;

    @media ${({ theme }) => theme.breakpoint('medium')} {
        max-width: none;

    }
`;

export {
  MoneybuyWrapper, Moneybuy, OrLabel, MoneybuyImage, MoneybuyAmount, MoneybuyDescription
};
