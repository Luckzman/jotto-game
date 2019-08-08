import React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {

  render() {
    const { success } = this.props;
    const input = (
      <div data-test="input-container">
        <form>
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            id="word-guess"
            type="text"
            placeholder="enter guess"
          />
          <button
            data-test="submit-button"
            type="submit"
            className="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      </div>
    )

    return !success && input;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps)(Input)
