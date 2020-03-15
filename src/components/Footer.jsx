import React from "react";
import styled from "styled-components";
import github from "images/github.svg";
import linkedin from "images/linkedin.svg";
import medium from "images/medium.svg";
import twitch from "images/twitch.svg";

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.a`
  margin: 0 0.3rem;
`;

const Text = styled.p`
  color: #000000;
  margin: 0 auto 0.3rem auto;
`;

export const Footer = () => {

  return <Container>
    <div>
      <Text>
        Me in Other places:
      </Text>
      <Image href="https://github.com/maxnovak">
        <img src={github} alt='github' width="30" height="30" />
      </Image>
      <Image href="https://www.linkedin.com/in/maxwell-novak-5178704b/">
        <img src={linkedin} alt='linkedin' width="30" height="30" />
      </Image>
      <Image href="https://medium.com/@novak.max">
        <img src={medium} alt='medium' width="30" height="30" />
      </Image>
      <Image href="https://www.twitch.tv/maxamander">
        <img src={twitch} alt='twitch' width="30" height="30" />
      </Image>
    </div>
    <div>
          © {new Date().getFullYear()}, Built with
      {" "}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </Container>;

};