import { storeFactory } from "../test/testUtils";
import { guessWord } from "./actions";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const unsucessfulGuess = "train";

  describe("no guessed words", () => {
    let store;
    const initialState = { secretWord };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test("updates state correctly for an unsucessful guess", () => {
      store.dispatch(guessWord(unsucessfulGuess));

      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsucessfulGuess,
            letterMatchCount: 3
          }
        ]
      };

      expect(newState).toEqual(expectedState); // When comparing objects you must use "toEqual()" and not "toBe()"
    });

    test("updates state correctly for a sucessful guess", () => {
      store.dispatch(guessWord(secretWord));

      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      };

      expect(newState).toEqual(expectedState);
    });
  });

  describe("some guessed words", () => {
    const guessedWords = [
      {
        guessedWord: "agile",
        letterMatchCount: 1
      }
    ];

    const initialState = { guessedWords, secretWord };

    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test("updates state correctly for an unsucessful guess", () => {
      store.dispatch(guessWord(unsucessfulGuess));

      const newState = store.getState();

      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsucessfulGuess,
            letterMatchCount: 3
          }
        ]
      };

      expect(newState).toEqual(expectedState);
    });

    test("updates state correctly for a sucessful guess", () => {
      store.dispatch(guessWord(secretWord));

      const newState = store.getState();

      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      };

      expect(newState).toEqual(expectedState);
    });
  });
});
