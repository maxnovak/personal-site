/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Header, Footer }  from "components";

const Body = styled.div`
  margin: 0 auto;
  maxWidth: 960;
  padding: 0 1.0875rem;
`;

export const Layout = ({image, children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Header
        siteTitle={data.site.siteMetadata.title}
        image={image}
      />
      <Body>
        <div>{children}</div>
        <Footer></Footer>
      </Body>
    </React.Fragment>
  );

};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
