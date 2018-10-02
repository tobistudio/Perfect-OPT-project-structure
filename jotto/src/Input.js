import React from "react";
import { connect } from "react-redux";

class Input extends React.Component {
  render() {
    return (
      <div>
        <button>Hey</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Input);
