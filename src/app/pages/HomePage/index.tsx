import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Particles, { ParticlesProps } from 'react-particles-js';

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  opacity: 0.1;
  font-size: 8rem;
`;

const height = window.innerHeight - 60;
const width = window.innerWidth - 60;
const Wrapper = styled.div`
  height: ${height}px;
  width: ${width}px;
  overflow: hidden;
`;

const Section = styled.section``;

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
        value: '#fff',
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
        value: 2,
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
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Section>
        <Wrapper className="intro">
          <Title>Adam Norbäcker</Title>
          <Particles params={options} />
        </Wrapper>
      </Section>
    </>
  );
};
