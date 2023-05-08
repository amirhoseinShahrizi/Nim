import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const MainCircle = styled.div`
  aspect-ratio: 1 / 1;
  width: 12vw;
  background-color: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  margin: 1%;
  z-index: 100;
  border: 3px solid #3d4974;
`;

const LinksSecondRow = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-left: -5%;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const VerticalLine = styled.div`
  position: absolute;
  width: 2px;
  height: 101%;
  background-color: #3d4974;
  transform: rotate(45deg);
`;
const HorizontalLine = styled.div`
  position: absolute;
  width: 101%;
  height: 2px;
  background-color: #3d4974;
  transform: rotate(45deg);
`;

const LinkText = styled.text`
  color: #2c3553;
  font-size: 2vh;
  font-weight: bold;
  opacity: 60%;

  :hover {
    opacity: 100%;
  }
`;

const SelectedLinkText = styled(LinkText)`
  opacity: 100%;
  cursor: default;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "GAME":
      return {
        gameLink: true,
        aboutLink: false,
        tutorialLink: false,
        homeLink: false,
      };
    case "ABOUT":
      return {
        gameLink: false,
        aboutLink: true,
        tutorialLink: false,
        homeLink: false,
      };
    case "TUTORIAL":
      return {
        gameLink: false,
        aboutLink: false,
        tutorialLink: true,
        homeLink: false,
      };
    case "HOME":
      return {
        gameLink: false,
        aboutLink: false,
        tutorialLink: false,
        homeLink: true,
      };
  }
};

function LittleMenu() {
  const isSelected = useLocation();
  const [state, dispatch] = useReducer(reducer, {
    gameLink: false,
    aboutLink: false,
    tutorialLink: false,
    homeLink: true,
  });

  useEffect(() => {
    if (isSelected.pathname === "/game") {
      dispatch({ type: "GAME" });
    } else if (isSelected.pathname === "/about") {
      dispatch({ type: "ABOUT" });
    } else if (isSelected.pathname === "/tutorial") {
      dispatch({ type: "TUTORIAL" });
    } else if (isSelected.pathname === "/") {
      dispatch({ type: "HOME" });
    }
  }, [isSelected]);

  return (
    <MainCircle>
      <LinksContainer>
        <Link to="/game">
          {state.gameLink ? (
            <SelectedLinkText onClick={(event) => event.preventDefault()}>
              Play Game
            </SelectedLinkText>
          ) : (
            <LinkText>Play Game</LinkText>
          )}
        </Link>
        <LinksSecondRow>
          <Link to="/tutorial">
            {state.tutorialLink ? (
              <SelectedLinkText onClick={(event) => event.preventDefault()}>
                Tutorial
              </SelectedLinkText>
            ) : (
              <LinkText>Tutorial</LinkText>
            )}
          </Link>
          <Link to="/about">
            {state.aboutLink ? (
              <SelectedLinkText onClick={(event) => event.preventDefault()}>
                About
              </SelectedLinkText>
            ) : (
              <LinkText>About</LinkText>
            )}
          </Link>
        </LinksSecondRow>
        <Link to="/">
          {state.homeLink ? (
            <SelectedLinkText onClick={(event) => event.preventDefault()}>
              Home
            </SelectedLinkText>
          ) : (
            <LinkText>Home</LinkText>
          )}
        </Link>
      </LinksContainer>
      <HorizontalLine></HorizontalLine>
      <VerticalLine></VerticalLine>
    </MainCircle>
  );
}

export default LittleMenu;
