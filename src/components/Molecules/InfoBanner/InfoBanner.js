import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import CurrencyFormat from "react-currency-format";

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    position: relative;
    color: white;
    padding: 60px 0;
    background: ${p => p.background ? p.background : "transparent"};
    @media (min-width: 700px) {
        flex-direction: row;
    }
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 40px;
    flex-direction: column;
    @media (min-width: 700px) {
        width: calc(100%/3);
    }
`;

const Label = styled.h3`
    text-transform: uppercase;
    font-size: 16px;
`;

const Desc = styled.p`
    font-size: 27px;
    font-weight: bold;
`;

/**
 * Info Banner for landing pages.
 */

const InfoBanner = ({title, background, theme, startDate, endDate, country, amount}) => {
    return (
        <Container background={background}>
            <Info>
                <Label>Project Name</Label>
                <Desc>{title}</Desc>
            </Info>
            <Info>
                <Label>End Date</Label>
                <Desc>
                    <Moment format="MMMM Do YYYY">{endDate}</Moment>
                </Desc>
            </Info>
            <Info>
                <Label>Funding theme</Label>
                <Desc>{theme}</Desc>
            </Info>
            <Info>
                <Label>Amount Awarded</Label>
                <Desc>
                    <CurrencyFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={'£'} renderText={value => value} />
                </Desc>
            </Info>            
            <Info>
                <Label>Start Date</Label>
                <Desc>
                    <Moment format="MMMM Do YYYY">{startDate}</Moment>
                </Desc>
            </Info>
            <Info>
                <Label>Beneficiary Country</Label>
                <Desc>{country}</Desc>
            </Info>
        </Container>
    );
};

export default InfoBanner;