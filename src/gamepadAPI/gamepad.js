import { store } from "../redux/store";
import { isGamePadConnected } from "../redux/gamePadReducer";
import { crossBtn } from "../redux/gamePadReducer";
console.log(store);

window.addEventListener("gamepadconnected", () => {
  store.dispatch(isGamePadConnected());
});

function unpdate() {
  let state = store.getState();
  const [gamepad] = navigator.getGamepads();
  window.requestAnimationFrame(unpdate);
  if (gamepad) {
    if (!Object.is(gamepad.buttons[0].pressed, state.gamepadstatus.cross)) {
      console.log("работает ");
      store.dispatch(crossBtn(gamepad.buttons[0].pressed));
    }
  }
}

window.requestAnimationFrame(unpdate);
export const ok = {};
/*
: GamepadButton {pressed: false, touched: false, value: 0}
1: GamepadButton {pressed: false, touched: false, value: 0}
2: GamepadButton {pressed: false, touched: false, value: 0}
3: GamepadButton {pressed: false, touched: false, value: 0}
4: GamepadButton {pressed: false, touched: false, value: 0}
5: GamepadButton {pressed: false, touched: false, value: 0}
6: GamepadButton {pressed: false, touched: false, value: 0}
7: GamepadButton {pressed: false, touched: true, value: 0}
8: GamepadButton {pressed: false, touched: false, value: 0}
9: GamepadButton {pressed: false, touched: false, value: 0}
10: GamepadButton {pressed: false, touched: false, value: 0}
11: GamepadButton {pressed: false, touched: false, value: 0}
12: GamepadButton {pressed: false, touched: false, value: 0}
13: GamepadButton {pressed: false, touched: false, value: 0}
14: GamepadButton {pressed: false, touched: false, value: 0}
15: GamepadButton {pressed: false, touched: false, value: 0}
16: GamepadButton {pressed: false, touched: false, value: 0}
17: GamepadButton {pressed: false, touched: false, value: 0}
length: 18
*/
