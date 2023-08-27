import React from "react";
import styled from "styled-components";

export default function BackgroundImage() {
  return (
    <Container>
      <img src="https://i.imgur.com/XcjXhcj.jpg" alt="background" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
