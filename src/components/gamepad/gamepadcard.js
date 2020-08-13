import React, { useEffect, useState } from "react";
import padimg from "../../img/1.png";
import styled from "styled-components";

const GamePadInfoCardContainder = styled.div`
  font-family: "Ubuntu Mono", monospace;
  transition: all 0.3s;
  min-width: 300px;
  height: 420px;
  background-color: #1a1a1a;
  visibility: ${(props) => (props.status ? "visible" : "hidden")};
  opacity: ${(props) => (props.status ? 1 : 0)};
  position: absolute;
`;

const GamePadCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  &::before {
    transition: all 0.4s;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    clip-path: ${(props) =>
      props.status
        ? "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)"
        : "polygon(100% 0, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)"};
    background: rgb(0, 93, 189);
    background: linear-gradient(
      0deg,
      rgba(0, 93, 189, 1) 0%,
      rgba(255, 0, 102, 1) 100%
    );
  }
`;

const GamepadMain = styled.div`
  position: relative;
  .gamepad-main__mode {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Ubuntu Mono", monospace;
    text-transform: uppercase;
    font-size: 20px;
    padding-bottom: 6px;
    padding-top: 3px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    margin: 0 4px;
  }
  .gmaepad-main__image {
    display: flex;
    align-items: flex-end;
    position: absolute;
    z-index: 2;
    width: 300px;
    transition: height 1s;
    height: ${(props) => (props.status ? "215px" : "300px")};
    opacity: 20%;
  }
  .gmaepad-main__image-item {
    width: 100%;
    transform: rotate(-5deg);
  }
`;

const GamepadAbout = styled.div`
  transition: all 1s;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  bottom: 0;
  margin: 0 4px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 4px;
  z-index: 2;
  opacity: ${(props) => (props.status ? "100%" : "10%")};
  height: ${(props) => (props.status ? "200px" : "100px")};
  .gamepad-about__title {
    width: 100%;
    font-size: 18px;
    text-align: center;
    padding-bottom: 4px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .gamepad-about__credits {
    text-transform: uppercase;
    font-size: 16px;
    text-align: center;
    padding-top: 4px;
    visibility: ${(props) => (props.status ? "visible" : "hidden")};
    opacity: ${(props) => (props.status ? 1 : 0)};
    transition: 0.3s;
    transition-delay: 0.5s;
  }
`;

export const GamePadInfoCard = (props) => {
  const [gamePadObj, setGamePadObj] = useState({
    titleId: "PLAYSTATION(R)3 Controller (Vendor: 054c Product: 0268)",
    objectId: 10,
    name: "PLAYSTATION(R)3 Controller",
    vid: "054c",
    pid: "0268",
    manufacturer: "Sony Corp.",
  });
  const [visibility, setVisibiluty] = useState(true);
  const actionsTest = () => {
    if (visibility) {
      setVisibiluty(false);
    } else {
      setVisibiluty(true);
    }
  };
  useEffect(() => {
    console.log("render");
  }, []);
  return (
    <div>
      <button onClick={actionsTest}> ok</button>
      <GamePadInfoCardContainder status={visibility}>
        <GamePadCard status={visibility}>
          <GamepadMain status={visibility}>
            <div className="gamepad-main__mode">
              <div className="gamepad-main__mode--status">status:</div>
              <div className="gamepad-main__mode--status">con</div>
            </div>
            <div className="gmaepad-main__image">
              <img className="gmaepad-main__image-item" src={padimg} alt="" />
            </div>
          </GamepadMain>
          <GamepadAbout status={visibility}>
            <div className="gamepad-about__title">{gamePadObj.name}</div>
            <div className="gamepad-about__credits">
              {gamePadObj.manufacturer}
            </div>
          </GamepadAbout>
        </GamePadCard>
      </GamePadInfoCardContainder>
    </div>
  );
};
