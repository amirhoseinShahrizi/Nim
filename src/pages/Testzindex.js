import React from "react";
import styled from "styled-components";

const R = styled.div`
  height: 100px;
  width: 100px;
`;

const R1 = styled(R)`
  background-color: yellow;
  position: fixed;
  left: 0%;
  top: 0%;
  z-index: 1;
`;

const R2 = styled(R)`
  background-color: orange;
  position: fixed;
  left: 1%;
  top: 2%;
  z-index: 3;
`;

const R3 = styled(R)`
  background-color: blue;
  position: fixed;
  left: 2%;
  top: 4%;
  z-index: 2;
`;

const C = styled.div`
  aspect-ratio: 1/1;
  width: 50px;
  border-radius: 50%;
  background-color: green;
`;

function Testzindex() {
  return (
    <div>
      <R1 />
      <R2>
        <C></C>
      </R2>
      <R3 />
    </div>
  );
}

export default Testzindex;
