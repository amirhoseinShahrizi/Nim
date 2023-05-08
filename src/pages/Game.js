import React, { useEffect, useState } from "react";
import GameBoard from "../components/GameBoard";
import LevelSelectionModal from "../components/LevelSelectionModal";
import GameOver from "../components/GameOver";

function Game() {
  const [openLevelSelectionModal, setOpenLevelSelectionModal] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [gameContinues, setGameContinues] = useState(true);
  const [circlesRemain, setCirclesRemain] = useState(16);

  // const hardLevelComputerPlayer = () => {};
  // const mediumLevelComputerPlayer = () => {};
  // const easyLevelComputerPlayer = () => {};

  useEffect(() => {
    if (circlesRemain === 0) {
      setGameContinues(false);
    }
    console.log(circlesRemain);
  }, [circlesRemain]);

  return (
    <>
      <GameBoard
        setCirclesRemain={setCirclesRemain}
        circlesRemain={circlesRemain}
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
