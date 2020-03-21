import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
`;

const Card = styled.a`
  color: black;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 25px;
  width: 30%;
  max-width: 25rem;
  text-align: center;
`;

const ColorCard = styled(Card)`
  color: white;
  background-image: linear-gradient(${(props) => (props.firstColor)}, ${(props) => (props.secondColor)});
`;

const GitArtImg = styled(Img)`
  margin-top: 2rem;
`;

export const Projects = () => {

  const [firstColor, setFirstColor] = useState('');
  const [secondColor, setSecondColor] = useState('');

  useEffect(() => {

    const fetchData = async () => {
      const firstColorResponse = await fetch('https://color-randomizer.herokuapp.com/api/color/random');
      const secondColorResponse = await fetch('https://color-randomizer.herokuapp.com/api/color/random');
      const firstJson = await firstColorResponse.json();
      const secondJson = await secondColorResponse.json();
      setFirstColor(firstJson.hex);
      setSecondColor(secondJson.hex);
    };
    fetchData();
  },[]);

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "git-art.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Container
    id="projects"
  >
    <Card
      href="https://github.com/maxnovak/git-art"
    >
      Git Art <br/> <br/>
      This is an Golang Application that allows you to input designs
      or a json and a year and be given a repository that can create
      art in your github history.  I recommend using a year where you
      have no existing history, because github seems to be quicker to
      pick up those changes.
      <GitArtImg fluid={data.placeholderImage.childImageSharp.fluid} />
    </Card>
    <ColorCard
      firstColor={firstColor}
      secondColor={secondColor}
      href="https://github.com/maxnovak/color-randomizer"
    >
      Color Randomizer <br/> <br/>
      This is a RESTful API that allows people to get random colors
      displayed.  It was mostly a fun exercise in creating a simple
      RESTful API in multiple languages to prove out how they can
      be easily swapped out for a UI once built.  Current
      implementations are Node.js, Python, & Ruby is in progress.
      <br/> <br/>
      Sorry if this is not legible, 'tis using the API to gradient
      between two random colors.  Give it a refresh if it hurts your
      eyes too much.
    </ColorCard>
    <Card
      href="https://github.com/maxnovak/personal-site"
    >
      Code for this site <br/> <br/>
      This is just a link to the code for this site.  It is all written
      using React & styled components, and uses GatsbyJS as a site generator.
    </Card>
  </Container>
};