import React from "react";
import styled from "styled-components";

const Padlayout = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .gamepad-layout__btn {
    position: relative;
    display: inline-block;
    color: blue;
    border: 2px solid black;
    border-radius: 100px;
    min-width: 100px;
    min-height: 100px;
    text-align: center;
    .gamepad-layout__single-btn {
      position: absolute;
      width: 30px;
      height: 30px;
      background-color: red;
      border-radius: 100px;
      line-height: 30px;
    }
    .trg {
      background-color: green;
      position: absolute;
      top: 5px;
      left: 35px;
    }
    .cle {
      background-color: red;
      position: absolute;
      top: 35px;
      left: 65px;
    }
    .sre {
      background-color: orange;
      position: absolute;
      top: 35px;
      left: 5px;
    }
    .crs {
      background-color: blue;
      position: absolute;
      top: 65px;
      left: 35px;
    }
  }
`;

export const GamePadLayOut = () => {
  return (
    <Padlayout>
      <div className="gamepad-layout__btn">DPAD</div>
      <div className="gamepad-layout__btn">START AND ANALOG</div>
      <div className="gamepad-layout__btn">
        <div className="gamepad-layout__single-btn trg">1</div>
        <div className="gamepad-layout__single-btn cle">1</div>
        <div className="gamepad-layout__single-btn sre">1</div>
        <div className="gamepad-layout__single-btn crs">1</div>
      </div>
    </Padlayout>
  );
};
