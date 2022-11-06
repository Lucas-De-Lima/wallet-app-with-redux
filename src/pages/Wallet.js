import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
import WalletForm from '../components/WalletForm/WalletForm';

class Wallet extends React.Component {
  render() {
    const { editor } = this.props;
    return (
      <div className="wallet-conteiner">
        <div className="header-form">
          <Header />

          {editor ? (
            <WalletForm buttonName="Editar despesa" />
          ) : (
            <WalletForm buttonName="Adicionar despesa" />
          )}

          <Table />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ wallet: { editor } }) => ({
  editor,
});

Wallet.propTypes = {
  editor: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Wallet);
