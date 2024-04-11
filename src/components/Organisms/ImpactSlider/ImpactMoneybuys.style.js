import styled, { css } from 'styled-components';
import Text from '../../Atoms/Text/Text';

const MoneybuyWrapper = styled.div`
    margin-top: 32px;
    width: 100%;
    display: flex;
    align-content: space-between;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media ${({ theme }) => theme.allBreakpoints('L')} {
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
    border: 1px solid ${props => props.theme.color('black')};
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    opacity: 1;

    ${props => props.isInactive && css`
        opacity: 0.5;
    `}

    @media ${({ theme }) => theme.allBreakpoints('M')} {
        width: 70%;
        padding: 8px 40px;

    }

    @media ${({ theme }) => theme.allBreakpoints('L')} {
        padding: 20px 14px;
        flex-direction: column;
        width: 18%;
        max-height: none;
    }
`;

const OrLabel = styled(Text)`
    display: inherit;
    align-items: center;
    margin: 8px 0;
    font-size: 14px;
`;

const MoneybuyImage = styled.span`
    background: center / 65% no-repeat url("${props => props.imageURL}"),
    ${props => props.theme.color('grey_extra_light')};
    width: 48px;
    height: 48px;
    border-radius: 48px;

    @media ${({ theme }) => theme.allBreakpoints('L')} {
        width: 0;
        height: 0;
        padding: 30%;
        border-radius: 100%;
      }
`;

const MoneybuyAmount = styled(Text)`
    text-align: center;
    margin: 0 10px;
    width: 25%;

    @media ${({ theme }) => theme.allBreakpoints('L')} {
        margin: 8px 15px 2px;
        width: auto;
    }
`;

const MoneybuyDescription = styled(Text)`
    text-align: left;
    width: 50%;

    @media ${({ theme }) => theme.allBreakpoints('L')} {
        width: 100%;
        text-align: center;
    }
`;

export {
  MoneybuyWrapper, Moneybuy, OrLabel, MoneybuyImage, MoneybuyAmount, MoneybuyDescription
};
