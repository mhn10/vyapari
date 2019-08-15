import * as React from "react";
import styled from "styled-components";


const Cards = props => {
   

    const clickHandler = StockSymbol => {
        console.log("Stock Symbol is ", StockSymbol);
       
    };

    return (
        <Card>
            <CardContainer onClick={() => clickHandler(props.Name)}>
                <h7>
                    <b style={{ wordWrap: "break-word" }}>{props.Name}</b>
                </h7>
                <div />
            </CardContainer>
        </Card>
    );
};

export default Cards;

const Card = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(248, 248, 248, 0.4);
    border-radius: 10px;
    box-shadow: 0px 7px 20px -5px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.5s;
    will-change: transform;
    border: 2px solid white;

    &:hover {
        box-shadow: 0px 20px 70px -10px rgba(0, 0, 0, 0.4);
        /* box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); */
    }
`;

const CardContainer = styled.div`
    padding: 2px 16px;
    text-align: center;
    justify-content: center;
    padding-top: 3rem;
`;
