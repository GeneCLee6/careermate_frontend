import React from "react";
import styled from "styled-components";
import FeaturesImg from "../../../assets/features-showcase.png";

const Container = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 80px 40px;
`;

const FeaturesContainer = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FeaturesImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

const Features = () => {
    return (
        <Container>
            <FeaturesContainer>
                <FeaturesImage
                    src={FeaturesImg}
                    alt="features-showcase"
                    aria-hidden="true"
                />
            </FeaturesContainer>
        </Container>
    );
};

export default Features;
