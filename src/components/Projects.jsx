import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = styled.a`
  padding: 1rem;
  border: 1px solid black;
`;

export const Projects = () => (
  <Container
    id="projects"
  >
    <Card
      href="https://github.com/maxnovak/git-art"
    >
      git-art
    </Card>
    <Card
      href="https://github.com/maxnovak/color-randomizer"
    >
      color-randomizer
    </Card>
    <Card
      href="https://github.com/maxnovak/personal-site"
    >
      code for this site
    </Card>
  </Container>
);