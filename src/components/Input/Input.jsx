import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, testId, handleInput, children, name, value } = this.props;
    return (
      <input
        type={ type }
        data-testid={ testId }
        placeholder={ children }
        onChange={ handleInput }
        name={ name }
        value={ value }
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default Input;
