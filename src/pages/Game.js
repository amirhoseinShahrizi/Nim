import React, { useEffect, useReducer, useState } from "react";
import GameBoard from "../components/GameBoard";
import LevelSelectionModal from "../components/LevelSelectionModal";
import GameOver from "../components/GameOver";
import GameBoard2 from "../components/GameBoard2";

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const randomNumberInRange = (min, max) => {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 0:
      return { ...state, 0: !state[0] };
    case 1:
      return { ...state, 1: !state[1] };
    case 2:
      return { ...state, 2: !state[2] };
    case 3:
      return { ...state, 3: !state[3] };
    case 4:
      return { ...state, 4: !state[4] };
    case 4:
      return { ...state, 4: !state[4] };
    case 5:
      return { ...state, 5: !state[5] };
    case 6:
      return { ...state, 6: !state[6] };
    case 7:
      return { ...state, 7: !state[7] };
    case 8:
      return { ...state, 8: !state[8] };
    case 9:
      return { ...state, 9: !state[9] };
    case 10:
      return { ...state, 10: !state[10] };
    case 11:
      return { ...state, 11: !state[11] };
    case 12:
      return { ...state, 12: !state[12] };
    case 13:
      return { ...state, 13: !state[13] };
    case 14:
      return { ...state, 14: !state[14] };
    case 15:
      return { ...state, 15: !state[15] };
  }
};

const circleExistanceArray = {};
const createCirclesExistanceArray = () => {
  for (let i = 0; i < 16; i++) {
    circleExistanceArray[i] = true;
  }
};

function Game() {
  const [circleExtState, dispatch] = useReducer(reducer, circleExistanceArray);
  const [openLevelSelectionModal, setOpenLevelSelectionModal] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [gameContinues, setGameContinues] = useState(true);
  const [circlesRemain, setCirclesRemain] = useState(16);
  const [yourTurn, setYourTurn] = useState(true);
  const [playerWin, setPlayerWin] = useState(null);

  let randomRow, randomCircleSelection, circlesRemainedInRow;

  const hardLevelComputerPlayer = () => {
    console.log("level hard move");
    setYourTurn(!yourTurn);
  };
  const mediumLevelComputerPlayer = () => {
    console.log("level medium move");
    setYourTurn(!yourTurn);
  };
  const easyLevelComputerPlayer = () => {
    if (circlesRemain === 0) {
      setGameContinues(false);
      return;
    }

    while (true) {
      randomRow = randomNumberInRange(1, 4);
      circlesRemainedInRow = 0;
      randomCircleSelection = 0;
      range(1, randomRow * 2 - 1, 1).map((circleNumber) => {
        if (
          circleExtState[
            (randomRow - 1) * (randomRow - 1) + circleNumber - 1
          ] === true
        ) {
          circlesRemainedInRow++;
        }
      });
      if (circlesRemainedInRow > 0) {
        randomCircleSelection = randomNumberInRange(1, circlesRemainedInRow);
        break;
      }

      // range(1, 4, 1).map((row) => {
      //   circlesRemainedInRow = 0;
      //   randomCircleSelection = 0;
      //   if (row === randomRow) {
      //     range(1, row * 2 - 1, 1).map((circleNumber) => {
      //       if (circleExtState[(row - 1) * (row - 1) + circleNumber - 1]) {
      //         circlesRemainedInRow++;
      //       }
      //     });
      //     if (circlesRemainedInRow !== 0) {
      //       randomCircleSelection = randomNumberInRange(
      //         1,
      //         circlesRemainedInRow
      //       );
      //     }
      //   }
      // });
      // if (circlesRemainedInRow !== 0) {
      //   break;
      // }
    }

    console.log(randomRow);
    console.log(randomCircleSelection);

    let z1 = 0;
    let z2 = 0;
    while (z1 <= randomCircleSelection - 1) {
      if (circleExtState[(randomRow - 1) * (randomRow - 1) + z2] === true) {
        dispatch({
          type: (randomRow - 1) * (randomRow - 1) + z2,
        });
        z1++;
      }
      z2++;
    }

    setCirclesRemain(circlesRemain - randomCircleSelection);
    // console.log("we reach here");

    setYourTurn(!yourTurn);
  };

  useEffect(() => {
    if (circlesRemain === 16) {
      createCirclesExistanceArray();
    }
    if (circlesRemain === 0) {
      setGameContinues(false);
    }
    // console.log(circlesRemain);

    if (!yourTurn) {
      const timeout = setTimeout(() => {
        if (selectedLevel === "Easy") {
          easyLevelComputerPlayer();
        } else if (selectedLevel === "Medium") {
          mediumLevelComputerPlayer();
        } else if (selectedLevel === "Hard") {
          hardLevelComputerPlayer();
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [circlesRemain, yourTurn]);

  return (
    <>
      <GameBoard
        setCirclesRemain={setCirclesRemain}
        circlesRemain={circlesRemain}
        setYourTurn={setYourTurn}
        yourTurn={yourTurn}
        setPlayerWin={setPlayerWin}
        circleExtState={circleExtState}
        dispatch={dispatch}
      />
      {/* <GameBoard2
        setCirclesRemain={setCirclesRemain}
        circlesRemain={circlesRemain}
        setYourTurn={setYourTurn}
        yourTurn={yourTurn}
      /> */}

      {!gameContinues && <GameOver playerWin={playerWin} />}
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
