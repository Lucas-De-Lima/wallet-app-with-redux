import React from 'react';
import Header from '../components/Header/Header';
import WalletForm from '../components/WalletForm/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-conteiner">
        <div className="header-form">
          <Header />
          <WalletForm />
        </div>
      </div>
    );
  }
}

export default Wallet;
