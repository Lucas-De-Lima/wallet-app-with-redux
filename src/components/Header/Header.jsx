import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  calculateExpenses = () => {
    const { expenses } = this.props;
    let total = 0;
    expenses.forEach((expense) => {
      total += expense
        .exchangeRates[expense.currency].ask * expense.value;
    });
    return parseFloat(total).toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <div className="wallet-header">
        <div className="total-expenses">
          <p data-testid="total-field" className="p">
            Total de despesas:
            {' '}
            { this.calculateExpenses() }
          </p>
          <p data-testid="header-currency-field" className="BRL">BRL</p>
        </div>
        <p data-testid="email-field" className="user-email">{ email }</p>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Header);
