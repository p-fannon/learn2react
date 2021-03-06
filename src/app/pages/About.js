import React, { useContext } from "react";

// Import components
import Container from "./../components/Container";
import Section from "./../components/Section";
import { Heading, Subheading, Text } from "./../components/Typography";
import { PageVisitContext } from '../Main';

export default function About() {
  const { aboutVisit } = useContext(PageVisitContext)
  return (
    <Section centered>
      <Container>
        <Subheading>Paul Fannon</Subheading>
        <Heading>About Me</Heading>
        <Text>
          I am a digital designer and developer originally from St. Louis, MO
          with over 6 years of experience in the industry. I am a passionate
          creative that always leads by example and likes to get his hands
          dirty. I believe that design is only as powerful as the message it is
          able to carry. I constantly seek to inspire, and build the best work
          possible. I am a critical thinker and problem solver that pursues a
          scientific approach. I always make sure every aspect gets produced at
          the highest quality.
        </Text>
        <Text>
          Now I am working full time freelance as a designer and developer,
          building interactive digital products for clients from around the
          World. If you are interested in a new project, collaboration, or just
          to chat, feel free to contact me:
        </Text>
        <a href="mailto:email@example.com">email@example.com</a><br />
        <Text>
          {aboutVisit < 2
          ? `You visited this page ${aboutVisit} time`
        : `You visited this page ${aboutVisit} times`}
        </Text>
      </Container>
    </Section>
  );
}
