import React from "react";
import styled from "styled-components";
import HeroDecorationImg from "../../../assets/arrow-decoration.png";

const Container = styled.div`
    width: 100%;
    background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
    padding: 120px 40px 100px;
    position: relative;
    overflow: hidden;
`;

const HeroContainer = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
`;

const HeroContent = styled.div`
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
`;

const Title = styled.h1`
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    color: #000;
    margin: 0 0 24px 0;
    letter-spacing: -0.02em;
    border: 2px dashed #e0e0e0;
    padding: 40px 60px;
    border-radius: 16px;
    position: relative;
    display: inline-block;
    z-index: 1;
`;

const Description = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    color: #666;
    margin: 0 0 48px 0;
`;

const Buttons = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
`;

const Button = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    padding: 14px 32px;
    border-radius: 28px;
    transition: background-color 0.3s ease;
    white-space: nowrap;
    cursor: pointer;
`;

const PrimaryButton = styled(Button)`
    background: linear-gradient(110deg, #504ffd 11%, #40c3fb 92%);
    color: #fff;
    box-shadow: 0 4px 12px rgba(80, 79, 253, 0.3);

    &:hover {
        box-shadow: 0 6px 20px rgba(80, 79, 253, 0.4);
        transform: translateY(-2px);
    }
`;

const SecondaryButton = styled(Button)`
    background-color: #fff;
    color: #333;
    border: 2px solid #e5e5e5;

    &:hover {
        color: #333;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
`;

const HeroDecoration = styled.img`
    position: absolute;
    top: 15%;
    right: 52%;
    transform: translate(460px, 65px);
    width: 70px;
    height: auto;
    z-index: 10;
    opacity: 0.9;
    pointer-events: none;
    animation: float 3s ease-in-out infinite;
`;

const Hero = () => {
    return (
        <Container>
            <HeroContainer>
                <HeroContent>
                    <Title>Your AI Career Practice Partner</Title>
                    <Description>
                        Get job-ready with AI — from resumes to interviews,
                        <br />
                        CareerMate AI coaches you step by step.
                    </Description>
                    <Buttons>
                        <PrimaryButton href="#start">
                            Start for Free
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 10H16M16 10L10 4M16 10L10 16"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </PrimaryButton>
                        <SecondaryButton>
                            Watch Demo
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 10H16M16 10L10 4M16 10L10 16"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </SecondaryButton>
                    </Buttons>
                </HeroContent>
                <HeroDecoration
                    src={HeroDecorationImg}
                    alt="hero-decoration"
                    aria-hidden="true"
                />
            </HeroContainer>
        </Container>
    );
};

export default Hero;
