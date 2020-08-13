import React from "react";
import styled from "styled-components";
import { GamePadInfoCard } from "../components/gamepad/gamepadcard.js";
import { GamePadLayOut } from "../components/gamepad/gamepadlayout.js";

const MainAreaContainer = styled.div`
  height: 70vh;
`;

export const MainArea = () => {
  const gamepadcardopen = true;

  return (
    <MainAreaContainer>
      {gamepadcardopen && <GamePadInfoCard />}
      <GamePadLayOut />
    </MainAreaContainer>
  );
};
