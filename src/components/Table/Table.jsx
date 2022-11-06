import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tr from '../Tr/Tr';

class Table extends Component {
  // handleClick = ({ target }) => {
  //   // const { dispatch, expenses } = this.props;
  //   const buttonTarget = target.innerText;
  //   console.log(buttonTarget);
  //   if (buttonTarget.innerText === 'Excluir') {
  //     console.log('botão de excluir');
  //   } if (buttonTarget.innerText === 'Editar') {
  //     console.log('botão de editar');
  //   }
  // };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {/* map nas expenses, criar novo componente que retorna um tr com os dados da expense */}
            { expenses.map((expense) => (<Tr key={ expense.id } expense={ expense } />)) }
            {/* <button
              type="button"
              onClick={ this.handleClick }
            >
              Editar

            </button>
            <button
              onClick={ this.handleClick }
              type="button"
              data-testid="delete-btn"
            >
              Excluir

            </button> */}
            {/* <Button
              data-testid="delete-btn"
              type="button"
              onClick={ this.handleClick }
            >
              Excluir
            </Button>

            <Button>
              Editar
            </Button> */}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Table);
