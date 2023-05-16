import React from "react";
import styled from "styled-components";

const GameOverModalBG = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #3d4974;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 91;
`;

const GameOverModalContainer = styled.div`
  aspect-ratio: 1 / 1;
  width: 50vw;
  background-color: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 50px;
  /* border: 2px solid #3d4974; */
`;

const GameOverModalHeader = styled.h1`
  font-size: 5rem;
  color: #3d4974;
  margin-bottom: 20%;
`;

const PlayAgainBtn = styled.button`
  height: 6vh;
  width: 13vw;
  font-size: large;
  color: white;
  background-color: #3d4974;
  border-radius: 12px;
  position: absolute;
  bottom: 30%;
  border-color: transparent;
  cursor: pointer;
  opacity: 70%;
  :hover {
    opacity: 100%;
  }
`;

function GameOver({ playerWin }) {
  return (
    <GameOverModalBG>
      <GameOverModalContainer>
        <GameOverModalHeader>
          {playerWin ? "Victory 👏🏻" : "You Lost! 😢"}
        </GameOverModalHeader>
        <PlayAgainBtn onClick={() => window.location.reload(false)}>
          Play Again
        </PlayAgainBtn>
      </GameOverModalContainer>
    </GameOverModalBG>
  );
}

export default GameOver;
