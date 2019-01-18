import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/addons.cjs';

// Components
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

// Elements
import Inner from '../elements/Inner';
import { Title, BigTitle, Subtitle } from '../elements/Titles';

// Views
import Hero from '../views/Hero';
import Projects from '../views/Projects';
import About from '../views/About';
import Contact from '../views/Contact';

import avatar from '../images/avatar.jpg';

import projects from '../data-add-ons/projects';
// Add Ons

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero>
        <BigTitle>
          Hi, <br /> I'm Ryan Bruns.
        </BigTitle>
        <Subtitle>Welcome to my portfolio!</Subtitle>
      </Hero>
      <Projects>
        <Title>Projects</Title>
        <ProjectsWrapper>
          {projects.map(project => (
            <ProjectCard title={project.title} link={project.link} bg={project.bg}>
              {' '}
              {project.displayText}{' '}
            </ProjectCard>
          ))}
        </ProjectsWrapper>
      </Projects>
      <About>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Ryan Bruns" />
          <AboutSub>
            Hi there! I'm Ryan, or as my coworkers like to call me "Buns", they say the "r" is silent and spell it with
            parentheses and everything. This is my gallery! My little slice of the internet pie. I like to always learn
            something new and don't enjoy the same old thing day in and day out. Far cry from where was last year,
            you'll often find me playing with some new tech to try and make my life easier.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Like I said above, I like to make my life easier, a lot of the projects I mentioned above are some highlights
          in my attempts, some more successful than others, but with each project I took one step closer to where I
          wanted to be. When I'm not{' '}
          <a href="https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif">tapping away at the keyboard</a> I like to do
          anything that doesn't have a screen. I've picked up reading, who knew books could be exciting, don't tell High
          School me!!
        </AboutDesc>
      </About>
      <Contact>
        <Inner>
          <Title>Reach out</Title>
          <ContactText>
            Say <a href="mailto:ryan.bruns7@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.github.com/snurby7">Github</a> & <a href="https://www.twitter.com/snurby7/">Twitter</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Ryan Bruns. <a href="https://github.com/snurby7/web-portfolio-2019">Github</a>.
          Inspired by <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
