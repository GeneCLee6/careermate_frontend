import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import ProblemSolution from "./ProblemSolution";

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
                <Features />
                <ProblemSolution />
            </MainContent>
        </React.Fragment>
    );
};

export default Home;
