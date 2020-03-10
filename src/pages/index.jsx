import React from "react";
import styled from "styled-components";
import {
  Image,
  Layout,
  SEO,
} from "components";

const BigText = styled.p`
  font-weight: 800;
  font-size: 1.875rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Maxwell Novak" />
    <BigText>Howdy</BigText>
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
