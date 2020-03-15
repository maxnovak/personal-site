import React from "react";
import {
  Layout,
  Projects,
  SEO,
  Welcome,
} from "components";

const IndexPage = () => (
  <Layout>
    <SEO title="Maxwell Novak" />
    <Welcome />
    <Projects />
  </Layout>
);

export default IndexPage;
