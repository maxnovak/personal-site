import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #60BBBF;
  margin: 0 auto;
  maxWidth: 960;
  padding: 1.45rem 1.0875rem;
`;

const H1 = styled.h1`
  margin: 0;
`;

const Links = styled.div`
  margin: auto 0;
  color: #FFFFFF;
`;

const Link = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  margin: 0 10px;
`;

export const Header = ({ siteTitle }) => (
  <Container>
    <H1>
      <Link
        href="/"
      >
        {siteTitle}
      </Link>
    </H1>
    <Links>
      <Link
        href="/"
      >
        Home
      </Link>
      |
      <Link
        href="/#projects"
      >
        Projects
      </Link>
      |
      <Link
        href="/#streaming"
      >
        Streaming
      </Link>
      |
      <Link
        href="/#about"
      >
        About
      </Link>
    </Links>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};