import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tr extends Component {
  render() {
    const { expense:
         { description, method, tag, value, currency, exchangeRates } } = this.props;
    const { name, ask } = exchangeRates[currency];
    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ parseFloat(value).toFixed(2)}</td>
        <td>{ name }</td>
        <td>{parseFloat(ask).toFixed(2)}</td>
        <td>{parseFloat(value * ask).toFixed(2)}</td>
        <td>Real</td>
      </tr>
    );
  }
}

Tr.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.string,
  }).isRequired,
};

export default Tr;
