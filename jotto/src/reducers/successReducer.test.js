import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test("returns default initial state of 'false' when no action is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("returns state of 'true' upon receiving an action of type 'CORRECT_GUESS'", () => {
  // "undefined" first param will make it use the default state which is "false"
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
