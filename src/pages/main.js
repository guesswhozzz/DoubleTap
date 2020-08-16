import React, { useEffect } from "react";
import styled from "styled-components";
import { GamePadInfoCard } from "../components/gamepad/gamepadcard.js";
import { GamePadLayOut } from "../components/gamepad/gamepadlayout.js";
import { connect } from "react-redux";

const MainAreaContainer = styled.div`
  height: 500px;
`;

const MainArea = (props) => {
  console.log("mainarea render");

  const gamepadcardopen = props.state.gamepadconnected;
  return (
    <MainAreaContainer>
      {gamepadcardopen && <GamePadInfoCard props={props.state} />}
      <GamePadLayOut />
    </MainAreaContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.gamepadstatus,
  };
};
export default connect(mapStateToProps, null)(MainArea);
