import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  background: linear-gradient(180deg, #35b8f4 60%, #ebc517 100%);
  background-clip: padding-box;
  min-height: 100vh;
`;

const BigText = styled.p`
  margin: 0;
  padding-top: 13rem;
  font-weight: 800;
  font-size: 3.5rem;
  color: #FFFFFF;
`;

const Subtext = styled.p`
  margin: 0;
  padding-top: 3rem;
  font-size: 1.25rem;
  color: #FFFFFF;
`;

export const Welcome = () => (
  <Container>
    <BigText>Howdy!</BigText>
    <Subtext>I like working on odd projects, here is a small sample of them.</Subtext>
  </Container>
);