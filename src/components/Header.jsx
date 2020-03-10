import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Container = styled.header`
  background-color: #60BBBF;
  margin: 0 auto;
  maxWidth: 960;
  padding: 1.45rem 1.0875rem;
`;

const H1 = styled.h1`
  margin: 0;
`;

export const Header = ({ siteTitle }) => (
  <Container>
    <H1>
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        {siteTitle}
      </Link>
    </H1>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};