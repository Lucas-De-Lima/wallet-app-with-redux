import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenses, editExpenses } from '../../redux/actions/walletActions';

class Tr extends Component {
  hendleDelete = () => {
    const { dispatch, expense } = this.props;
    dispatch(deleteExpenses(expense));
  };

  hendleEdit = () => {
    const { dispatch, expense } = this.props;
    dispatch(editExpenses(expense.id));
  };

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
        <td>
          <button
            type="button"
            onClick={ this.hendleEdit }
            data-testid="edit-btn"
          >
            Editar

          </button>
          <button
            onClick={ this.hendleDelete }
            type="button"
            data-testid="delete-btn"
          >
            Excluir

          </button>
        </td>
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
    id: PropTypes.number,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Tr);
