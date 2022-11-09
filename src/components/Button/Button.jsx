import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  render() {
    const { children, testId, handleClick, buttonDisable } = this.props;
    return (
      <button
        className="generic-bt"
        type="button"
        data-testid={ testId }
        onClick={ handleClick }
        disabled={ buttonDisable }
      >
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  testId: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  buttonDisable: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;

// Feito com a ajuda do Josiel
