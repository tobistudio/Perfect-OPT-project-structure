// import { actionTypes, correctGuess } from "./index";

// describe("correctGuess", () => {
//   test("returns an action with type 'CORRECT_GUESS'", () => {
//     const action = correctGuess();
//     expect(action).toEqual({
//       type: actionTypes.CORRECT_GUESS
//     });
//   });
// });

import moxios from "moxios";
import { storeFactory } from "../../test/testUtils";
import { getSecretWord } from "./";

describe("getSecretWord action creator", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("adds response to state", () => {
    const secretWord = "party";
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const newsState = store.getState();
      expect(newsState.secretWord).toBe(secretWord);
    });
  });
});
