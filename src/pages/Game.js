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
  const [whosTurn, setWhosTurn] = useState("player");

  let randomRow, randomCircleSelection, circlesRemainedInRow;
  let eA = [];
  let tEA = [];
  let check1 = 0;
  let check2 = 0;
  let check4 = 0;

  const EEE = () => {
    while (true) {
      randomRow = randomNumberInRange(1, 4);
      circlesRemainedInRow = 0;
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
        break;
      }
    }

    // console.log(randomRow);
    // console.log(randomCircleSelection);

    let z1 = 0;
    let z2 = 0;
    while (z1 < 1) {
      if (circleExtState[(randomRow - 1) * (randomRow - 1) + z2] === true) {
        dispatch({
          type: (randomRow - 1) * (randomRow - 1) + z2,
        });
        z1++;
      }
      z2++;
    }

    setCirclesRemain(circlesRemain - 1);
  };

  const EEO = () => {
    let breakFlag = false;
    if (check4 % 2 === 1) {
      for (let c = 1; c <= 4; c++) {
        if (breakFlag) {
          break;
        }
        for (let d = 1; d <= c * 2 - 1; d++) {
          // console.log("got you");
          if (breakFlag) {
            break;
          }
          if (eA[c - 1][d - 1] === 4) {
            let z3 = 0;
            let z4 = 0;
            while (z3 < 4) {
              if (circleExtState[(c - 1) * (c - 1) + z4] === true) {
                dispatch({
                  type: (c - 1) * (c - 1) + z4,
                });
                z3++;
              }
              z4++;
            }
            breakFlag = true;
          }
        }
      }
      setCirclesRemain(circlesRemain - 4);
    } else if (check2 % 2 === 1) {
      for (let c = 1; c <= 4; c++) {
        if (breakFlag) {
          break;
        }
        for (let d = 1; d <= c * 2 - 1; d++) {
          // console.log("got you");
          if (breakFlag) {
            break;
          }
          if (eA[c - 1][d - 1] === 2) {
            let z3 = 0;
            let z4 = 0;
            while (z3 < 2) {
              if (circleExtState[(c - 1) * (c - 1) + z4] === true) {
                dispatch({
                  type: (c - 1) * (c - 1) + z4,
                });
                z3++;
              }
              z4++;
            }
            breakFlag = true;
          }
        }
      }
      setCirclesRemain(circlesRemain - 2);
    } else if (check1 % 2 === 1) {
      for (let c = 1; c <= 4; c++) {
        if (breakFlag) {
          break;
        }
        for (let d = 1; d <= c * 2 - 1; d++) {
          // console.log("got you");
          if (breakFlag) {
            break;
          }
          if (eA[c - 1][d - 1] === 1) {
            let z3 = 0;
            let z4 = 0;
            while (z3 < 1) {
              if (circleExtState[(c - 1) * (c - 1) + z4] === true) {
                dispatch({
                  type: (c - 1) * (c - 1) + z4,
                });
                z3++;
              }
              z4++;
            }
            breakFlag = true;
          }
        }
      }
      setCirclesRemain(circlesRemain - 1);
    } else {
      //i should randomly choose one cirlce
      // setCirclesRemain(circlesRemain - 1);
    }
    // console.log("level hard move");
    // setYourTurn(!yourTurn);
  };

  const OOO = () => {
    let breakFlag = false;
    for (let c = 1; c <= 4; c++) {
      if (breakFlag) {
        break;
      }

      if (eA[c - 1][0] === 4) {
        let z3 = 0;
        let z4 = 0;
        while (z3 < 3) {
          if (circleExtState[(c - 1) * (c - 1) + z4] === true) {
            dispatch({
              type: (c - 1) * (c - 1) + z4,
            });
            z3++;
          }
          z4++;
        }
        breakFlag = true;
      }
    }
    setCirclesRemain(circlesRemain - 3);
  };

  const EOO = () => {
    if (check1 % 2 === 0) {
    }
    if (check2 % 2 === 0) {
    }
    if (check4 % 2 === 0) {
    }
  };

  const hardLevelComputerPlayer = () => {
    if (circlesRemain === 0) {
      setGameContinues(false);
      return;
    }

    eA = [];
    tEA = [];
    check1 = 0;
    check2 = 0;
    check4 = 0;

    let trueCounter;
    for (let a = 1; a <= 4; a++) {
      trueCounter = 0;
      tEA = [];
      for (let b = 0; b < a * 2 - 1; b++) {
        // console.log(circleExtState[(a - 1) * (a - 1) + b]);
        if (circleExtState[(a - 1) * (a - 1) + b] === true) {
          trueCounter++;
        }
      }
      // console.log(trueCounter);
      // console.log(trueCounter % 4);
      if (trueCounter / 4 >= 1) {
        tEA.push(4);
        check4++;
        trueCounter = trueCounter % 4;
      }
      if (trueCounter / 2 >= 1) {
        tEA.push(2);
        check2++;
        trueCounter = trueCounter % 2;
      }
      if (trueCounter === 1) {
        check1++;
        tEA.push(1);
      }
      eA.push(tEA);
    }

    let determineSatate = (check1 % 2) + (check2 % 2) + (check4 % 2);

    if (determineSatate === 0) {
      // 1 2 4 are even
      // easyLevelComputerPlayer();
      EEE();
      return;
    } else if (determineSatate === 1) {
      EEO();
    } else if (determineSatate === 2) {
    } else if (determineSatate === 3) {
      OOO();
    }
    // switch (null) {
    //   case check1 % 2 !== 0 && check2 % 2 !== 0 && check4 % 2 !== 0:
    //   //convert 4 to 12
    //   case check1 % 2 === 0 && check2 % 2 === 0 && check4 % 2 === 0:
    //     easyLevelComputerPlayer();
    //     console.log("");
    //     return;
    // }

    // if (check1 % 2 === 0 && check2 % 2 === 0 && check4 % 2 === 0) {
    //   //all 3 even
    //   easyLevelComputerPlayer();
    //   return;
    // } else if (check1 % 2 !== 0 && check2 % 2 !== 0 && check4 % 2 !== 0) {

    // }

    console.log(eA);
    // console.log(check1);
    // console.log(check2);
    // console.log(check4);
  };

  const mediumLevelComputerPlayer = () => {
    if (circlesRemain === 0) {
      setGameContinues(false);
      return;
    }

    console.log("level medium move");
    easyLevelComputerPlayer();
    // setYourTurn(!yourTurn);
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
