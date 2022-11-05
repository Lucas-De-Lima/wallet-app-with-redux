import React from 'react';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
import WalletForm from '../components/WalletForm/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-conteiner">
        <div className="header-form">
          <Header />
          <WalletForm />
          <Table />
        </div>
      </div>
    );
  }
}

export default Wallet;
