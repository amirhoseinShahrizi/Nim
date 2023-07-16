import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeadLine = styled.h1``;

const DecreaseBtn = styled.button`
  width: 80px;
  height: 30px;
`;

const Btn = styled.button`
  width: 40px;
  height: 40px;
`;

const CheckBox = styled.button`
  height: 20px;
  width: 20px;
`;

function Testzindex() {
  const [number, setNumber] = useState(100);
  const [decreaseDeg, setDecreaseDeg] = useState(1);
  const [checkBoxEnable, setCheckBoxEnable] = useState(true);

  const btnOnClick = (event) => {
    if (checkBoxEnable) {
      setNumber(number - decreaseDeg);
    } else {
      setNumber(number - 1);
    }
  };

  const increaseOnClick = () => {
    setDecreaseDeg(decreaseDeg + 1);
  };
  const decreaseOnClick = () => {
    setDecreaseDeg(decreaseDeg - 1);
  };

  const checkBoxOnClick = () => {
    setCheckBoxEnable(!checkBoxEnable);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      btnOnClick();
    }, 1000);
    return () => clearInterval(interval);
  }, [number]);

  return (
    <Wrapper>
      <HeadLine>{number}</HeadLine>
      <Btn onClick={decreaseOnClick}>-</Btn>
      <DecreaseBtn onClick={btnOnClick}>click me</DecreaseBtn>
      <Btn onClick={increaseOnClick}>+</Btn>
      <CheckBox onClick={() => checkBoxOnClick()}>c</CheckBox>
    </Wrapper>
  );
}

export default Testzindex;
