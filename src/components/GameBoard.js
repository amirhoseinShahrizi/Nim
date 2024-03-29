import React, { useEffect, useReducer, useState } from "react";
import styled, { keyframes } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bg = styled.div`
  background-color: #3d4974;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: -1;
`;

const MainCircle = styled.div`
  aspect-ratio: 1 / 1;
  width: 50vw;
  background-color: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  z-index: 5;
  border: 2px solid #3d4974;
`;

const LittleCirclesRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 70%;
`;

const AllCirclesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 70%;
  width: 100%;
  margin-bottom: 10%;
`;

const LittleCircles = styled.div`
  aspect-ratio: 1 / 1;
  width: 3vw;
  border-radius: 50%;
  border: 3px solid #3d4974;
  cursor: pointer;
  margin: 0 10px;
  background-color: #3d4974;
`;

const HiddenLittleCircles = styled.div`
  aspect-ratio: 1 / 1;
  width: 3vw;
  border-radius: 50%;
  margin: 0 10px;
  background-color: white;
`;

const SubmitButton = styled.button`
  width: 20vw;
  height: 5.5vh;
  font-size: 2vw;
  color: white;
  border-radius: 20px;
  border-color: transparent;
  background-color: #3d4974;
  position: absolute;
  bottom: 15%;
  cursor: pointer;
`;
const DisabledSubmitButton = styled.button`
  width: 20vw;
  height: 5.5vh;
  font-size: 2vw;
  color: white;
  border-radius: 20px;
  border-color: transparent;
  background-color: #3d4974;
  position: absolute;
  bottom: 15%;
  opacity: 60%;
`;

const PlayerRectangleRight = styled.div`
  width: 50%;
  height: 100%;
  position: fixed;
  left: 50%;
  background-color: white;
  z-index: 1;
`;
const PlayerRectangleLeft = styled.div`
  width: 50%;
  height: 100%;
  position: fixed;
  left: 0;
  background-color: white;
  z-index: 1;
`;

const Player1Text = styled.h1`
  font-size: 2vw;
  color: white;
  position: absolute;
  bottom: 7%;
  left: 4%;
`;
const Player2Text = styled.h1`
  font-size: 2vw;
  color: white;
  position: absolute;
  top: 7%;
  right: 4%;
`;

function GameBoard({
  circlesRemain,
  setCirclesRemain,
  setYourTurn,
  yourTurn,
  setPlayerWin,
  circleExtState,
  dispatch,
}) {
  // const [lcs, setLcs] = useState(true);
  // const [scs, setScs] = useState([]);

  const oneRowNotify = () => {
    toast.error("You can select circles in just one row!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const circleNotSelectedNotify = () => {
    toast.error("You should at least select one circle!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );

  // const [playerRectangleSide, setPlayerRectangleSide] = useState(true);

  const selectedCirclesList = [];

  const littleCircleOnClick = (event, row, circleNum) => {
    if (event.currentTarget.style.backgroundColor === "white") {
      event.currentTarget.style.backgroundColor = "#3d4974";
      // selectedCirclesList.splice(
      //   selectedCirclesList.indexOf({ row, circleNum }),
      //   1
      // );

      let index = 0;
      let i = 0;
      selectedCirclesList.map((circle) => {
        if (circle.row === row && circle.circleNum === circleNum) {
          index = i;
        }
        i++;
      });
      // console.log(selectedCirclesList.indexOf({ row, circleNum }));
      // console.log(index);
      // console.log(row, circleNum);
      selectedCirclesList.splice(index, 1);
    } else {
      event.currentTarget.style.backgroundColor = "white";
      selectedCirclesList.push({ row: row, circleNum: circleNum });
    }

    // console.log(row, circleNum);
    // console.log(selectedCirclesList);
  };

  const submitOnClick = (event) => {
    if (selectedCirclesList.length === 0) {
      circleNotSelectedNotify();
      return;
    }
    let tempRow = selectedCirclesList[0].row;
    let failFlag = false;
    selectedCirclesList.map((circle) => {
      if (circle.row !== tempRow) {
        oneRowNotify();
        failFlag = true;
        return;
      }
    });
    if (failFlag) {
      return;
    }
    selectedCirclesList.map((circle) => {
      dispatch({
        type: (circle.row - 1) * (circle.row - 1) + circle.circleNum - 1,
      });
    });

    if (circlesRemain - selectedCirclesList.length === 0 && yourTurn) {
      setPlayerWin(true);
    } else {
      setPlayerWin(false);
    }
    setCirclesRemain(circlesRemain - selectedCirclesList.length);
    setYourTurn(!yourTurn);
    // console.log(circlesRemain - selectedCirclesList.length);
    // console.log(circleExtState);
  };

  useEffect(() => {
    // console.log(circleExistanceArray);
  }, [yourTurn]);

  return (
    <Bg>
      <MainCircle>
        <AllCirclesContainer>
          {range(1, 4, 1).map((row) => (
            <LittleCirclesRow key={row}>
              {range(1, row * 2 - 1, 1).map((circleNum) =>
                circleExtState[(row - 1) * (row - 1) + circleNum - 1] ? (
                  <LittleCircles
                    key={(row - 1) * (row - 1) + circleNum - 1}
                    onClick={
                      yourTurn
                        ? (event) => littleCircleOnClick(event, row, circleNum)
                        : () => {}
                    }
                    style={
                      yourTurn ? { cursor: "pointer" } : { cursor: "default" }
                    }
                  />
                ) : (
                  <HiddenLittleCircles
                    key={(row - 1) * (row - 1) + circleNum - 1}
                  />
                )
              )}
            </LittleCirclesRow>
          ))}
        </AllCirclesContainer>
        {yourTurn ? (
          <SubmitButton onClick={() => submitOnClick()}>Submit</SubmitButton>
        ) : (
          <DisabledSubmitButton disabled={true}>Submit</DisabledSubmitButton>
        )}
      </MainCircle>
      <ToastContainer />
      {yourTurn ? <PlayerRectangleRight /> : <PlayerRectangleLeft />}
      <Player1Text>Your Turn</Player1Text>
      <Player2Text>Computer</Player2Text>
    </Bg>
  );
}

export default GameBoard;
