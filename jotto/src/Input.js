import React from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions";

export class UnconnectedInput extends React.Component {
  constructor(props) {
    super(props);

    this.inputBox = React.createRef();
  }

  submitGuessedWord = event => {
    event.preventDefault();

    const guessedWord = this.inputBox.current.value;

    if (guessWord && guessWord.length) {
      this.props.guessWord(guessedWord);
    }

    this.inputBox.current.value = "";
  };

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          type="text"
          placeholder="Enter Guess"
          id="word-guess"
          className="mb-2 mx-sm-3 form-control"
          ref={this.inputBox}
          data-test="input-box"
        />
        <button
          type="submit"
          className="btn btn-primary mb-2"
          onClick={this.submitGuessedWord}
          data-test="submit-button"
        >
          Submit
        </button>
      </form>
    );

    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(
  mapStateToProps,
  { guessWord } // Shortcut instead of using mapDispatchToProps
)(UnconnectedInput);
