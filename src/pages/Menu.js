import React from "react";
import styled from "styled-components";
import Circle from "../components/Circle";

const Bg = styled.div`
  background-color: #3d4974;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
`;

function Menu() {
  return (
    <Bg>
      <Circle />
    </Bg>
  );
}

export default Menu;
