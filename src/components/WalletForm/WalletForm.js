import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../../redux/actions/walletActions';
import Input from '../Input/Input';

class WalletForm extends Component {
  state = {
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState(({
      [name]: value,
    }));
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <Input
          type="number"
          value={ value }
          name="value"
          testId="value-input"
          handleInput={ this.handleInput }
        />
        <Input
          type="text"
          value={ description }
          name="description"
          testId="description-input"
          handleInput={ this.handleInput }
        >
          Descrição
        </Input>
        <select
          value={ currency }
          name="currency"
          data-testid="currency-input"
          onChange={ this.handleInput }
        >
          { currencies.length && currencies
            .map((curr) => <option key={ curr } value={ curr }>{ curr }</option>) }
        </select>
        <select
          value={ method }
          name="method"
          data-testid="method-input"
          onChange={ this.handleInput }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          value={ tag }
          name="tag"
          data-testid="tag-input"
          onChange={ this.handleInput }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
