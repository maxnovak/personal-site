import React from "react";
import styled from "styled-components";
import { Image } from "components";

const BigText = styled.p`
  font-weight: 800;
  font-size: 1.875rem;
`;

export const Welcome = () => (
  <React.Fragment>
    <BigText>Howdy</BigText>
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
      <Image />
    </div>
  </React.Fragment>
);