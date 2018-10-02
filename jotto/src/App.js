import React from "react";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import Input from "./Input";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />

        <Input />

        <GuessedWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}
