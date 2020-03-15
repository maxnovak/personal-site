import React from "react";
import styled from "styled-components";

const Container = styled.p`
  padding-top: 10rem;
  color: #000000;
  text-align: center;
`;

export const About = () => (
  <Container
    id="about"
  >
    Hi again, tis me Max.
    Here is a little more about me.
  </Container>
);