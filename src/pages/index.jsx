import React from "react";
import {
  Layout,
  Projects,
  SEO,
  Streaming,
  Welcome,
} from "components";

const IndexPage = () => (
  <Layout>
    <SEO title="Maxwell Novak" />
    <Welcome />
    <Projects />
    <Streaming />
  </Layout>
);

export default IndexPage;
