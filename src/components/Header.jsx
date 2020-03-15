import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  justify-content: space-between;
  background-color: #35b8f4;
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