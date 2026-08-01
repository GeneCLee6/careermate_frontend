import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Hero from "./Hero";

const MainContent = styled.div`
    margin-top: 62px;
    min-height: calc(100vh - 62px);
`;

const Home = () => {
    return (
        <React.Fragment>
            <MainContent>
                <Navbar />
                <Hero />
            </MainContent>
        </React.Fragment>
    );
};

export default Home;
