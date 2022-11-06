import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tr from '../Tr/Tr';

class Table extends Component {
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
