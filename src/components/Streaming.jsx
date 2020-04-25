import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
`;

export const Streaming = () => {

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://embed.twitch.tv/embed/v1.js";
    script.defer = true;
    script.addEventListener("load", () => {

    new window.Twitch.Embed("streaming",
      {
        channel: "maxamander",
        width: "100%",
        height: 800,
      });
    });

    document.body.appendChild(script);
    return () => {

      document.body.removeChild(script);
    
    };
  
  }, []);

  return <Container
    id="streaming"
  >
  </Container>;

};