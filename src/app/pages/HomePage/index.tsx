import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Particles, { ParticlesProps } from 'react-particles-js';

const Title = styled.h1`
  font-size: 14rem;

  @media (max-width: 600px) {
    font-size: 4rem;
    text-align: center;
  }
`;

const height = window.innerHeight - 60;
const width = window.innerWidth - 60;
const Wrapper = styled.div`
  height: ${height}px;
  width: ${width}px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section``;

const ParticleWrapper = styled.div`
  position: absolute;
  height: ${height}px;
  width: ${width}px;
  overflow: hidden;
  z-index: 99;
`;

const FirstName = styled.span``;
const LastName = styled.span``;

const Divider = styled.div`
  width: 100%;
  border: #d79921 solid 0.7rem;
`;
const Profession = styled.h2`
  font-size: 6rem;
  margin-top: 3rem;
  @media (max-width: 600px) {
    margin-top: 0.7rem;
    font-size: 4rem;
  }
`;

const TextWrapper = styled.div`
  text-transform: uppercase;
  color: #d79921;
  opacity: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
`;

export const HomePage: FunctionComponent = () => {
  const options: ParticlesProps['params'] = {
    particles: {
      number: {
        value: 355,
        density: {
          enable: true,
          value_area: 789.1476416322727,
        },
      },
      color: {
        value: '#d79921',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.48927153781200905,
        random: false,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Section>
        <Wrapper>
          <TextWrapper>
            <Title>
              <FirstName>Adam</FirstName> <LastName>Norbäcker</LastName>
            </Title>
            <Divider />
            <Profession>Developer</Profession>
          </TextWrapper>
          <ParticleWrapper>
            <Particles width="100vw" height="100vh" params={options} />
          </ParticleWrapper>
        </Wrapper>
      </Section>
    </>
  );
};
