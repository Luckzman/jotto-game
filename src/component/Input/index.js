import React from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../actions'

export class UnconnectedInput extends React.Component {
  constructor(props) {
    super(props);

    this.inputBox = React.createRef();
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const guessedWord = this.inputBox.value;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }

    this.inputBox.value = '';
  }

  render() {
    const { success } = this.props;
    const input = (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          ref={this.inputBox}
          id="word-guess"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary mb-2"
          onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    )

    return (<div data-test="input-container">
      {!success && input}
    </div>)
  };
}

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput)
