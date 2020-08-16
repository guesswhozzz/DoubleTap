/*TYPES*/
const GET_GAMEPAD = "STATUS/GET_GAME_PAD";
const BTN_PRESSED = "STATUS/BTN_PRESSED";

/*REDUCERS*/
const initialState = {
  gamepadconnected: false,
  gamepadObject: {
    titleId: "PLAYSTATION(R)3 Controller (Vendor: 054c Product: 0268)",
    objectId: 10,
    name: "PLAYSTATION(R)3 Controller",
    vid: "054c",
    pid: "0268",
    manufacturer: "Sony Corp.",
  },

  cross: false,
};
export const gamePadReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMEPAD:
      return { ...state, gamepadconnected: true };
    case BTN_PRESSED:
      return { ...state, cross: action.payload };
    default:
      return state;
  }
};

/*ACTIONS*/

export function isGamePadConnected() {
  return {
    type: GET_GAMEPAD,
  };
}
export function crossBtn(btnstatus) {
  return {
    type: BTN_PRESSED,
    payload: btnstatus,
  };
}
