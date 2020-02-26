import React from "react";
import styled from "styled-components";
import { Link } from "react-router";

// Import components
import Button from "./../components/Button";
import Container from "./../components/Container";
import Section from "./../components/Section";
import { Heading, Subheading } from "./../components/Typography";

const HomeWrapper = styled(Section)`
  background-image: url(https://source.unsplash.com/t3zrEm88ehc/480x800);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 480px) {
    background-image: url(https://source.unsplash.com/t3zrEm88ehc/768x1024);
  }

  @media (min-width: 768px) {
    background-image: url(https://source.unsplash.com/t3zrEm88ehc/1280x800);
  }

  @media (min-width: 1280px) {
    background-image: url(https://source.unsplash.com/t3zrEm88ehc/1600x900);
  }

  @media (min-width: 1600px) {
    background-image: url(https://source.unsplash.com/t3zrEm88ehc/1920x1080);
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  ${Container} {
    color: #fff;
  }

  ${Subheading} {
    margin-bottom: 32px;
  }
`;

// Using Button component but changing the element to 'a'
const HomeButton = Button.withComponent("a");

export default function Home() {
  return (
    <HomeWrapper centered>
      <Container>
        <Heading>Paul Fannon</Heading>

        <Subheading>Designer &amp; developer</Subheading>

        <HomeButton href="/portfolio">My work</HomeButton>
      </Container>
    </HomeWrapper>
  );
}
