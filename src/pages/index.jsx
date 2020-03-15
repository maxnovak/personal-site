import React from "react";
import {
  About,
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
    <About />
  </Layout>
);

export default IndexPage;
