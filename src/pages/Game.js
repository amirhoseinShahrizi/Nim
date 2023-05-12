import React, { useEffect, useState } from "react";
import GameBoard from "../components/GameBoard";
import LevelSelectionModal from "../components/LevelSelectionModal";
import GameOver from "../components/GameOver";

function randomNumberInRange(min, max) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Game() {
  const [openLevelSelectionModal, setOpenLevelSelectionModal] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [gameContinues, setGameContinues] = useState(true);
  const [circlesRemain, setCirclesRemain] = useState(16);
  const [yourTurn, setYourTurn] = useState(true);

  const hardLevelComputerPlayer = () => {};
  const mediumLevelComputerPlayer = () => {};
  const easyLevelComputerPlayer = () => {};

  useEffect(() => {
    if (circlesRemain === 0) {
      setGameContinues(false);
    }
    console.log(circlesRemain);

    if (!yourTurn) {
      if (selectedLevel === "Easy") {
        easyLevelComputerPlayer();
      } else if (selectedLevel === "Medium") {
        mediumLevelComputerPlayer();
      } else if (selectedLevel === "Hard") {
        hardLevelComputerPlayer();
      }
    }
  }, [circlesRemain, yourTurn]);

  return (
    <>
      <GameBoard
        setCirclesRemain={setCirclesRemain}
        circlesRemain={circlesRemain}
        setYourTurn={setYourTurn}
        yourTurn={yourTurn}
      />
      {!gameContinues && <GameOver />}
      {openLevelSelectionModal && (
        <LevelSelectionModal
          closeModal={setOpenLevelSelectionModal}
          selectedLevel={setSelectedLevel}
        />
      )}
    </>
  );
}

export default Game;
