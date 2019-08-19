import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newGame, getSecretWord } from '../../actions';

export class NewWord extends Component {
  createNewGame = (evt) => {
    evt.preventDefault();
    this.props.newGame();
    this.props.getSecretWord();
  }

  render() {
    const { success } = this.props;
    return (
      success && (<div data-test='new-word'>
        <button
          data-test='new-word-btn'
          type="button"
          className="btn btn-success mb-2"
          onClick={this.createNewGame}>
          New Word
        </button>
      </div>)
    )
  }
}

NewWord.propTypes = {
  success: PropTypes.bool
}

const mapStateToProps = (props) => {
  return {
    success: props.success,
  }
}

export default connect(mapStateToProps, { newGame, getSecretWord })(NewWord);



