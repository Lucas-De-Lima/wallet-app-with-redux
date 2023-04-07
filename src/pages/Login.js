import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { saveEmail } from '../redux/actions/userActions';
import './Login.css';
import logo from './logo.png';
import background from './background.svg';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    buttonDisable: true,
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState(({
      [name]: value,
    }), () => this.validationButton());
  };

  validateEmail = () => {
    const { email } = this.state;
    const regex = /[a-zA-Z]+@[A-Za-z0-9]+\.com/;
    return regex.test(email);
  };

  validationButton = () => {
    const { senha } = this.state;
    const tamanhoMin = 6;
    if (senha.length >= tamanhoMin && this.validateEmail()) {
      this.setState(({
        buttonDisable: false,
      }));
      return;
    }
    this.setState(({
      buttonDisable: true,
    }));
  };

  handleClick = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;
    dispatch(saveEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, senha, buttonDisable } = this.state;
    return (
      <div className="login-conteiner">
        <img src={ background } alt="foto-fundo" />
        <div className="login-card">
          <img src={ logo } alt="login-logo" />
          <Input
            type="text"
            value={ email }
            name="email"
            testId="email-input"
            handleInput={ this.handleInput }
          >
            E-mail
          </Input>
          <Input
            type="password"
            value={ senha }
            name="senha"
            testId="password-input"
            handleInput={ this.handleInput }
          >
            Senha
          </Input>
          <Button
            data-testid="login-button"
            handleClick={ this.handleClick }
            buttonDisable={ buttonDisable }
          >
            Entrar
          </Button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
