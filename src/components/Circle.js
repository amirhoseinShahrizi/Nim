import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainCircle = styled.div`
  aspect-ratio: 1 / 1;
  width: 50vw;
  background-color: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinksSecondRow = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 90%;
  /* margin-bottom: 50px; */
`;

const VerticalLine = styled.div`
  position: absolute;
  width: 2px;
  height: 100%;
  background-color: #3d4974;
  transform: rotate(45deg);
`;
const HorizontalLine = styled.div`
  position: absolute;
  width: 70%;
  height: 2px;
  background-color: #3d4974;
  transform: rotate(45deg);
`;

const LinkText = styled.text`
  color: #2c3553;
  font-size: 2.5vw;
  text-decoration: "none";
  font-weight: bold;
  opacity: 70%;
  :hover {
    opacity: 100%;
  }
`;

function Circle() {
  return (
    <>
      <MainCircle>
        <LinksContainer>
          <Link to="/game">
            <LinkText>Play Game</LinkText>
          </Link>
          <LinksSecondRow>
            <Link to="/tutorial">
              <LinkText>Tutorial</LinkText>
            </Link>
            <Link to="/about">
              <LinkText>About</LinkText>
            </Link>
          </LinksSecondRow>
          <Link to="/">
            <LinkText></LinkText>
          </Link>
        </LinksContainer>
        <HorizontalLine></HorizontalLine>
        <VerticalLine></VerticalLine>
      </MainCircle>
    </>
  );
}

export default Circle;
