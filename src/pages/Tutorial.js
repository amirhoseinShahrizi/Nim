import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LittleMenu from "../components/LittleMenu";
import ArrowLeftS from "../images/ArrowLeft.svg";
import ArrowRightS from "../images/ArrowRight.svg";
// import { IoArrowBackCircleOutline } from "react-icons/io5";

const Bg = styled.div`
  background-color: #3d4974;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const LeftArrow = styled.img`
  aspect-ratio: 1 / 1;
  width: 2.5vw;
  opacity: 64%;
  position: absolute;
  left: 2%;
  cursor: pointer;
`;
const RightArrow = styled.img`
  aspect-ratio: 1 / 1;
  width: 2.5vw;
  opacity: 64%;
  position: absolute;
  right: 2%;
  cursor: pointer;
`;
// const RightArrowDiv = styled.div`
//   aspect-ratio: 1 / 1;
//   width: 2.5vw;
//   opacity: 64%;
//   position: absolute;
//   right: 2%;
//   cursor: pointer;
// `;

const TutorPageNumber = styled.h1`
  color: #3d4973;
  position: absolute;
  bottom: 12%;
  font-size: 5vw;
`;

const LittleCircle = styled.div`
  aspect-ratio: 1 / 1;
  background-color: black;
  opacity: 35%;
  border-radius: 50%;
  width: 1vw;
`;
// const SelectedCircle = styled.div`
//   aspect-ratio: 1 / 1;
//   background-color: black;
//   opacity: 50%;
//   border-radius: 50%;
//   width: 1vw;
// `;

const CirclesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 10%;
  width: 8%;
  /* margin-bottom: 5%; */
`;

const TutorialText = styled.p`
  width: 80%;
  font-size: 5vw;
  color: #3d4973;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Tutorial() {
  const tutorialTexts = [
    "Pick the last circle and win!",
    "In every turn, you can pick circles out of only one row.",
    "You are free to pick as many circles as you want from one row. GLHF",
  ];

  const [tutorNum, setTutorNum] = useState(1);
  const [TutorText, setTutorText] = useState(tutorialTexts[0]);

  const increaseTutorNum = () => {
    if (tutorNum <= 2) {
      setTutorNum(tutorNum + 1);
    } else {
      setTutorNum(1);
    }
  };

  const decreaseTutorNum = () => {
    if (2 <= tutorNum) {
      setTutorNum(tutorNum - 1);
    } else {
      setTutorNum(3);
    }
  };

  useEffect(() => {
    setTutorText(tutorialTexts[tutorNum - 1]);
  }, [tutorNum]);

  return (
    <Bg>
      {/* <LittleMenu /> */}
      <MainCircle>
        <TutorialText>{TutorText}</TutorialText>
        <LeftArrow src={ArrowLeftS} onClick={() => decreaseTutorNum()} />
        <RightArrow src={ArrowRightS} onClick={() => increaseTutorNum()} />
        <TutorPageNumber>{tutorNum}</TutorPageNumber>
        <CirclesContainer>
          <LittleCircle />
          <LittleCircle />
          <LittleCircle />
        </CirclesContainer>
      </MainCircle>
    </Bg>
  );
}

export default Tutorial;
