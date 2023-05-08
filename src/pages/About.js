import React from "react";
import styled from "styled-components";
import LittleMenu from "../components/LittleMenu";
import Me from "../images/me.jpg";

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
`;

const MyImg = styled.img`
  aspect-ratio: 1 / 1;
  height: 60%;
  border-radius: 50%;
  margin-bottom: 5%;
`;

const AMHeader = styled.h1`
  margin-bottom: 2%;
`;

const AMPlainText = styled.p`
  font-size: x-large;
`;

const AMText = styled.div`
  color: #2c3553;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AMContent = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10%;
`;

function About() {
  return (
    <Bg>
      {/* <LittleMenu /> */}
      <MainCircle>
        <AMContent>
          <MyImg src={Me} />
          <AMText>
            <AMHeader>Hey this Moouod👋🏻</AMHeader>
            <AMPlainText>
              cse student at Shirza University. And this is my bachelor's
            </AMPlainText>
            <AMPlainText>project. Thanks a lot for stopping by🌹</AMPlainText>
            <AMPlainText>You can reach me by</AMPlainText>
            <AMPlainText>amirhoseinshahrizi1378@gmail.com</AMPlainText>
          </AMText>
        </AMContent>
      </MainCircle>
    </Bg>
  );
}

export default About;
