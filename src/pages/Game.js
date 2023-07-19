import React, { useEffect, useReducer, useState } from "react";
import GameBoard from "../components/GameBoard";
import LevelSelectionModal from "../components/LevelSelectionModal";
import GameOver from "../components/GameOver";

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
  const [whosTurn, setWhosTurn] = useState("player");

  let randomRow, randomCircleSelection, circlesRemainedInRow;
  let eA = [];
  let check1 = 0;
  let check2 = 0;
  let check4 = 0;

  let tea = [];
  const calculteScore = () => {
    let score = -Infinity;
    check1 = 0;
    check2 = 0;
    check4 = 0;

    tea.map((x) => {
      if (x / 4 >= 1) {
        check4++;
        x = x % 4;
      }
      if (x / 2 >= 1) {
        check2++;
        x = x % 2;
      }
      if (x === 1) {
        check1++;
      }
    });

    //scoring
    if (check1 % 2 === 0 && check2 % 2 === 0 && check4 % 2 === 0) {
      score = 10;
    } else {
      score = 0;
      if (check1 % 2 !== 0) score++;
      if (check2 % 2 !== 0) score++;
      if (check4 % 2 !== 0) score++;
    }

    return score;
  };

  const minimax = (ea) => {
    let bestScore = -Infinity;
    let bestMoveRow = -1;
    let bestMoveCirclesNum = -1;
    let tempScore;

    for (let z = 0; z < 4; z++) {
      for (let y = 1; y <= ea[z]; y++) {
        tea = [...ea];
        tea[z] -= y;
        // console.log(tea);

        tempScore = calculteScore(tea);
        if (bestScore < tempScore) {
          bestScore = tempScore;
          bestMoveRow = z;
          bestMoveCirclesNum = y;
        }
      }
    }

    return [bestMoveRow, bestMoveCirclesNum];
  };

  const hardLevelComputerPlayer = () => {
    if (circlesRemain === 0) {
      setGameContinues(false);
      return;
    }

    eA = [];

    check1 = 0;
    check2 = 0;
    check4 = 0;
    let bestMoveRow, bestMoveCirclesNum;

    let trueCounter;
    for (let a = 1; a <= 4; a++) {
      trueCounter = 0;

      for (let b = 0; b < a * 2 - 1; b++) {
        // console.log(circleExtState[(a - 1) * (a - 1) + b]);
        if (circleExtState[(a - 1) * (a - 1) + b] === true) {
          trueCounter++;
        }
      }

      eA.push(trueCounter);
    }

    [bestMoveRow, bestMoveCirclesNum] = minimax(eA);
    let z1 = 0;
    let z2 = 0;
    while (z1 <= bestMoveCirclesNum - 1) {
      if (circleExtState[bestMoveRow * bestMoveRow + z2] === true) {
        dispatch({
          type: bestMoveRow * bestMoveRow + z2,
        });
        z1++;
      }
      z2++;
    }
    setCirclesRemain(circlesRemain - bestMoveCirclesNum);
  };

  const mediumLevelComputerPlayer = () => {
    if (circlesRemain === 0) {
      setGameContinues(false);
      return;
    }
    if (randomNumberInRange(1, 2) === 1) {
      easyLevelComputerPlayer();
      // console.log("easy");
    } else {
      // console.log("hard");
      hardLevelComputerPlayer();
    }
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
    }

    // console.log(randomRow);
    // console.log(randomCircleSelection);

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
    // setYourTurn(!yourTurn);
  };

  useEffect(() => {
    if (circlesRemain === 16) {
      createCirclesExistanceArray();
      // if (whosTurn === "computer") {
      //   setYourTurn(!yourTurn);
      // }
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

        setYourTurn(!yourTurn);
      }, 1500);
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
          setWhosTurn={setWhosTurn}
          setYourTurn={setYourTurn}
          whosTurn={whosTurn}
        />
      )}
    </>
  );
}

export default Game;
