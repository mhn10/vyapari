import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const reducer = (state, action) => {
    const { type } = action;

    switch (type) {
        case "changeState":
            return { ...state, step: action.value };

        // case "setSearchText":
        //     return { ...state, searchText: action.searchText };

        default:
            return state;
    }
};

const Home = ({ props }) => {
    // const [homeState, dispatch] = React.useReducer(reducer, {
    //     searchText: "",
    //     step: 1
    // });

    // useEffect(() => {
    //     console.log("fetch data here");

    //     axios
    //         .get(`https://dog.ceo/api/breeds/list/all`)
    //         .then(response => {
    //             console.log("Response node details", response.data.message);
    //             const { message } = response.data;
    //             console.log("TCL: Dashboard -> message", message);
    //             setBreeds(Object.keys(message));
    //             setSearchList(Object.keys(message));
    //         })
    //         .catch(error => {
    //             console.log("Error in useEffect nameAdd", error);
    //             alert("No Data available, reload");
    //         });
    // }, []);

    return (
        <>
            <Wrapper>
                <Nav>Navigation</Nav>
                <Main>
                   <NestedCards>test 1 </NestedCards>
                   <NestedCards>test 2</NestedCards>
                   <NestedCards>test 3</NestedCards>
                   <NestedCards>test 4</NestedCards>
                   <NestedCards>test 5</NestedCards>
                    test main

                </Main>
                <Sidebar>{process.env.REACT_APP_PUBLIC_KEY}</Sidebar>

                <Footer>Footer</Footer>
            </Wrapper>
        </>
    );
};

export default withRouter(Home);

const Label = styled.div`
    color: #afafb1;
    font-weight: 200;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
`;

const Wrapper = styled.div`
    box-sizing: border-box;
   
    /* margin-left: 2rem;
    margin-right: 2rem; */
    background-color: #fff;
    color: #444;
    margin-top: 50px;
    border-radius: 18px;

    /* Grid styles */
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr 6fr 3fr 1fr;
    grid-template-areas: "nav "
                        "main "
                        "sidebar"
                        "footer";

    width: 100vw;
    height: 100vh;
    grid-gap: 1rem;

    @media only screen and (min-width: 900px) {
        grid-template-columns: 8fr 2fr;
        grid-template-rows: 1fr 9fr 1fr;
        grid-template-areas: "nav nav"
                             "main sidebar"
                             "footer footer";
        /* margin-left: 10%;
        margin-right: 10%; */
        /* margin-top: 60px; */
        width: 100vw;
        height: 100vh;
    }
    @media only screen and (min-width: 1400px) {
        grid-template-columns: 12fr 3fr;
        grid-template-rows: 1fr 13fr 1fr;
        grid-template-areas: "nav nav"
                             "main sidebar"
                             "footer footer";


        
        width: 100vw;
        height: 100vh; 
    }
`;

const Nav = styled.nav`
    grid-area: nav;
`;

const Main = styled.main`
 width: 100%;
    height: 100%;
    grid-area: main;
    display : grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    justify-items: center;

`;

const Sidebar = styled.div`
    grid-area: sidebar;
`;

const Footer = styled.footer`
    grid-area: footer;
`;
const NestedCards = styled.div`
     font-weight: 200;

`;

const ImageWrapper = styled.div`
    box-sizing: border-box;
    padding: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
    background-color: #fff;
    color: #444;
    margin-top: 50px;
    border-radius: 18px;

    /* Grid styles */
    display: grid;
    align-items: center;
    justify-content: center;
    justify-items: center;

    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

    grid-gap: 1rem;
    @media only screen and (min-width: 900px) {
        grid-template-columns: repeat(3, minmax(240px, 1fr));
        padding-left: 3rem;
        padding-right: 3rem;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 60px;
    }
    @media only screen and (min-width: 1400px) {
        padding-left: 3rem;
        padding-right: 3rem;
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 70px;
    }
`;
