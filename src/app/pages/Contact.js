import React, { useContext } from "react";
import styled from "styled-components";

//Import components
import AwesomeIcon from "./../components/AwesomeIcon";
import Container from "./../components/Container";
import Link from "./../components/Link";
import Section from "./../components/Section";
import { Heading, Text } from "./../components/Typography";
import { PageVisitContext } from "../Main";

const ContactLink = styled(Link)`
  margin-bottom: 32px;
  display: inline-block;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const SocialMediaList = styled.ul`
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    list-style-type: none;

    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  a {
    font-size: 18px;

    @media (min-width: 480px) {
      font-size: 24px;
    }
  }
`;

export default function Contact() {
  const { contactVisit } = useContext(PageVisitContext);
  return (
    <Section centered>
      <Container>
        <Heading>Say hello</Heading>
        <Text>
          I'm available for freelance work. If you are interested in a new
          project, collaboration, or just to chat, feel free to contact me.
        </Text>
        <ContactLink href="mailto:email@example.com">
          email@example.com
        </ContactLink>

        <Text>Follow me on the web:</Text>

        <SocialMediaList>
          <li>
            <Link href="">
              <AwesomeIcon icon="twitter" />
            </Link>
          </li>

          <li>
            <Link href="">
              <AwesomeIcon icon="linkedin" />
            </Link>
          </li>

          <li>
            <Link href="">
              <AwesomeIcon icon="behance" />
            </Link>
          </li>

          <li>
            <Link href="">
              <AwesomeIcon icon="dribbble" />
            </Link>
          </li>

          <li>
            <Link href="">
              <AwesomeIcon icon="github" />
            </Link>
          </li>

          <li>
            <Link href="">
              <AwesomeIcon icon="codepen" />
            </Link>
          </li>
        </SocialMediaList>
        <Text>
          {contactVisit < 2
            ? `You visited this page ${contactVisit} time`
            : `You visited this page ${contactVisit} times`}
        </Text>
      </Container>
    </Section>
  );
}
