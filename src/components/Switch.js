import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80px;
  height: 35px;
  background-color: #3d4974;
  opacity: 80%;
  border-radius: 45px;
`;

const InsideCircle = styled.div`
  width: 33px;
  height: 33px;
  background-color: white;
  border-radius: 45px;
  opacity: 100%;
  margin-top: 1px;

  border-color: #3d4974;
  border-width: 1px;

  transition: all;
  transition-duration: 150ms;
`;

function Switch({ isSelected, setIsSelected, setWhosTurn }) {
  const insideCircleOnClick = () => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    if (isSelected) {
      setWhosTurn("computer");
    } else {
      setWhosTurn("player");
    }
  }, [isSelected]);

  return (
    <Container>
      <InsideCircle
        onClick={insideCircleOnClick}
        style={!isSelected ? { marginLeft: "1px" } : { marginLeft: "58%" }}
      ></InsideCircle>
    </Container>
  );
}

export default Switch;
