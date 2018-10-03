import React from "react";
import { connect } from "react-redux";

class Input extends React.Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          type="text"
          placeholder="Enter Guess"
          id="word-guess"
          className="mb-2 mx-sm-3 form-control"
          data-test="input-box"
        />
        <button
          type="submit"
          className="btn btn-primary mb-2"
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

export default connect(mapStateToProps)(Input);
