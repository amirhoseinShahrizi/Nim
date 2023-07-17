import React from "react";
import styled from "styled-components";
import Switch from "./Switch";
import { useState } from "react";
// import { IoSkullSharp, IoHappySharp, IoSadSharp } from "react-icons/io5";

const ModalBG = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #3d4974;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 90;
`;

const ModalContainer = styled.div`
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

const ModalHeader = styled.h1`
  font-size: 3.5rem;
  color: #3d4974;
  position: absolute;
  top: 20%;
`;

const LevelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  margin-top: 5%;
`;
const SwitchContainer = styled.div`
  width: 55%;
  position: relative;
  /* justify-content: center; */
  bottom: -15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SwitchText = styled.div`
  color: #3d4974;
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 75%;
`;

const Levels = styled.h1`
  color: #3d4974;
  cursor: pointer;
  font-size: 2.5rem;
  opacity: 70%;
  :hover {
    opacity: 1;
  }
`;

const LevelsSeparator = styled.h1`
  color: #3d4974;
  font-size: 2.75rem;
`;

// const LevelsTextAndIcon = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

function LevelSelectionModal({
  closeModal,
  selectedLevel,
  setWhosTurn,
  setYourTurn,
  whosTurn,
}) {
  const [isSelected, setIsSelected] = useState(false);
  const levelOnClick = (level) => {
    selectedLevel(level);
    // console.log(whosTurn);
    if (whosTurn !== "player") {
      setYourTurn(false);
    }
    closeModal(false);
  };

  return (
    <ModalBG>
      <ModalContainer>
        <ModalHeader>Select Difficulity</ModalHeader>
        <LevelsContainer>
          <Levels onClick={() => levelOnClick("Easy")}>Easy</Levels>
          <LevelsSeparator>/</LevelsSeparator>
          <Levels onClick={() => levelOnClick("Medium")}>Medium</Levels>
          <LevelsSeparator>/</LevelsSeparator>
          <Levels onClick={() => levelOnClick("Hard")}>Hard</Levels>
        </LevelsContainer>
        <SwitchContainer>
          <SwitchText style={!isSelected ? { opacity: "1" } : {}}>
            Player Starts
          </SwitchText>
          <Switch
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            setWhosTurn={setWhosTurn}
          />
          <SwitchText style={!isSelected ? {} : { opacity: "1" }}>
            Computer Starts
          </SwitchText>
        </SwitchContainer>
      </ModalContainer>
    </ModalBG>
  );
}

export default LevelSelectionModal;
