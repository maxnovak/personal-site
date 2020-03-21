import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem;
`;

const Card = styled.a`
  padding: 1rem;
  border: 1px solid black;
  border-radius: 25px;
`;

const ColorCard = styled(Card)`
  color: white;
  max-width: 25rem;
  text-align: center;
  background-image: linear-gradient(${(props) => (props.firstColor)}, ${(props) => (props.secondColor)});
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

  return <Container
    id="projects"
  >
    <Card
      href="https://github.com/maxnovak/git-art"
    >
      git-art
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
      code for this site
    </Card>
  </Container>
};