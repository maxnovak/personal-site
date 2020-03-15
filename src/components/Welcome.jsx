import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  background: linear-gradient(180deg, #35b8f4 60%, #ebc517 100%);
  background-clip: padding-box;
  min-height: 100vh;
`;

const BigText = styled.p`
  padding-top: 13rem;
  font-weight: 800;
  font-size: 3.5rem;
`;

const Subtext = styled.p`
  padding-top: 3rem;
  font-size: 1.25rem;
`;

export const Welcome = () => (
  <Container
    id="welcome"
  >
    <BigText>Howdy!</BigText>
    <Subtext>I like working on odd projects, here is a small sample of them.</Subtext>
  </Container>
);