export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS"
};

export function correctGuess() {
  return {
    type: actionTypes.CORRECT_GUESS
  };
}
